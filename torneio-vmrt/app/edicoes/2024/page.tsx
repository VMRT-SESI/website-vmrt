import NavBar from "@/components/Navbar";

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto mt-6 px-4 sm:px-6 lg:px-8 min-h-screen">
      <NavBar />
      <main className="py-8 px-8 space-y-16">
        <section className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-xl">
            <h1 className="text-orange-500 text-4xl font-bold">
              Nessa edição...
            </h1>
            <p className="mt-4 text-lg">
              Nossas equipes são desafiadas a realizar os desafios propostos na
              temporada 2023-2024 da FLL, a &ldquot;Masterpiece&rdquoot;.
            </p>
          </div>
          <iframe
            width="100%"
            height="300"
            className="rounded-2xl shadow-2xl md:w-1/2"
            src="https://www.youtube.com/embed/QArg43rCMBA?si=TBda7ixiiSAQfTZE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>

        <hr className="w-3/4 border-2 border-orange-500 mx-auto" />

        <p className="text-center text-lg max-w-3xl mx-auto">
          A ideia desta temporada é que os competidores se questionem sobre os
          problemas que seus hobbies favoritos possam ter dentro da sociedade,
          seja por falta de acesso ou qualquer outra situação.
        </p>

        <section className="flex flex-col lg:flex-row items-start gap-8">
          <img
            src="https://www.first-lego-league.org/interaktiv/de/assets/images/item_205147.png"
            alt="desafio de mesa"
            className="w-full lg:w-[45%] h-[480px] object-cover rounded-xl shadow-xl shadow-orange-400"
          />
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl text-orange-500 font-bold">
                Equipes Participantes
              </h2>
            </div>
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

        <section className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-purple-700 to-orange-500 px-8 py-8 rounded-xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 text-white">
            <div className="text-2xl font-bold">+60 Competidores</div>
            <hr className="border-white border-2 w-full lg:w-px" />
            <div className="text-2xl font-bold">13 Robôs</div>
            <hr className="border-white border-2 w-full lg:w-px" />
            <div className="text-2xl font-bold">+8 Horas de Torneio</div>
          </div>
          <img
            src="https://static.wixstatic.com/media/3a1650_c7d4f392e2dc482c936a91d117fc06c8~mv2.png/v1/fill/w_518,h_206,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LE_FLL2023_CHALLENGE_RGR_54.png"
            alt="minifigure"
            className="w-full lg:w-[40%] mt-4 lg:mt-0"
          />
        </section>

        <section className="flex flex-col lg:flex-row justify-around gap-8 py-8">
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
            <p className="text-sm text-orange-500">
              *Essa edição do torneio não é aberta para o público geral!*
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
