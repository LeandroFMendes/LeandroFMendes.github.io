"use client";

import { useState } from "react";
import Logo from "@/components/Logo";

const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#sobre", label: "Sobre" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <a href="#inicio" onClick={close} className="rounded-md">
          <Logo size={30} showName />
        </a>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-8 md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-accent/85"
          >
            Contato
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink md:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M4 4 L16 16 M16 4 L4 16" />
            ) : (
              <path d="M3 6 H17 M3 10 H17 M3 14 H17" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Principal (celular)"
          className="border-t border-line bg-surface md:hidden"
        >
          <ul className="mx-auto flex w-full max-w-5xl flex-col px-6 py-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block py-3 text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href="#contato"
                onClick={close}
                className="inline-block rounded-md bg-accent px-4 py-2 text-sm font-medium text-ink"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}