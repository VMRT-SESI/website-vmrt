import NavBar from "@/components/Navbar";

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto mt-6 px-4 sm:px-6 lg:px-8 min-h-screen">
      <NavBar />
      <main className="space-y-16 py-8">
        {/* Seção principal */}
        <section className="px-4 sm:px-8 py-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left max-w-xl">
            <h1 className="text-4xl font-bold text-orange-500">Edição 2023</h1>
            <p className="mt-4 text-lg leading-6">
              Nossas equipes foram desafiadas a realizar os desafios propostos
              na temporada 2022-2023 da FLL, a &ldquo;SUPERPOWERED&rdquo;.
            </p>
          </div>
          <div className="w-full lg:w-1/2 aspect-video">
            <iframe
              className="w-full h-full rounded-2xl shadow-2xl"
              src="https://www.youtube.com/embed/okR1AMFNV3Q?si=nvzdC1AefCEf8Yda"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>

        <hr className="w-3/4 border-t-2 border-orange-500 mx-auto" />

        {/* Descrição da temporada */}
        <p className="text-lg text-center max-w-3xl mx-auto px-4">
          A ideia desta temporada é que os competidores se questionem sobre as
          diversas fontes de energia, sejam renováveis ou não-renováveis,
          relacionando seu tipo, aplicação, uso e riscos.
        </p>

        {/* Equipes participantes */}
        <section className="px-4 sm:px-8 py-8 flex flex-col lg:flex-row items-center gap-12">
          <img
            src="https://www.lcl.nl/wp-content/uploads/2023/09/20230128_111825-scaled.jpg"
            alt="desafio de mesa"
            className="w-full lg:w-[45%] max-h-[400px] object-cover rounded-2xl shadow-[0_0_25px_#ff8a0076]"
          />
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl text-orange-500 font-bold mb-6">
              Equipes Participantes
            </h2>
            <div>
              <h3 className="text-xl font-medium text-orange-500 mb-2">
                Torneio Interno FLL VMRT
              </h3>
              <ul className="list-[armenian] list-inside space-y-1 text-base">
                <li>Black Titans</li>
                <li>Ice Red</li>
                <li>Tex Six</li>
                <li>Quinteto Robótico</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Destaque visual - SUPERPOWERED */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-yellow-300 to-orange-500 px-6 sm:px-12 py-10 rounded-xl shadow-lg text-black">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 w-full">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-extrabold">16</span>
              <span className="text-lg font-medium">Competidores</span>
            </div>
            <div className="hidden md:block border-l-2 border-black h-12" />
            <div className="flex flex-col items-center">
              <span className="text-3xl font-extrabold">4</span>
              <span className="text-lg font-medium">Robôs</span>
            </div>
          </div>
          <img
            src="https://static.portaldaindustria.com.br/media/filer_public_thumbnails/filer_public/7a/07/7a07b209-3bb3-4fa1-9557-b6d2fb79eef9/superpoweres-logopng__250x171_q85_crop_subsampling-2_upscale.png__200x136_q85_crop_subsampling-2_upscale.png"
            alt="Superpowered logo"
            className="w-28 sm:w-36 h-auto mt-6 md:mt-0 md:ml-8"
          />
        </section>

        {/* Vencedores */}
        <section className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-orange-500 tracking-tight drop-shadow-sm">
            🏆 Vencedores
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-10 text-left">
            {/* Torneio Interno */}
            <div className="bg-[#121212] rounded-xl shadow-lg p-6 min-w-[270px] border-t-4 border-orange-400">
              <h4 className="text-xl font-semibold text-orange-400 mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-orange-400 rounded-full" />{" "}
                Torneio Interno
              </h4>
              <ul className="space-y-2">
                <li>
                  <span className="font-bold text-orange-500">
                    Champions Awards:
                  </span>{" "}
                  <span className="font-semibold text-white">Ice Red</span>
                </li>
                <li>
                  <span className="font-bold text-orange-500">
                    Desafio de Mesa:
                  </span>{" "}
                  <span className="font-semibold text-white">Black Titans</span>
                </li>
                <li>
                  <span className="font-bold text-orange-500">
                    Projeto de Inovação:
                  </span>{" "}
                  <span className="font-semibold text-white">Tex Six</span>
                </li>
                <li>
                  <span className="font-bold text-orange-500">
                    Design do Robô:
                  </span>{" "}
                  <span className="font-semibold text-white">Ice Red</span>
                </li>
                <li>
                  <span className="font-bold text-orange-500">
                    Core Values:
                  </span>{" "}
                  <span className="font-semibold text-white">
                    Quinteto Robótico
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Datas e Local */}
        <section className="px-4 sm:px-8 py-16 flex flex-col md:flex-row justify-around gap-8">
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
              Rua Julio Felipe Guedes, 138. Vila das Mercês. São Paulo - SP.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
