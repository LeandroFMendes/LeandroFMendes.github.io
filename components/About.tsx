export default function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="titulo-sobre"
      className="border-t border-line"
    >
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-24 md:grid-cols-[1fr_2fr]">
        <h2
          id="titulo-sobre"
          className="text-3xl font-semibold tracking-tight"
        >
          Sobre mim
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            Meu foco é identificar tarefas manuais e repetitivas e transformá-las
            em processos automatizados, confiáveis e fáceis de manter.
          </p>
          <p>
            Trabalho com automação de rotinas, tratamento e consolidação de
            dados e melhoria de processos operacionais, com o objetivo de
            reduzir esforço manual, evitar erros e dar mais consistência às
            informações.
          </p>
        </div>
      </div>
    </section>
  );
}