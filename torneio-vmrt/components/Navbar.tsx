"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function SideBar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [edicoesOpen, setEdicoesOpen] = useState(false);

  const links = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Galeria", href: "/galeria" },
    { name: "Contatos", href: "/contatos" },
  ];

  return (
    <>
      {/* Botão mobile flutuante */}
      {!sidebarOpen && (
        <button
          className="fixed top-4 left-4 z-[9999] bg-orange-500 p-2 rounded-full text-white md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu />
        </button>
      )}

      {/* Sidebar mobile ou nav desktop */}
      <nav
        className={`fixed md:static top-0 left-0 h-full md:h-auto w-64 md:w-full bg-[#121212] md:bg-transparent z-[9998] p-6 md:p-4 transition-transform duration-300 ease-in-out transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:flex md:items-center md:justify-between md:flex-row`}
      >
        {/* Header da sidebar/mobile */}
        <div className="flex items-center justify-between mb-6 md:mb-0">
          <div className="h-10 w-10 relative">
            <Image
              src="/Logo_VMRT_principal.png"
              alt="Logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X />
          </button>
        </div>

        {/* Links principais */}
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 relative">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                className={`block text-white font-medium px-2 py-1 rounded hover:bg-orange-500 hover:text-black transition ${
                  pathname === link.href ? "text-orange-400 font-bold" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Edições com submenu em todas as telas */}
          <li className="relative">
            <button
              onClick={() => setEdicoesOpen(!edicoesOpen)}
              className={`w-full text-left text-white font-medium flex items-center justify-between px-2 py-1 rounded hover:bg-orange-500 hover:text-black transition ${
                pathname.startsWith("/edicoes") ? "text-orange-400 font-bold" : ""
              }`}
            >
              Edições
              <ChevronDown
                className={`ml-1 transition-transform duration-200 ${
                  edicoesOpen ? "rotate-180" : ""
                }`}
                size={18}
              />
            </button>

            {edicoesOpen && (
              <ul
                className={`flex flex-col gap-1 bg-[#1e1e1e] rounded-md shadow-lg mt-2 z-50 ${
                  // mobile: estático | desktop: absoluto
                  sidebarOpen ? "pl-4" : "absolute left-0 top-full w-40"
                }`}
              >
                {["2023", "2024", "2025"].map((year) => (
                  <li key={year}>
                    <Link
                      href={`/edicoes/${year}`}
                      onClick={() => setSidebarOpen(false)}
                      className="block text-white text-sm px-4 py-2 rounded hover:bg-orange-500 hover:text-black transition"
                    >
                      {year}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Espaço adicional para empurrar conteúdo no mobile */}
      <div className="md:ml-0" />
    </>
  );
}