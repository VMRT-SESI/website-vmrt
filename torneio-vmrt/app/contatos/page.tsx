import NavBar from "@/components/Navbar";
import Image from "next/image";

export default function Contato() {
  return (
    <div className="max-w-6xl mx-auto mt-6 px-4 sm:px-6 lg:px-8 min-h-screen">
      <NavBar />
      <div className="flex justify-center items-center gap-4 flex-wrap mt-6">
        <Image
          src="/equipe.jpeg"
          alt="Contato"
          width={500}
          height={300}
          className="rounded-lg"
        />
        <div className="flex flex-col items-start justify-start gap-4">
          <h1 className="text-3xl">Contatos</h1>
          <div>
            <p className="flex items-center gap-2 cursor-default mb-2">
              <i className="fi fi-rr-envelope"></i>
              vmrt4075@gmail.com
            </p>
            <a
              href="https://github.com/VMRT-SESI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-orange-vibrant transition-colors duration-300"
            >
              <i className="fi fi-brands-github"></i>
              Github
            </a>
            <h2 className="text-2xl my-4 font-league ">Redes Sociais</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://www.instagram.com/sesivmrt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-orange-vibrant transition-colors duration-300"
              >
                <i className="fi fi-brands-instagram"></i>
                Instagram
              </a>
              <a
                href="https://www.facebook.com/SESIVMRT/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-orange-vibrant transition-colors duration-300"
              >
                <i className="fi fi-brands-facebook"></i>
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@sesi.vmrt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-orange-vibrant transition-colors duration-300"
              >
                <i className="fi fi-brands-tik-tok"></i>
                Tik Tok
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
