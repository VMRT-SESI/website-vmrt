import NavBar from "@/components/Navbar";

const equipesInternas = [
  "Legends Wolf",
  "Magic Bloom",
  "Robótica I.A. Teens",
  "SESI Stars",
  "The Bubbles Squad",
];

const equipesExternas = [
  "BB8",
  "MORVAN",
  "Santllers",
  "Tech Ninjas",
  "TECHNOBOT",
  "VMRT",
];

const vencedoresInterno = [
  { categoria: "Champion’s Award", equipe: "SESI Stars" },
  { categoria: "Desafio de Mesa", equipe: "Magic Bloom" },
  { categoria: "Projeto de Inovação", equipe: "Legends Wolf" },
  { categoria: "Design do Robô", equipe: "Robótica I.A. Teen" },
  { categoria: "Core Values", equipe: "SESI Stars" },
];

const vencedoresExterno = [
  { categoria: "Champion’s Award", equipe: "BB8" },
  { categoria: "Desafio de Mesa", equipe: "Santllers" },
  { categoria: "Projeto de Inovação", equipe: "MORVAN" },
  { categoria: "Design do Robô", equipe: "BB8" },
  { categoria: "Core Values", equipe: "VMRT" },
];

const estatisticas = [
  { valor: "+60", label: "Competidores" },
  { valor: "11", label: "Robôs" },
  { valor: "+8", label: "Horas de torneio" },
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
              <div className="absolute right-0 top-1/3 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <span className="inline-flex items-center rounded-full border border-base-300 bg-base-100/80 px-4 py-2 text-sm font-medium shadow-sm">
                  Temporada FLL 2024–2025
                </span>

                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05]">
                    Explorando o
                    <span className="block text-primary">Desconhecido...</span>
                  </h1>

                  <p className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 text-base-content/75 leading-relaxed">
                    As equipes foram desafiadas a mergulhar fundo na temporada
                    <strong> Submerged</strong>, explorando os mistérios do
                    oceano e propondo soluções inovadoras para problemas reais
                    enfrentados por comunidades costeiras e pela vida marinha.
                  </p>
                </div>
              </div>

              <div className="w-full">
                <div className="overflow-hidden rounded-[1.75rem] border border-base-300 bg-base-200 shadow-2xl">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/Zof_mKRabtU?si=ro-Q6eeKa1IsuOXT"
                      title="Vídeo da temporada Submerged"
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
              Uma jornada de inovação inspirada pelos oceanos
            </h2>
            <p className="text-lg text-base-content/75 leading-relaxed">
              A temporada <strong>Submerged</strong> convida os competidores a
              mergulharem nos ecossistemas marinhos e explorarem formas de
              proteger a biodiversidade, restaurar habitats submersos e entender
              os impactos ambientais causados pelas ações humanas.
            </p>
          </section>

          {/* EQUIPES */}
          <section className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center">
            <div className="overflow-hidden rounded-[2rem] border border-base-300 bg-base-200 shadow-xl">
              <img
                src="https://framerusercontent.com/images/drxvy3BBSgOcGlUPP4CwDyyI.jpg"
                alt="Desafio de mesa da temporada Submerged"
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
                  O torneio reuniu equipes em disputas internas e externas,
                  promovendo integração, espírito esportivo e troca de
                  experiências em torno da robótica educacional.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="rounded-[1.5rem] border border-base-300 bg-base-200 p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Torneio VMRT • Interno
                  </h3>
                  <ul className="space-y-2">
                    {equipesInternas.map((equipe) => (
                      <li
                        key={equipe}
                        className="rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-base-content/85"
                      >
                        {equipe}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.5rem] border border-base-300 bg-base-200 p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-secondary-content mb-4">
                    Torneio VMRT • Externo
                  </h3>
                  <ul className="space-y-2">
                    {equipesExternas.map((equipe) => (
                      <li
                        key={equipe}
                        className="rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-base-content/85"
                      >
                        {equipe}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ESTATÍSTICAS */}
          <section className="rounded-[2rem] border border-base-300 bg-gradient-to-r from-info to-accent p-6 md:p-8 text-info-content shadow-lg">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {estatisticas.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-black/10 backdrop-blur-sm border border-white/15 p-5 text-center"
                  >
                    <p className="text-3xl md:text-4xl font-black">{item.valor}</p>
                    <p className="mt-1 text-sm md:text-base opacity-90">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <img
                  src="https://static.wixstatic.com/media/3a1650_a7d1c334024840d8b642e62d02ebdaaf~mv2.gif"
                  alt="Logo da temporada Submerged"
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
                Equipes vencedoras
              </h2>
              <p className="text-lg text-base-content/75 max-w-3xl mx-auto">
                Reconhecimento às equipes que se destacaram nas diferentes áreas
                avaliadas ao longo do torneio.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <article className="rounded-[2rem] border border-base-300 bg-base-200 p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary text-xl">
                    🏆
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Torneio Interno</h3>
                    <p className="text-base-content/65">
                      Resultados da disputa interna
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

              <article className="rounded-[2rem] border border-base-300 bg-base-200 p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent text-xl">
                    🥇
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Torneio Externo</h3>
                    <p className="text-base-content/65">
                      Resultados da disputa externa
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {vencedoresExterno.map((item) => (
                    <div
                      key={item.categoria}
                      className="rounded-2xl border border-base-300 bg-base-100 p-4"
                    >
                      <p className="text-sm font-semibold uppercase tracking-wide text-accent">
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
                <h3 className="text-2xl md:text-3xl font-bold">Datas do torneio</h3>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-base-300 bg-base-100 p-4">
                    <p className="font-semibold text-primary">
                      24 de junho
                    </p>
                    <p className="text-base-content/75">Torneio VMRT • Interno</p>
                  </div>

                  <div className="rounded-2xl border border-base-300 bg-base-100 p-4">
                    <p className="font-semibold text-primary">
                      26 de junho
                    </p>
                    <p className="text-base-content/75">Torneio VMRT • Externo</p>
                  </div>
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

                <div className="rounded-2xl border border-warning/30 bg-warning/10 p-4">
                  <p className="font-semibold text-warning-content">
                    Esta edição do torneio não é aberta ao público geral.
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