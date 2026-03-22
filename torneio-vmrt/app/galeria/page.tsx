"use client";

import NavBar from "@/components/Navbar";
import Image from "next/image";

const albunsDestaque = [
  {
    titulo: "Torneio VMRT 2025",
    subtitulo: "Edição Externa",
    imagem: "/albums/2.png",
    link: "https://sesisenaispedu-my.sharepoint.com/:f:/g/personal/bruno_almeida35_portalsesisp_org_br/EkYDVxEPhsNCsjSShbzDY20BSOS9COmx8IgH1NgGrPliiQ?e=yq215V",
    alt: "Álbum de fotos do Torneio VMRT 2025 externo",
    badge: "Destaque",
  },
  {
    titulo: "Torneio VMRT 2025",
    subtitulo: "Edição Interna",
    imagem: "/albums/3.png",
    link: "https://sesisenaispedu-my.sharepoint.com/:f:/g/personal/bruno_almeida35_portalsesisp_org_br/EqD5N1pm8mNKgrCfTbxGiesBNpFBvKEvMFjGg11bBjYENw?e=u93KZC",
    alt: "Álbum de fotos do Torneio VMRT 2025 interno",
    badge: "Destaque",
  },
];

const outrosAlbuns = [
  {
    titulo: "Torneio VMRT 2024",
    subtitulo: "Edição Externa",
    imagem: "/albums/6.png",
    link: "https://photos.app.goo.gl/PNEv9LYFmi5kLXWy6",
    alt: "Álbum de fotos do Torneio VMRT 2024 externo",
  },
  {
    titulo: "Torneio VMRT 2024",
    subtitulo: "Edição Interna",
    imagem: "/albums/7.png",
    link: "https://photos.app.goo.gl/g4LNZkgJz54L7Zr66",
    alt: "Álbum de fotos do Torneio VMRT 2024 interno",
  },
  {
    titulo: "Torneio VMRT 2023",
    subtitulo: "Edição Interna",
    imagem: "/albums/8.png",
    link: "https://photos.app.goo.gl/WS5V7GMMHUcyTQRK6",
    alt: "Álbum de fotos do Torneio VMRT 2023 interno",
  },
];

type AlbumCardProps = {
  titulo: string;
  subtitulo: string;
  imagem: string;
  link: string;
  alt: string;
  badge?: string;
};

function AlbumCard({
  titulo,
  subtitulo,
  imagem,
  link,
  alt,
  badge,
}: AlbumCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-[1.75rem] border border-base-300 bg-base-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      aria-label={`${titulo} - ${subtitulo}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imagem}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-90" />

        {badge && (
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-content shadow">
            {badge}
          </span>
        )}

        <div className="absolute right-4 top-4 rounded-full bg-base-100/90 px-3 py-1 text-xs font-medium text-base-content shadow-sm">
          Abrir álbum
        </div>
      </div>

      <div className="space-y-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold leading-tight">{titulo}</h3>
            <p className="mt-1 text-sm text-base-content/70">{subtitulo}</p>
          </div>

          <div className="rounded-full border border-base-300 bg-base-100 px-3 py-1 text-xs font-medium text-base-content/70 transition-colors group-hover:border-primary/40 group-hover:text-primary">
            ↗
          </div>
        </div>
      </div>
    </a>
  );
}

export default function Galeria() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <NavBar />

        <main className="space-y-20 py-8 md:py-12">
          {/* HERO */}
          <section className="relative overflow-hidden rounded-[2rem] border border-base-300 bg-gradient-to-br from-base-200 via-base-100 to-base-200 px-6 py-12 md:px-10 md:py-16 shadow-sm">
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-4xl space-y-5 text-center mx-auto">
              <span className="inline-flex items-center rounded-full border border-base-300 bg-base-100/80 px-4 py-2 text-sm font-medium shadow-sm">
                Galeria VMRT
              </span>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05]">
                Reviva os momentos
                <span className="block text-primary">das nossas edições</span>
              </h1>

              <p className="text-lg md:text-xl text-base-content/75 leading-relaxed max-w-3xl mx-auto">
                Explore os registros dos torneios VMRT e acompanhe de perto a
                energia, os desafios, as conquistas e os bastidores que marcaram
                cada edição.
              </p>
            </div>
          </section>

          {/* DESTAQUES */}
          <section className="space-y-8">
            <div className="text-center space-y-3">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Destaques
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Álbuns em evidência
              </h2>
              <p className="text-lg text-base-content/75 max-w-3xl mx-auto">
                Confira os registros mais recentes do Torneio VMRT 2025, com
                momentos das edições interna e externa.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {albunsDestaque.map((album) => (
                <AlbumCard
                  key={`${album.titulo}-${album.subtitulo}`}
                  titulo={album.titulo}
                  subtitulo={album.subtitulo}
                  imagem={album.imagem}
                  link={album.link}
                  alt={album.alt}
                  badge={album.badge}
                />
              ))}
            </div>
          </section>

          {/* ACERVO */}
          <section className="space-y-8">
            <div className="text-center space-y-3">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Acervo
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">Outros álbuns</h2>
              <p className="text-lg text-base-content/75 max-w-3xl mx-auto">
                Navegue por edições anteriores e acompanhe a trajetória da VMRT
                ao longo dos anos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {outrosAlbuns.map((album) => (
                <AlbumCard
                  key={`${album.titulo}-${album.subtitulo}`}
                  titulo={album.titulo}
                  subtitulo={album.subtitulo}
                  imagem={album.imagem}
                  link={album.link}
                  alt={album.alt}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}