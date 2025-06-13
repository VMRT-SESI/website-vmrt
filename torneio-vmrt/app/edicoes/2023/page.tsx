import NavBar from "@/components/Navbar";

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto mt-6 px-4 sm:px-6 lg:px-8 min-h-screen">
      <NavBar />
      <main>
        {/* Seção principal com título e vídeo */}
        <section className="px-8 py-8 my-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h1 className="text-4xl font-bold text-orange-500">Edição 2023</h1>
            <p className="mt-4 text-lg leading-6 max-w-md">
              Nossas equipes foram desafiadas a realizar os desafios propostos
              na temporada 2022-2023 da FLL, a &quot;superpowered&quot;.
            </p>
          </div>
          <iframe
            width="100%"
            height="300"
            className="rounded-2xl shadow-2xl md:w-1/2"
            src="https://www.youtube.com/embed/okR1AMFNV3Q?si=nvzdC1AefCEf8Yda"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </section>

        <hr className="w-3/4 border-2 border-orange-500 mx-auto" />

        <p className="text-lg mx-auto w-3/5 text-center px-4 my-16">
          A ideia desta temporada é que os competidores se questionem sobre as
          diversas fontes de energia, sejam renováveis ou não-renováveis,
          relacionando seu tipo, aplicação, uso e riscos.
        </p>

        {/* Equipes participantes */}
        <section className="px-8 py-8 my-8 flex flex-col lg:flex-row items-center gap-16">
          <img
            src="https://i0.wp.com/brickjournal.com/wp-content/uploads/2022/04/279158875_10160768802616320_5876073567206773033_n.jpg?resize=800%2C445&ssl=1"
            alt="desafio de mesa"
            className="w-full lg:w-2/5 h-[480px] object-cover rounded-2xl shadow-[0_0_25px_#ff8a0076]"
          />
          <div>
            <h2 className="text-3xl text-orange-500 font-bold">
              Equipes Participantes
            </h2>
            <div className="mt-6">
              <h3 className="text-xl font-medium text-orange-500 mb-2">
                Torneio Interno FLL VMRT
              </h3>
              <ul className="list-armenian list-inside space-y-1 text-base">
                <li>Black Titans</li>
                <li>Ice Red</li>
                <li>Tex Six</li>
                <li>Quinteto Robótico</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Informações numéricas */}
        c

        {/* Datas e local */}
        <section className="px-8 py-16 flex flex-col md:flex-row justify-around gap-8">
          <div>
            <h5 className="text-xl text-orange-500 font-bold">Datas</h5>
            <h6 className="mt-2 text-base font-medium">
              28 de Junho de 2023 - Torneio Interno FLL VMRT
            </h6>
          </div>
          <div>
            <h5 className="text-xl text-orange-500 font-bold">Local</h5>
            <h6 className="mt-2 text-base font-medium">
              SESI 402 Centro Educacional
            </h6>
            <p className="text-sm mt-1">
              Rua Julio Felipe Guedes, 138. Vilas das Merces. São Paulo - SP.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
