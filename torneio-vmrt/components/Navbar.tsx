"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // trava scroll quando menu abre
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <div className="navbar bg-base-100 shadow-md px-4 sticky top-0 z-50">
        {/* LEFT */}
        <div className="navbar-start">
          <button
            className="btn btn-ghost lg:hidden"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>

          <Link
            href="/"
            className="flex items-center font-bold text-2xl hover:text-primary transition-colors"
          >
            <img
              src="/Logo_VMRT_principal.png"
              className="w-8 h-8 mr-4"
              alt="VMRT"
            />
            VMRT
          </Link>
        </div>

        {/* DESKTOP */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Torneio VMRT</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <Link href="/torneio/2026">Edição 2026</Link>
                  </li>
                  <li>
                    <Link href="/torneio/2025">Edição 2025</Link>
                  </li>
                  <li>
                    <Link href="/torneio/2024">Edição 2024</Link>
                  </li>
                  <li>
                    <Link href="/torneio/2023">Edição 2023</Link>
                  </li>
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

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-base-100 shadow-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <ul className="menu p-4 gap-2 w-full">
          <li>
            <Link href="/sobre" onClick={() => setOpen(false)}>
              Sobre
            </Link>
          </li>

          <li className="mt-2">
            <details>
              <summary>Torneio VMRT</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link href="/torneio/2026" onClick={() => setOpen(false)}>
                    Edição 2026
                  </Link>
                </li>
                <li>
                  <Link href="/torneio/2025" onClick={() => setOpen(false)}>
                    Edição 2025
                  </Link>
                </li>
                <li>
                  <Link href="/torneio/2024" onClick={() => setOpen(false)}>
                    Edição 2024
                  </Link>
                </li>
                <li>
                  <Link href="/torneio/2023" onClick={() => setOpen(false)}>
                    Edição 2023
                  </Link>
                </li>
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
      </div>
    </>
  );
}
