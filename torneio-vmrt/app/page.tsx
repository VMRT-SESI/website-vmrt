import NavBar from "@/components/Navbar";
import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
  const imagens = [
    { src: "/carrossel/1.png", alt: "Imagem 1" },
    { src: "/carrossel/2.png", alt: "Imagem 2" },
    { src: "/carrossel/3.png", alt: "Imagem 3" },
    { src: "/carrossel/4.png", alt: "Imagem 4" },
    { src: "/carrossel/5.png", alt: "Imagem 5" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
      <NavBar />
      <ImageCarousel images={imagens} />
    </div>
  );
}
