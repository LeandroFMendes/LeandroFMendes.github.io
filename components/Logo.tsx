type LogoProps = {
  /** Altura do símbolo em pixels */
  size?: number;
  /** Mostra o nome ao lado do símbolo */
  showName?: boolean;
  className?: string;
};

const NOME = "Leandro Mendes";

export default function Logo({
  size = 32,
  showName = false,
  className = "",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 56 56"
        fill="none"
        aria-hidden="true"
      >
        {/* Traço único: forma o L e continua no M */}
        <path
          d="M8 12 V44 H24 V12 L36 30 L48 12 V44"
          className="stroke-accent"
          strokeWidth="5"
          strokeLinejoin="miter"
          strokeLinecap="square"
        />
        {/* Detalhe em verde na ponta final do M */}
        <path
          d="M48 34 V44"
          className="stroke-neon"
          strokeWidth="5"
          strokeLinecap="square"
        />
      </svg>
      <span
        className={
          showName
            ? "text-base font-semibold tracking-tight text-ink"
            : "sr-only"
        }
      >
        {NOME}
      </span>
    </span>
  );
}