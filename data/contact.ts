// Preencha antes de publicar. Canais vazios não aparecem no site.
const email = "leandromendes.92@hotmail.com";
const linkedin = "https://br.linkedin.com/"; // exemplo: "https://www.linkedin.com/in/seu-perfil"
const github = "https://github.com/seu-usuario"; // exemplo: "https://github.com/seu-usuario"

export type Canal = {
  rotulo: string;
  texto: string;
  href: string;
};

const semProtocolo = (url: string) => url.replace(/^https?:\/\//, "");

export const canais: Canal[] = [
  email && { rotulo: "E-mail", texto: email, href: `mailto:${email}` },
  linkedin && {
    rotulo: "LinkedIn",
    texto: semProtocolo(linkedin),
    href: linkedin,
  },
  github && { rotulo: "GitHub", texto: semProtocolo(github), href: github },
].filter((canal): canal is Canal => Boolean(canal));