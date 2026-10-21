export type Projeto = {
  slug: string;
  titulo: string;
  problema: string;
  solucao: string;
  tecnologias: string[];
  /** Preencher somente com resultados comprovados. */
  resultados?: string[];
  /** Preencher somente quando existir um link público real. */
  link?: { rotulo: string; href: string };
  /** Remova esta linha (ou use false) quando o conteúdo for real. */
  provisorio?: boolean;
};

export const projetos: Projeto[] = [
  {
    slug: "robos-python",
    titulo: "Robôs de automação com Python",
    problema:
      "Tarefas operacionais repetitivas, executadas manualmente, consomem tempo e estão sujeitas a erros.",
    solucao:
      "Scripts em Python que executam a rotina de forma padronizada e repetível.",
    tecnologias: ["Python"],
    provisorio: true,
  },
  {
    slug: "tratamento-de-bases",
    titulo: "Classificação e tratamento de bases de dados",
    problema:
      "Bases vindas de fontes diferentes, com formatos inconsistentes, dificultam a consolidação das informações.",
    solucao:
      "Rotinas que classificam, limpam e consolidam os dados em uma estrutura única e confiável.",
    tecnologias: ["Python", "Excel", "Power Query"],
    provisorio: true,
  },
  {
    slug: "automacao-de-relatorios",
    titulo: "Automatização de relatórios",
    problema:
      "A atualização manual de relatórios e indicadores é demorada e difícil de manter consistente.",
    solucao:
      "Processo automatizado de atualização que reduz o trabalho manual e padroniza a entrega.",
    tecnologias: ["Excel", "Power Query", "Python"],
    provisorio: true,
  },
  {
    slug: "automacao-web",
    titulo: "Automação de processos web",
    problema:
      "Atividades repetitivas em sistemas e páginas web ocupam tempo que poderia ser usado em tarefas de maior valor.",
    solucao:
      "Automação que executa os passos no navegador de forma controlada e registra o que foi feito.",
    tecnologias: ["Python"],
    provisorio: true,
  },
];