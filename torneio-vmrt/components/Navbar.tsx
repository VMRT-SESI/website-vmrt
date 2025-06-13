"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const links = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Galeria", href: "/galeria" },
    { name: "Contatos", href: "/contatos" },
  ];

  return (
    <nav
      className="flex justify-between items-center px-8 py-3 bg-[#121212] bg-opacity-80 bg-backdrop-blur rounded-2xl relative z-50"
      style={{ boxShadow: "0 0 15px 0 rgba(255, 136, 0, 0.50)" }}
    >
      <ul className="flex gap-8 relative">
        {links.map((link) => (
          <li key={link.name} className="relative group">
            <Link
              href={link.href}
              className={`text-white font-medium transition duration-300 ease-in-out hover:text-orange-400 ${
                pathname === link.href ? "text-orange-500 font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}

        {/* Dropdown para Edições */}
        <li className="relative group">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`text-white font-medium transition duration-300 ease-in-out hover:text-orange-400 ${
              pathname.startsWith("/edicoes") ? "text-orange-500 font-bold" : ""
            }`}
          >
            Edições
          </button>

          <ul
            className={`absolute left-0 mt-2 bg-[#1a1a1a] rounded-lg shadow-lg border border-orange-400 overflow-hidden transition-all duration-300 ${
              dropdownOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
            }`}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            {["2023", "2024", "2025"].map((year) => (
              <li key={year}>
                <Link
                  href={`/edicoes/${year}`}
                  className="block px-4 py-2 text-white hover:bg-orange-500 hover:text-black transition duration-200"
                >
                  {year}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>

      <div className="h-8 w-8 relative">
        <Image
          src="/Logo_VMRT_principal.png"
          alt="Logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </nav>
  );
}
