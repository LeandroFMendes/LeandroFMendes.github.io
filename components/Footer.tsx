import Logo from "@/components/Logo";
import { canais } from "@/data/contact";

const navegacao = [
  { href: "#projetos", label: "Projetos" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <a href="#inicio" className="w-fit rounded-md">
          <Logo size={28} showName />
        </a>

        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {navegacao.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
            {canais.map((canal) => (
              <li key={canal.rotulo}>
                <a
                  href={canal.href}
                  {...(canal.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="text-muted transition-colors hover:text-ink"
                >
                  {canal.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto w-full max-w-5xl px-6 py-5 text-xs text-muted">
          © {ano} Leandro Mendes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}