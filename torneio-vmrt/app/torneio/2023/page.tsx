import NavBar from "@/components/Navbar";

const equipesInternas = [
  "Black Titans",
  "Ice Red",
  "Tex Six",
  "Quinteto Robótico",
];

const vencedoresInterno = [
  { categoria: "Champion’s Award", equipe: "Ice Red" },
  { categoria: "Desafio de Mesa", equipe: "Black Titans" },
  { categoria: "Projeto de Inovação", equipe: "Tex Six" },
  { categoria: "Design do Robô", equipe: "Ice Red" },
  { categoria: "Core Values", equipe: "Quinteto Robótico" },
];

const estatisticas = [
  { valor: "16", label: "Competidores" },
  { valor: "4", label: "Robôs" },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <NavBar />

        <main className="space-y-20 py-8 md:py-12">
          {/* HERO */}
          <section className="relative overflow-hidden rounded-[2rem] border border-base-300 bg-gradient-to-br from-base-200 via-base-100 to-base-200 px-6 py-10 md:px-10 md:py-14 shadow-sm">
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute right-0 top-1/3 h-56 w-56 rounded-full bg-warning/20 blur-3xl" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <span className="inline-flex items-center rounded-full border border-base-300 bg-base-100/80 px-4 py-2 text-sm font-medium shadow-sm">
                  Temporada FLL 2022–2023
                </span>

                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05]">
                    Edição
                    <span className="block text-primary">2023</span>
                  </h1>

                  <p className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 text-base-content/75 leading-relaxed">
                    Nossas equipes foram desafiadas a encarar os desafios da
                    temporada <strong>SUPERPOWERED</strong>, explorando o papel
                    da energia no cotidiano e desenvolvendo soluções ligadas à
                    inovação, eficiência e impacto social.
                  </p>
                </div>
              </div>

              <div className="w-full">
                <div className="overflow-hidden rounded-[1.75rem] border border-base-300 bg-base-200 shadow-2xl">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/okR1AMFNV3Q?si=nvzdC1AefCEf8Yda"
                      title="Vídeo da temporada SUPERPOWERED"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* INTRO */}
          <section className="max-w-4xl mx-auto text-center space-y-5">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Sobre a temporada
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Energia, sociedade e soluções para o futuro
            </h2>
            <p className="text-lg text-base-content/75 leading-relaxed">
              A proposta da temporada <strong>SUPERPOWERED</strong> incentivou
              os competidores a refletirem sobre diferentes fontes de energia,
              renováveis e não renováveis, analisando seus tipos, aplicações,
              usos e riscos dentro da sociedade.
            </p>
          </section>

          {/* EQUIPES */}
          <section className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center">
            <div className="overflow-hidden rounded-[2rem] border border-base-300 bg-base-200 shadow-xl">
              <img
                src="https://www.lcl.nl/wp-content/uploads/2023/09/20230128_111825-scaled.jpg"
                alt="Desafio de mesa da temporada SUPERPOWERED"
                className="w-full h-full max-h-[460px] object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Equipes participantes
                </span>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Times que fizeram parte desta edição
                </h2>
                <p className="text-lg text-base-content/75 leading-relaxed">
                  Nesta edição, o torneio interno reuniu equipes que colocaram
                  em prática estratégia, construção, programação e trabalho em
                  equipe em desafios inspirados no tema da energia.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-base-300 bg-base-200 p-6 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Torneio Interno FLL VMRT
                </h3>

                <div className="grid sm:grid-cols-2 gap-3">
                  {equipesInternas.map((equipe) => (
                    <div
                      key={equipe}
                      className="rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-base-content/85"
                    >
                      {equipe}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ESTATÍSTICAS */}
          <section className="rounded-[2rem] border border-base-300 bg-gradient-to-r from-warning to-primary p-6 md:p-8 text-warning-content shadow-lg">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {estatisticas.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-black/10 backdrop-blur-sm border border-white/15 p-5 text-center"
                  >
                    <p className="text-3xl md:text-4xl font-black">
                      {item.valor}
                    </p>
                    <p className="mt-1 text-sm md:text-base opacity-90">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <img
                  src="https://static.portaldaindustria.com.br/media/filer_public_thumbnails/filer_public/7a/07/7a07b209-3bb3-4fa1-9557-b6d2fb79eef9/superpoweres-logopng__250x171_q85_crop_subsampling-2_upscale.png__200x136_q85_crop_subsampling-2_upscale.png"
                  alt="Logo da temporada SUPERPOWERED"
                  className="w-28 sm:w-36 h-auto"
                />
              </div>
            </div>
          </section>

          {/* VENCEDORES */}
          <section className="space-y-8">
            <div className="text-center space-y-3">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Resultados
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Equipe vencedora e destaques da edição
              </h2>
              <p className="text-lg text-base-content/75 max-w-3xl mx-auto">
                Reconhecimento às equipes que se destacaram nas categorias
                avaliadas ao longo do torneio interno.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <article className="rounded-[2rem] border border-base-300 bg-base-200 p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary text-xl">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Torneio Interno</h3>
                    <p className="text-base-content/65">
                      Resultados da edição 2023
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {vencedoresInterno.map((item) => (
                    <div
                      key={item.categoria}
                      className="rounded-2xl border border-base-300 bg-base-100 p-4"
                    >
                      <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                        {item.categoria}
                      </p>
                      <p className="mt-1 text-lg font-bold">{item.equipe}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </section>

          {/* DATAS E LOCAL */}
          <section className="rounded-[2rem] border border-base-300 bg-base-200 p-6 md:p-10 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Cronograma
                </span>
                <h3 className="text-2xl md:text-3xl font-bold">
                  Data do torneio
                </h3>

                <div className="rounded-2xl border border-base-300 bg-base-100 p-4">
                  <p className="font-semibold text-primary">
                    28 de junho de 2023
                  </p>
                  <p className="text-base-content/75">
                    Torneio Interno FLL VMRT
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Local
                </span>
                <h3 className="text-2xl md:text-3xl font-bold">
                  SESI 402 Centro Educacional
                </h3>

                <div className="rounded-2xl border border-base-300 bg-base-100 p-4 space-y-2">
                  <p className="text-base-content/80">
                    Rua Julio Felipe Guedes, 138
                  </p>
                  <p className="text-base-content/80">
                    Vila das Mercês • São Paulo - SP
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}