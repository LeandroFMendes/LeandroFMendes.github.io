export type GrupoTecnologias = {
  titulo: string;
  nota?: string;
  itens: string[];
};

export const gruposTecnologias: GrupoTecnologias[] = [
  {
    titulo: "Automação e dados",
    itens: [
      "Python",
      "Excel",
      "Power Query",
      "AutomationEdge",
      "Power Automate",
    ],
  },
  {
    titulo: "Desenvolvimento web e versionamento",
    nota: "Utilizadas na construção deste portfólio.",
    itens: ["TypeScript", "Next.js", "Git e GitHub"],
  },
];