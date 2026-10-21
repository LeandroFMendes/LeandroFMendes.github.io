import { gruposTecnologias } from "@/data/technologies";

export default function Technologies() {
  return (
    <section
      id="tecnologias"
      aria-labelledby="titulo-tecnologias"
      className="border-t border-line"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <h2
          id="titulo-tecnologias"
          className="text-3xl font-semibold tracking-tight"
        >
          Tecnologias
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Ferramentas que utilizo para automatizar rotinas e tratar dados.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {gruposTecnologias.map((grupo) => (
            <div key={grupo.titulo} className="border-t border-line pt-6">
              <h3 className="text-sm font-medium uppercase tracking-wider text-accent-soft">
                {grupo.titulo}
              </h3>
              {grupo.nota && (
                <p className="mt-2 text-sm text-muted">{grupo.nota}</p>
              )}
              <ul className="mt-5 flex flex-wrap gap-2">
                {grupo.itens.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-surface px-3 py-1.5 text-sm text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}