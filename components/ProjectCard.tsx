import type { Projeto } from "@/data/projects";

export default function ProjectCard({ projeto }: { projeto: Projeto }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-line bg-surface p-6">
      <header className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold leading-snug tracking-tight">
          {projeto.titulo}
        </h3>
        {projeto.provisorio && (
          <span className="shrink-0 rounded-full border border-line px-2.5 py-1 text-xs text-muted">
            Conteúdo provisório
          </span>
        )}
      </header>

      <dl className="space-y-4 text-sm leading-relaxed">
        <div>
          <dt className="mb-1 text-xs font-medium uppercase tracking-wider text-accent-soft">
            Problema
          </dt>
          <dd className="text-muted">{projeto.problema}</dd>
        </div>
        <div>
          <dt className="mb-1 text-xs font-medium uppercase tracking-wider text-accent-soft">
            Solução
          </dt>
          <dd className="text-muted">{projeto.solucao}</dd>
        </div>
        {projeto.resultados && projeto.resultados.length > 0 && (
          <div>
            <dt className="mb-1 text-xs font-medium uppercase tracking-wider text-neon">
              Resultados
            </dt>
            <dd>
              <ul className="list-disc space-y-1 pl-5 text-muted">
                {projeto.resultados.map((resultado) => (
                  <li key={resultado}>{resultado}</li>
                ))}
              </ul>
            </dd>
          </div>
        )}
      </dl>

      <footer className="mt-6 flex flex-1 flex-col justify-end gap-4">
        <ul className="flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
          {projeto.tecnologias.map((tecnologia) => (
            <li
              key={tecnologia}
              className="rounded-md border border-line bg-surface-2 px-2.5 py-1 text-xs text-ink"
            >
              {tecnologia}
            </li>
          ))}
        </ul>
        {projeto.link && (
          <a
            href={projeto.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent-soft transition-colors hover:text-ink"
          >
            {projeto.link.rotulo}
          </a>
        )}
      </footer>
    </article>
  );
}