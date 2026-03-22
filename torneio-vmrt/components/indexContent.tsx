import ImageCarousel from "@/components/ImageCarousel";

export default function IndexContent() {
  const imagens = [
    { src: "/fotos/foto2.jpeg", alt: "Equipe VMRT em competição" },
    { src: "/fotos/foto4.jpeg", alt: "Construção de robôs pela equipe VMRT" },
    { src: "/fotos/foto5.jpeg", alt: "Apresentação de projeto da equipe VMRT" },
    { src: "/fotos/foto6.jpeg", alt: "Equipe VMRT reunida" },
  ];

  const conquistas = [
    "2018 - Prêmio Inspiração (FLL)",
    "2019 - Prêmio Gracious Professionalism (FLL)",
    "2022 - Prêmio de Inovação (OBR)",
    "2024 - Prêmio de Projeto de Inovação (FLL - Campeonatos Internos)",
    "2025 - Prêmio Core Values (FLL - Campeonatos Internos)",
    "2025 - 1º Lugar em Design do Robô (FLL - Regional)",
    "2025 - 1º Lugar no Desafio de Mesa (FLL - Regional)",
  ];

  const torneioCards = [
    {
      titulo: "Propósito",
      descricao:
        "Criar um ambiente em que equipes possam evoluir tecnicamente, testar soluções, desenvolver estratégias e vivenciar a robótica de forma dinâmica, prática e colaborativa.",
    },
    {
      titulo: "Desenvolvimento Técnico",
      descricao:
        "Os desafios da FIRST LEGO League e da Olimpíada Brasileira de Robótica são o foco, mas o torneio também valoriza criatividade, inovação e aplicação prática do conhecimento técnico.",
    },
    {
      titulo: "Coopertition",
      descricao:
        "Mais do que competir, o torneio promove a cooperação entre equipes, incentivando a troca de experiências, aprendizado mútuo e espírito do coopertition.",
    },
    {
      titulo: "Comunidade",
      descricao:
        "O torneio fortalece conexões entre estudantes, mentores e equipes, promovendo troca de conhecimento, colaboração e crescimento coletivo.",
    },
  ];

  const destaques = [
    { numero: "2016", label: "Ano de fundação" },
    { numero: "9+", label: "Anos de história" },
    { numero: "FLL + OBR", label: "Competições" },
    { numero: "SP", label: "Vila das Mercês" },
  ];

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-14 space-y-20 md:space-y-24">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-[2rem] border border-base-300 bg-gradient-to-br from-base-200 via-base-100 to-base-200 px-6 py-14 md:px-12 md:py-20 shadow-sm">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute top-1/2 right-0 h-64 w-64 -translate-y-1/2 rounded-full bg-secondary/10 blur-3xl" />
            <div className="absolute -bottom-20 left-1/3 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl text-center space-y-8">
            <div className="inline-flex items-center rounded-full border border-base-300 bg-base-100/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur">
              Robótica • Educação • Inovação
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
                VMRT • Vila das Mercês Robotic Team
              </h1>

              <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-base-content/75">
                Uma equipe que transforma tecnologia em aprendizado, desafios em
                evolução e robótica em oportunidade para formar jovens com visão,
                criatividade e espírito de equipe.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {destaques.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-2xl md:text-3xl font-black">{item.numero}</p>
                  <p className="mt-1 text-sm text-base-content/70">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HISTÓRIA */}
        <section className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Nossa História
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Uma trajetória construída com aprendizado, desafio e evolução
              </h2>
            </div>

            <div className="space-y-4 text-base-content/80">
              <p className="text-lg leading-relaxed">
                Fundada em 2016, a VMRT é uma equipe de robótica da Vila das
                Mercês, em São Paulo, que participa de iniciativas como a{" "}
                <strong>FIRST LEGO League Challenge</strong> e a{" "}
                <strong>Olimpíada Brasileira de Robótica</strong>.
              </p>

              <p className="text-lg leading-relaxed">
                A equipe é formada por estudantes do 6º ano do Ensino
                Fundamental ao 3º ano do Ensino Médio, em uma jornada que une
                conhecimento técnico, colaboração, criatividade e crescimento
                pessoal.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-base-300 bg-base-200 shadow-2xl">
            <ImageCarousel images={imagens} />
          </div>
        </section>

        {/* CONQUISTAS */}
        <section className="rounded-[2rem] border border-base-300 bg-base-200 p-6 md:p-10 space-y-8">
          <div className="mx-auto max-w-3xl text-center space-y-3">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Nossa Jornada
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Conquistas que marcam nossa história
            </h2>
            <p className="text-lg text-base-content/75 leading-relaxed">
              Cada reconhecimento representa esforço, consistência, trabalho em
              equipe e a paixão que move nossa trajetória dentro da robótica.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {conquistas.map((conquista) => (
              <article
                key={conquista}
                className="group rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 h-1.5 w-14 rounded-full bg-primary/70 transition-all duration-300 group-hover:w-20" />
                <p className="font-medium leading-relaxed">{conquista}</p>
              </article>
            ))}
          </div>
        </section>

        {/* TORNEIO VMRT */}
        <section className="space-y-8 md:space-y-10">
          <div className="mx-auto max-w-4xl text-center space-y-4">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Torneio VMRT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Mais do que uma competição: uma experiência que conecta e desenvolve
            </h2>
            <p className="text-lg text-base-content/75 leading-relaxed">
              O Torneio VMRT é uma iniciativa anual criada para fortalecer a
              cultura da robótica, incentivar o desenvolvimento técnico e ampliar
              a troca de experiências entre estudantes, equipes e mentores. Mais
              do que disputar resultados, o torneio valoriza criatividade,
              estratégia, cooperação e aprendizado na prática.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {torneioCards.map((item) => (
              <div
                key={item.titulo}
                className="rounded-[1.75rem] border border-base-300 bg-base-200 p-7 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-2xl font-bold mb-3">{item.titulo}</h3>
                <p className="text-base-content/75 leading-relaxed">
                  {item.descricao}
                </p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6">
            <div className="rounded-[2rem] border border-base-300 bg-gradient-to-br from-base-200 via-base-100 to-base-200 p-8 md:p-10">
              <div className="max-w-3xl space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Um torneio criado para inspirar, desafiar e conectar
                </h3>
                <p className="text-lg text-base-content/75 leading-relaxed">
                  Ao reunir conhecimento técnico, colaboração e espírito de
                  equipe, o Torneio VMRT se consolida como uma experiência que
                  vai além da competição. É um espaço onde a robótica ganha
                  vida, ideias se transformam em projetos e estudantes se tornam
                  protagonistas do próprio aprendizado.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-base-300 bg-base-200 p-8 md:p-10 shadow-sm">
              <h3 className="text-2xl font-bold mb-5">O que o torneio promove</h3>
              <div className="space-y-4 text-base-content/75">
                <div className="rounded-xl bg-base-100 px-4 py-3 border border-base-300">
                  Inovação e Criatividade
                </div>
                <div className="rounded-xl bg-base-100 px-4 py-3 border border-base-300">
                  Coopertition
                </div>
                <div className="rounded-xl bg-base-100 px-4 py-3 border border-base-300">
                  Gracious Professionalism
                </div>
                <div className="rounded-xl bg-base-100 px-4 py-3 border border-base-300">
                  Pensamento Sistêmico
                </div>
                <div className="rounded-xl bg-base-100 px-4 py-3 border border-base-300">
                  STEM e Engenharia
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}