import NavBar from "@/components/Navbar";

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto mt-6 px-4 sm:px-6 lg:px-8 min-h-screen">
      <NavBar />
      <main className="py-8 px-4 sm:px-8 space-y-16">
        {/* Seção principal */}
        <section className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-orange-500 text-4xl font-bold">Edição 2024</h1>
            <p className="mt-4 text-lg">
              Nossas equipes são desafiadas a realizar os desafios propostos na
              temporada 2023-2024 da FLL, a &ldquo;Masterpiece&rdquo;.
            </p>
          </div>
          <div className="w-full lg:w-1/2 aspect-video">
            <iframe
              className="w-full h-full rounded-2xl shadow-2xl"
              src="https://www.youtube.com/embed/QArg43rCMBA?si=TBda7ixiiSAQfTZE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <hr className="w-3/4 border-t-2 border-orange-500 mx-auto" />

        <p className="text-center text-lg max-w-3xl mx-auto">
          A ideia desta temporada é que os competidores se questionem sobre os
          problemas que seus hobbies favoritos possam ter dentro da sociedade,
          seja por falta de acesso ou qualquer outra situação.
        </p>

        {/* Equipes */}
        <section className="flex flex-col lg:flex-row items-start gap-10">
          <img
            src="https://www.first-lego-league.org/interaktiv/de/assets/images/item_205147.png"
            alt="desafio de mesa"
            className="w-full lg:w-[45%] max-h-[400px] object-cover rounded-2xl shadow-[0_0_25px_#ff8a0076]"
          />
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-3xl text-orange-500 font-bold">
              Equipes Participantes
            </h2>
            <div>
              <h3 className="text-xl text-orange-500 font-medium mb-2">
                Torneio Interno FLL VMRT
              </h3>
              <ul className="list-[armenian] pl-5 space-y-1">
                <li>Androids</li>
                <li>Capiguri</li>
                <li>Corações de Ferro</li>
                <li>Esquiletes</li>
                <li>Four Talents</li>
                <li>Lunáticos</li>
                <li>Os Teslas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-orange-500 font-medium mb-2">
                Torneio Externo FLL VMRT
              </h3>
              <ul className="list-[armenian] pl-5 space-y-1">
                <li>VMRT</li>
                <li>Robonáticos</li>
                <li>Sparkos</li>
                <li>MORVAN</li>
                <li>Tracktanas</li>
                <li>Tech Ninjas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Destaques numéricos */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-purple-700 to-orange-500 px-6 sm:px-12 py-10 rounded-xl text-white">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 w-full">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-extrabold">+60</span>
              <span className="text-lg font-medium">Competidores</span>
            </div>
            <div className="hidden md:block border-l-2 border-white h-12" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-extrabold">13</span>
              <span className="text-lg font-medium">Robôs</span>
            </div>
            <div className="hidden md:block border-l-2 border-white h-12" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-extrabold">+8</span>
              <span className="text-lg font-medium">Horas de Torneio</span>
            </div>
          </div>
          <img
            src="https://static.wixstatic.com/media/3a1650_c7d4f392e2dc482c936a91d117fc06c8~mv2.png/v1/fill/w_518,h_206,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LE_FLL2023_CHALLENGE_RGR_54.png"
            alt="minifigure"
            className="w-full lg:w-[40%] mt-4 lg:mt-0"
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
                  <span className="font-semibold text-white">Four Talents</span>
                </li>
                <li>
                  <span className="font-bold text-orange-500">Desafio de Mesa:</span>{" "}
                  <span className="font-semibold text-white">Capiguri</span>
                </li>
                <li>
                  <span className="font-bold text-orange-500">Projeto de Inovação:</span>{" "}
                  <span className="font-semibold text-white">Corações de Ferro</span>
                </li>
                <li>
                  <span className="font-bold text-orange-500">Design do Robô:</span>{" "}
                  <span className="font-semibold text-white">Esquiletes</span>
                </li>
                <li>
                  <span className="font-bold text-orange-500">Core Values:</span>{" "}
                  <span className="font-semibold text-white">Four Talents</span>
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
                  <span className="font-semibold text-white">MORVAN</span>
                </li>
                <li>
                  <span className="font-bold text-pink-600">Desafio de Mesa:</span>{" "}
                  <span className="font-semibold text-white">MORVAN</span>
                </li>
                <li>
                  <span className="font-bold text-pink-600">Projeto de Inovação:</span>{" "}
                  <span className="font-semibold text-white">VMRT</span>
                </li>
                <li>
                  <span className="font-bold text-pink-600">Design do Robô:</span>{" "}
                  <span className="font-semibold text-white">ROBONÁTICOS</span>
                </li>
                <li>
                  <span className="font-bold text-pink-600">Core Values:</span>{" "}
                  <span className="font-semibold text-white">Sparkos</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Datas e local */}
        <section className="flex flex-col sm:flex-row justify-around gap-8 py-8">
          <div>
            <h5 className="text-orange-500 text-2xl font-semibold">Datas</h5>
            <h6 className="text-lg mt-2">
              25 de Junho - Torneio Interno FLL VMRT
            </h6>
            <h6 className="text-lg">27 de Junho - Torneio Externo FLL VMRT</h6>
          </div>
          <div>
            <h5 className="text-orange-500 text-2xl font-semibold">Local</h5>
            <h6 className="text-lg mt-2">SESI 402 Centro Educacional</h6>
            <p className="text-base">
              Rua Julio Felipe Guedes, 138. Vilas das Merces. São Paulo - SP.
            </p>
            <p className="text-sm text-orange-500 mt-1">
              *Essa edição do torneio não é aberta para o público geral!*
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}