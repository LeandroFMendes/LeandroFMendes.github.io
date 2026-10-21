import ProjectCard from "@/components/ProjectCard";
import { projetos } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="titulo-projetos"
      className="border-t border-line"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <h2
          id="titulo-projetos"
          className="text-3xl font-semibold tracking-tight"
        >
          Projetos
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Exemplos de automações organizados por problema, solução e
          tecnologias utilizadas.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projetos.map((projeto) => (
            <ProjectCard key={projeto.slug} projeto={projeto} />
          ))}
        </div>
      </div>
    </section>
  );
}