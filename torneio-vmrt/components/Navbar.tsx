"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const tournamentYears = [2026, 2025, 2024, 2023];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/90 backdrop-blur">
        <div className="navbar max-w-7xl mx-auto px-4">
          {/* LEFT */}
          <div className="navbar-start">
            <button
              aria-label="Abrir menu"
              className="btn btn-ghost lg:hidden"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>

            <Link
              href="/"
              className="flex items-center gap-3 text-2xl font-bold"
            >
              <Image
                src="/Logo_VMRT_principal.png"
                alt="VMRT"
                width={32}
                height={32}
                priority
              />
              <span>VMRT</span>
            </Link>
          </div>

          {/* DESKTOP */}
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal gap-2 px-1">
              <li>
                <Link href="/sobre">Sobre</Link>
              </li>

              <li>
                <details>
                  <summary>Torneio VMRT</summary>
                  <ul className="bg-base-100 rounded-box w-52 p-2 shadow-lg">
                    {tournamentYears.map((year) => (
                      <li key={year}>
                        <Link href={`/torneio/${year}`}>Edição {year}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>

              <li>
                <Link href="/galeria">Galeria</Link>
              </li>

              <li>
                <Link href="/contato">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-all duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-base-100 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-4">
          <span className="text-lg font-bold">Menu</span>

          <button
            aria-label="Fechar menu"
            className="btn btn-ghost btn-sm"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <ul className="menu w-full p-4">
          <li>
            <Link href="/sobre" onClick={() => setOpen(false)}>
              Sobre
            </Link>
          </li>

          <li>
            <details>
              <summary>Torneio VMRT</summary>

              <ul>
                {tournamentYears.map((year) => (
                  <li key={year}>
                    <Link
                      href={`/torneio/${year}`}
                      onClick={() => setOpen(false)}
                    >
                      Edição {year}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>

          <li>
            <Link href="/galeria" onClick={() => setOpen(false)}>
              Galeria
            </Link>
          </li>

          <li>
            <Link href="/contato" onClick={() => setOpen(false)}>
              Contato
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
