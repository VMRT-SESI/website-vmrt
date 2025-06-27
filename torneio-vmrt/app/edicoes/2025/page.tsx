import NavBar from "@/components/Navbar";

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto mt-6 px-2 sm:px-6 lg:px-8 min-h-screen">
      <NavBar />
      <main className="flex flex-col gap-16 py-12 px-4 sm:px-8">
        {/* Seção principal com vídeo */}
        <section className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-orange-vibrant">
              Explorando o Desconhecido...
            </h1>
            <p className="mt-4 text-lg max-w-md mx-auto lg:mx-0">
              As equipes foram desafiadas a mergulhar fundo na temporada
              2024-2025 da FLL, a &ldquo;Submerged&rdquo;, explorando os mistérios do oceano
              e propondo soluções inovadoras para problemas reais enfrentados
              por comunidades costeiras e pela vida marinha.
            </p>
          </div>
          <div className="w-full lg:w-1/2 aspect-video">
            <iframe
              className="w-full h-full rounded-2xl shadow-2xl"
              src="https://www.youtube.com/embed/Zof_mKRabtU?si=ro-Q6eeKa1IsuOXT"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <hr className="w-3/4 border-t-2 border-orange-vibrant mx-auto" />

        <p className="text-center text-lg max-w-3xl mx-auto px-2">
          A temporada &ldquo;Submerged&rdquo; convida os competidores a mergulharem nos
          ecossistemas marinhos e explorarem formas de proteger a
          biodiversidade, restaurar habitats submersos e entender os impactos
          ambientais causados pelas ações humanas.
        </p>

        {/* Seção de equipes */}
        <section className="flex flex-col lg:flex-row justify-start items-start gap-12">
          <img
            src="https://framerusercontent.com/images/drxvy3BBSgOcGlUPP4CwDyyI.jpg"
            alt="desafio de mesa"
            className="w-full lg:w-[45%] max-h-[400px] object-cover rounded-2xl shadow-[0_0_25px_#ff8a0076]"
          />
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-orange-vibrant">
              Equipes Participantes
            </h2>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-orange-400 mb-2">
                Torneio VMRT - Interno
              </h3>
              <ul className="list-[armenian] list-inside space-y-1">
                <li>Legends Wolf</li>
                <li>Magic Bloom</li>
                <li>Robótica I.A. Teens</li>
                <li>SESI Stars</li>
                <li>The Bubbles Squad</li>
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-orange-400 mb-2">
                Torneio VMRT - Externo
              </h3>
              <ul className="list-[armenian] list-inside space-y-1">
                <li>BB8</li>
                <li>MORVAN</li>
                <li>Santllers</li>
                <li>Tech Ninjas</li>
                <li>TECHNOBOT</li>
                <li>VMRT</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Seção de destaque */}
        <section className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-blue-800 to-cyan-400 px-4 sm:px-8 py-8 rounded-xl shadow-lg text-white gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 w-full">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-extrabold">+60</span>
              <span className="text-lg font-medium">Competidores</span>
            </div>
            <div className="hidden md:block border-l-2 border-white h-12" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-extrabold">11</span>
              <span className="text-lg font-medium">Robôs</span>
            </div>
            <div className="hidden md:block border-l-2 border-white h-12" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-extrabold">+8</span>
              <span className="text-lg font-medium">Horas de Torneio</span>
            </div>
          </div>
          <img
            src="https://static.wixstatic.com/media/3a1650_a7d1c334024840d8b642e62d02ebdaaf~mv2.gif"
            alt="Submerged logo"
            className="w-28 sm:w-36 h-auto mt-6 md:mt-0 md:ml-8"
          />
        </section>

        {/* Vencedores */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-orange-500 tracking-tight drop-shadow-sm">
            🏆 Vencedores
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-10 text-left">
            {/* Torneio Interno */}
            <div className="bg-[#121212] rounded-xl shadow-lg p-6 min-w-[270px] border-t-4 border-orange-400">
              <h4 className="text-xl font-semibold text-orange-400 mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-orange-400 rounded-full" /> Torneio Interno
              </h4>
              <ul className="space-y-2">
                <li>
                  <span className="font-bold text-orange-500">Champions Awards:</span>{" "}
                  <span className="font-semibold text-white">SESI Stars</span>
                </li>
                <li>
                  <span className="font-bold text-orange-500">Desafio de Mesa:</span>{" "}
                  <span className="font-semibold text-white">Magic Bloom</span>
                </li>
                <li>
                  <span className="font-bold text-orange-500">Projeto de Inovação:</span>{" "}
                  <span className="font-semibold text-white">Legends Wolf</span>
                </li>
                <li>
                  <span className="font-bold text-orange-500">Design do Robô:</span>{" "}
                  <span className="font-semibold text-white">Robótica I.A. Teen</span>
                </li>
                <li>
                  <span className="font-bold text-orange-500">Core Values:</span>{" "}
                  <span className="font-semibold text-white">SESI Stars</span>
                </li>
              </ul>
            </div>
            {/* Torneio Externo */}
            <div className="bg-[#121212] rounded-xl shadow-lg p-6 min-w-[270px] border-t-4 border-pink-500">
              <h4 className="text-xl font-semibold text-pink-500 mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-pink-500 rounded-full" /> Torneio Externo
              </h4>
              <ul className="space-y-2">
                <li>
                  <span className="font-bold text-pink-600">Champions Awards:</span>{" "}
                  <span className="font-semibold text-white">BB8</span>
                </li>
                <li>
                  <span className="font-bold text-pink-600">Desafio de Mesa:</span>{" "}
                  <span className="font-semibold text-white">Santllers</span>
                </li>
                <li>
                  <span className="font-bold text-pink-600">Projeto de Inovação:</span>{" "}
                  <span className="font-semibold text-white">MORVAN</span>
                </li>
                <li>
                  <span className="font-bold text-pink-600">Design do Robô:</span>{" "}
                  <span className="font-semibold text-white">BB8</span>
                </li>
                <li>
                  <span className="font-bold text-pink-600">Core Values:</span>{" "}
                  <span className="font-semibold text-white">VMRT</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Seção de datas e local */}
        <section className="flex flex-col sm:flex-row justify-around items-start gap-12">
          <div>
            <h5 className="text-xl text-orange-vibrant font-bold">Datas</h5>
            <h6 className="text-lg font-medium">
              24 de Junho - Torneio VMRT - Interno
            </h6>
            <h6 className="text-lg font-medium">
              26 de Junho - Torneio VMRT - Externo
            </h6>
          </div>
          <div>
            <h5 className="text-xl text-orange-vibrant font-bold">Local</h5>
            <h6 className="text-lg font-medium">SESI 402 Centro Educacional</h6>
            <p className="text-sm">
              Rua Julio Felipe Guedes, 138. Vila das Mercês. São Paulo - SP.
            </p>
            <p className="text-sm text-orange-vibrant font-semibold mt-1">
              *Essa edição do torneio não é aberta ao público geral!*
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
