import NavBar from "@/components/Navbar";
import Image from "next/image";

export default function Galeria() {
  return (
    <div className="max-w-6xl mx-auto mt-6 px-4 sm:px-6 lg:px-8 min-h-screen">
      <NavBar />
      <div className="mt-6 flex flex-col items-center justify-center text-center h-56 gap-4">
        <p className="text-4xl font-semibold text-orange-vibrant">
          Calma ai robô!
        </p>
        <p className="text-lg w-md">
          As fotos do Torneio VMRT 2025 serão divulgadas a partir do dia 28 de
          Junho. Aguarde só mais um poquinho robozinho.
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-3xl font-semibold text-white mb-8">
          Outros álbuns...
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="https://photos.app.goo.gl/PNEv9LYFmi5kLXWy6"
            target="_blank"
            referrerPolicy="no-referrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="/albums/6.png"
              alt="Álbum de fotos do Torneio VMRT 2024"
              width={500}
              height={350}
              className="w-full h-auto rounded-2xl shadow-lg mb-4"
            />
          </a>
          <a
            href="https://photos.app.goo.gl/g4LNZkgJz54L7Zr66"
            target="_blank"
            referrerPolicy="no-referrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="/albums/7.png"
              alt="Álbum de fotos do Torneio VMRT 2024"
              width={500}
              height={350}
              className="w-full h-auto rounded-2xl shadow-lg mb-4"
            />
          </a>
          <a
            href="#"
            referrerPolicy="no-referrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="/albums/8.png"
              alt="Álbum de fotos do Torneio VMRT 2023"
              width={500}
              height={350}
              className="w-full h-auto rounded-2xl shadow-lg mb-4"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
