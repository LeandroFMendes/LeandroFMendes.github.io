import { canais } from "@/data/contact";

export default function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="titulo-contato"
      className="border-t border-line"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <h2
          id="titulo-contato"
          className="text-3xl font-semibold tracking-tight"
        >
          Contato
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Para oportunidades profissionais ou para conversar sobre a automação
          de um processo, entre em contato.
        </p>

        {canais.length > 0 ? (
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {canais.map((canal) => {
              const externo = canal.href.startsWith("http");
              return (
                <li key={canal.rotulo}>
                  <a
                    href={canal.href}
                    {...(externo
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="block h-full rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent-soft"
                  >
                    <span className="block text-xs font-medium uppercase tracking-wider text-accent-soft">
                      {canal.rotulo}
                    </span>
                    <span className="mt-2 block break-all text-ink">
                      {canal.texto}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="mt-10 text-muted">
            Os canais de contato serão adicionados antes da publicação.
          </p>
        )}
      </div>
    </section>
  );
}