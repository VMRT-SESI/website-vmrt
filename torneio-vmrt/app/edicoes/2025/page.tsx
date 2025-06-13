import NavBar from "@/components/Navbar";

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto mt-6 px-4 sm:px-6 lg:px-8 min-h-screen">
      <NavBar />
      <main className="flex flex-col gap-16 py-12 px-8">
        <section className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h1 className="text-4xl font-bold text-orange-vibrant">
              Explorando o Desconhecido...
            </h1>
            <p className="mt-4 text-lg max-w-md">
              As equipes foram desafiadas a mergulhar fundo na temporada
              2024-2025 da FLL, a &ldquo;Submerged&rdquo;, explorando os mistérios do oceano
              e propondo soluções inovadoras para problemas reais enfrentados
              por comunidades costeiras e pela vida marinha.
            </p>
          </div>
          <iframe
            width="100%"
            height="300"
            className="rounded-2xl shadow-2xl md:w-1/2"
            src="https://www.youtube.com/embed/Zof_mKRabtU?si=ro-Q6eeKa1IsuOXT"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>

        <hr className="w-3/4 border-2 border-orange-vibrant mx-auto" />

        <p className="text-center text-lg max-w-3xl mx-auto">
          A temporada "Submerged" convida os competidores a mergulharem nos
          ecossistemas marinhos e explorarem formas de proteger a
          biodiversidade, restaurar habitats submersos e entender os impactos
          ambientais causados pelas ações humanas.
        </p>

        <section className="flex flex-col md:flex-row justify-start items-start gap-16">
          <img
            src="https://framerusercontent.com/images/drxvy3BBSgOcGlUPP4CwDyyI.jpg"
            alt="desafio de mesa"
            className="w-full md:w-1/2 h-96 object-cover rounded-2xl shadow-2xl"
          />
          <div>
            <h2 className="text-3xl font-bold text-orange-vibrant">
              Equipes Participantes
            </h2>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-orange-400 mb-2">
                Torneio Interno FLL VMRT
              </h3>
              <ul className="list-[armenian] list-inside space-y-1">
                <li>The Bubbles Squad</li>
                <li>Robótica IA Teens</li>
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-orange-400 mb-2">
                Torneio Externo FLL VMRT
              </h3>
              <ul className="list-[armenian] list-inside space-y-1">
                <li>VMRT</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-blue-800 to-cyan-400 px-8 py-12 rounded-xl shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-8 text-white">
            <div className="text-2xl font-bold">+60 Competidores</div>
            <hr className="border-white border-2 w-full lg:w-px" />
            <div className="text-2xl font-bold">13 Robôs</div>
            <hr className="border-white border-2 w-full lg:w-px" />
            <div className="text-2xl font-bold">+8 Horas de Torneio</div>
          </div>
          <img
            src="https://static.wixstatic.com/media/3a1650_a7d1c334024840d8b642e62d02ebdaaf~mv2.gif"
            alt="Submerged logo"
            className="w-42 mt-8 md:mt-0"
          />
        </section>
        
        <section className="flex flex-col md:flex-row justify-around items-start gap-12">
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
              Rua Julio Felipe Guedes, 138. Vilas das Merces. São Paulo - SP.
            </p>
            <p className="text-sm text-orange-vibrant font-semibold">
              *Essa edição do torneio não é aberta ao público geral!*
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
