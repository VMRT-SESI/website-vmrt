import TournamentComingSoon from "@/components/emBreve";
import NavBar from "@/components/Navbar";

const equipesInternas = ["Sem Nome", "Sem Nome", "Sem Nome", "Sem Nome"];

const equipesExternas = ["Sem Nome", "Sem Nome", "Sem Nome", "Sem Nome"];

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
  { valor: "00", label: "Competidores" },
  { valor: "00", label: "Robôs" },
  { valor: "00", label: "Horas de torneio" },
];

export default function Page() {
  return (
    <TournamentComingSoon
      editionLabel="Edição 2026"
      title="Torneio VMRT 2026"
      description="Estamos preparando os conteúdos desta edição com informações, equipes participantes, resultados e registros do evento."
    />
  );
}

function CommingSoon() {
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
                  Temporada FLL 2025–2026
                </span>

                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05]">
                    Explorando o
                    <span className="block text-primary">Passado...</span>
                  </h1>

                  <p className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 text-base-content/75 leading-relaxed">
                    As equipes foram desafiadas a desenterrar o passado na
                    temporada
                    <strong> Unearthed</strong>, explorando as dificuldades
                    enfrentadas pelos arqueólogos e paleontólogos para descobrir
                    os segredos do passado, e como a tecnologia pode ajudar a
                    superar esses desafios.
                  </p>
                </div>
              </div>

              <div className="w-full">
                <div className="overflow-hidden rounded-[1.75rem] border border-base-300 bg-base-200 shadow-2xl">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/SGzJsg4UJ8Y?si=DqvQ2CBjIkwlfP-F"
                      title="Vídeo da temporada Unearthed"
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
              Uma jornada em descobrir o passado para construir o futuro
            </h2>
            <p className="text-lg text-base-content/75 leading-relaxed">
              A temporada <strong>Unearthed</strong> convida os competidores a
              desenterrar os mistérios do passado, enfrentando desafios que
              simulam as dificuldades de arqueólogos e paleontólogos. As equipes
              exploraram como a tecnologia pode ser usada para superar
              obstáculos, reconstruir artefatos e revelar segredos enterrados,
              promovendo aprendizado, criatividade e colaboração em torno da
              robótica educacional.
            </p>
          </section>

          {/* EQUIPES */}
          <section className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center">
            <div className="overflow-hidden rounded-[2rem] border border-base-300 bg-base-200 shadow-xl">
              <img
                src="https://instagram.fcgh69-1.fna.fbcdn.net/v/t51.75761-15/491445340_18499531765020192_7399420943417135723_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzYxNDQ4MTcwNzI0MTQ4NjM1MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4OTU3LnNkci5DMyJ9&_nc_ohc=mQg7R_y5U64Q7kNvwFfxXcq&_nc_oc=AdrRDDd_0w_Bki8BgUOaPIgm-PRvUxx92y_aYv-aQth9WKr_QKGxNCT5JY7VLmQywcF71UFWrCgO6RFTfpnHLnup&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcgh69-1.fna&_nc_gid=qZ_KUvGZXPYerLw-tx4Aww&_nc_ss=7a32e&oh=00_AfzTVmGZKLcszb1zIm6XW7r8RhmjWWFp0G4fdf0nMw5_DA&oe=69C5DACE"
                alt="Desafio de mesa da temporada Unearthed"
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
          <section className="rounded-[2rem] border border-base-300 bg-gradient-to-r from-[#FFA500] to-[#008080] p-6 md:p-8 text-white shadow-lg">
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                  src="https://www.playingatlearning.org/wp-content/uploads/2025/07/first_age_fll_unearthed_logoanimation_gif_800x800.gif"
                  alt="Logo da temporada Submerged"
                  className="w-28 sm:w-36 h-auto"
                />
              </div>
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
                  Datas do torneio
                </h3>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-base-300 bg-base-100 p-4">
                    <p className="font-semibold text-primary">18 de junho</p>
                    <p className="text-base-content/75">
                      Torneio VMRT • Interno
                    </p>
                  </div>

                  <div className="rounded-2xl border border-base-300 bg-base-100 p-4">
                    <p className="font-semibold text-primary">16 de junho</p>
                    <p className="text-base-content/75">
                      Torneio VMRT • Externo
                    </p>
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
