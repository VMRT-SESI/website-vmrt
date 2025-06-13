import ImageCarousel from "@/components/ImageCarousel";
import NavBar from "@/components/Navbar";
import Image from "next/image";

export default function Sobre() {
  const imagens = [
    { src: "/fotos/foto2.jpeg", alt: "Imagem 1" },
    { src: "/fotos/foto4.jpeg", alt: "Imagem 3" },
    { src: "/fotos/foto5.jpeg", alt: "Imagem 4" },
    { src: "/fotos/foto6.jpeg", alt: "Imagem 5" },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-6 px-4 sm:px-6 lg:px-8 min-h-screen">
      <NavBar />
      <main className="mt-6">
        <div className="flex justify-between items-center gap-6 mb-8">
          <Image
            src="/fotos/foto1.jpeg"
            alt="Sobre o Torneio VMRT"
            width={500}
            height={350}
            className="w-full h-auto rounded-2xl shadow-lg"
          />
          <div>
            <h1 className="text-5xl font-bold text-orange-vibrant">Sobre</h1>
            <p className="text-lg">
              O Torneio VMRT é uma iniciativa inspirada nos campeonatos FIRST
              LEGO League (FLL) e na Olimpíada Brasileira de Robótica (OBR),
              criada para envolver tanto a escola quanto a comunidade. Este
              evento vai além das competições de robôs realizando missões; ele
              busca destacar a criatividade, o trabalho em equipe e a inovação
              dos participantes. Nosso objetivo é demonstrar que a robótica é um
              campo amplo e fascinante, repleto de possibilidades que
              ultrapassam a simples programação, execução de tarefas e que é
              muito mais que robôs.
            </p>
          </div>
        </div>
        <ImageCarousel images={imagens} />
        <div className="my-10">
          <h2 className="text-5xl font-semibold text-white mb-8">
            Modalidades
          </h2>
          <div className="flex gap-16">
            <div
              className="flex-1 bg-[#1c1c1c] bg-opacity-80 p-6 rounded-lg shadow-lg max-w-sm"
              style={{ boxShadow: "0 0 15px 0 rgba(255, 136, 0, 0.50)" }}
            >
              <Image
                src="/logos/1.png"
                alt="Modalidade FLL"
                width={500}
                height={350}
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="text-lg text-gray-300 text-justify">
                Voltado para os estudantes do 6º Ano ao 9º Ano da unidade
                escolar, esta modalidade tem como objetivo aprofundar os
                conhecimentos dos alunos em robótica e proporcionar a
                experiência de participar de um campeonato da FIRST LEGO League
                Challenge.
              </p>
            </div>
            <div className="flex-1 bg-[#1c1c1c] bg-opacity-80 p-6 rounded-lg shadow-lg max-w-sm"
            style={{ boxShadow: "0 0 15px 0 rgba(255, 136, 0, 0.50)" }}
            >
              <Image
                src="/logos/2.png"
                alt="Modalidade FLL"
                width={500}
                height={350}
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="text-lg text-gray-300 text-justify">
                Voltada para equipes que participam ou pretendem participar da
                Olimpíada Brasileira de Robótica, esta modalidade visa promover
                a troca de experiências e conhecimentos entre os participantes,
                além de incentivar a colaboração e a inovação.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
