"use client";
import NavBar from "@/components/Navbar";
import Image from "next/image";

export default function Galeria() {
  return (
    <div className="max-w-6xl mx-auto mt-6 px-2 sm:px-6 lg:px-8 min-h-screen">
      <NavBar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Mensagem de espera */}
        <div className="bg-orange-100 border border-orange-300 rounded-2xl px-2 py-6 text-center shadow-lg max-w-3xl mx-auto">
          <p className="text-4xl font-bold text-orange-vibrant">
            Calma aí, robô!
          </p>
          <p className="text-lg mt-4 text-zinc-700">
            As fotos do Torneio VMRT 2025 serão divulgadas a partir do dia{" "}
            <span className="font-semibold text-orange-500">28 de Junho</span>.
            Aguarde só mais um pouquinho robozinho.
          </p>
        </div>

        {/* Outros álbuns */}
        <div>
          <h2 className="text-3xl font-bold text-orange-vibrant mb-6 text-center">
            Outros álbuns
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <a
              href="https://photos.app.goo.gl/PNEv9LYFmi5kLXWy6"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition-transform hover:scale-105"
            >
              <Image
                src="/albums/6.png"
                alt="Álbum de fotos do Torneio VMRT 2024"
                width={500}
                height={350}
                className="rounded-2xl w-full h-auto group-hover:shadow-orange-300"
              />
              <p className="mt-2 text-center text-zinc-100 font-medium">
                Torneio VMRT 2024 (Interno)
              </p>
            </a>

            <a
              href="https://photos.app.goo.gl/g4LNZkgJz54L7Zr66"
              target="_blank"
              rel="noopener noreferrer"
              className="group transform transition-transform hover:scale-105"
            >
              <Image
                src="/albums/7.png"
                alt="Álbum de fotos do Torneio VMRT 2024"
                width={500}
                height={350}
                className="rounded-2xl w-full h-auto group-hover:shadow-orange-300"
              />
              <p className="mt-2 text-center text-zinc-100 font-medium">
                Torneio VMRT 2024 (Externo)
              </p>
            </a>

            <a
              href="#"
              className="group transform transition-transform hover:scale-105"
            >
              <Image
                src="/albums/8.png"
                alt="Álbum de fotos do Torneio VMRT 2023"
                width={500}
                height={350}
                className="rounded-2xl w-full h-auto"
              />
              <p className="mt-2 text-center text-zinc-100 font-medium">
                Torneio VMRT 2023 (Interno)
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
