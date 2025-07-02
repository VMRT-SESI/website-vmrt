"use client";

import NavBar from "@/components/Navbar";
import ImageCarousel from "@/components/ImageCarousel";
import Image from "next/image";

export default function Home() {
  const imagens = [
    { src: "/carrossel/1.png", alt: "Imagem 1" },
    { src: "/carrossel/2.png", alt: "Imagem 2" },
    { src: "/carrossel/3.png", alt: "Imagem 3" },
    { src: "/carrossel/4.png", alt: "Imagem 4" },
    { src: "/carrossel/5.png", alt: "Imagem 5" },
    { src: "/carrossel/6.png", alt: "Imagem 6" },
    { src: "/carrossel/7.png", alt: "Imagem 7" },
    { src: "/carrossel/8.png", alt: "Imagem 8" },
    { src: "/carrossel/9.png", alt: "Imagem 9" },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-6 px-2 sm:px-6 lg:px-8 min-h-screen">
      <NavBar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-md">
            Bem-vindo ao Torneio VMRT
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Uma competição de robótica que promove o aprendizado, a criatividade
            e a inovação entre os estudantes.
          </p>
        </section>

        <div className="rounded-3xl overflow-hidden shadow-2xl mb-12">
          <Image
            src="/default.png"
            alt="Imagem de destaque"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        <section className="relative bg-gradient-to-r from-orange-600 to-orange-400 rounded-3xl p-8 mb-16 overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="z-10 flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Torneio VMRT 2025
            </h2>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-4 drop-shadow">
              A nova edição está cheia de desafios, tecnologia e colaboração.
              As equipes estão preparadas para mostrar o que sabem fazer em
              robótica e programação.
            </p>
          </div>
          <button
            className="z-10 bg-black text-orange-400 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-orange-500 hover:text-white transition"
            onClick={() => (window.location.href = "/edicoes/2025")}
          >
            Saiba Mais
          </button>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl z-0" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl z-0" />
        </section>

        <section>
          <h2 className="text-3xl sm:text-4xl font-semibold text-orange-400 mb-4 text-center">
            Galeria de Imagens
          </h2>
          <ImageCarousel images={imagens} />
        </section>
      </main>
    </div>
  );
}
