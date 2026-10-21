import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import { exibirProjetos } from "@/data/site";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section
          id="inicio"
          className="mx-auto w-full max-w-5xl px-6 pb-24 pt-20 sm:pt-28"
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-widest text-neon">
            Automação de processos e dados
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Transformo processos manuais em{" "}
            <span className="text-accent-soft">soluções automatizadas.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Desenvolvo automações com Python, Excel e Power Query para reduzir
            tarefas repetitivas, organizar bases de dados e dar mais
            consistência às informações do dia a dia operacional.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contato"
              className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent/85"
            >
              Entrar em contato
            </a>
            {exibirProjetos && (
              <a
                href="#projetos"
                className="rounded-md border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent-soft hover:text-accent-soft"
              >
                Conhecer os projetos
              </a>
            )}
          </div>
        </section>

        {exibirProjetos && <Projects />}
        <Technologies />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}