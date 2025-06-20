import NavBar from "@/components/Navbar";
import Image from "next/image";

export default function Contato() {
  return (
    <div className="max-w-6xl mx-auto mt-6 px-4 sm:px-6 lg:px-8 min-h-screen">
      <NavBar />
        <div className="bg-[#121212] shadow-xl rounded-2xl p-8 flex flex-col lg:flex-row items-start gap-10">
          {/* Imagem */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/equipe.jpeg"
              alt="Contato"
              width={500}
              height={300}
              className="rounded-xl w-full h-auto object-cover shadow-lg border border-orange-200"
            />
          </div>

          {/* Texto e links */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-orange-500">Fale com a gente!</h1>

            <div className="space-y-4 text-base text-gray-100">
              <p className="flex items-center gap-2">
                <i className="fi fi-rr-envelope text-orange-500 text-xl"></i>
                vmrt4075@gmail.com
              </p>

              <a
                href="https://github.com/VMRT-SESI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-orange-500 transition-all text-gray-100 hover:underline"
              >
                <i className="fi fi-brands-github text-xl text-orange-500"></i>
                GitHub
              </a>

              <h2 className="text-2xl font-semibold text-orange-500 pt-4">Redes Sociais</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://www.instagram.com/sesivmrt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2 bg-orange-100 hover:bg-orange-200 rounded-lg transition text-gray-800"
                >                  
                  <i className="fi fi-brands-instagram text-orange-500"></i>
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/SESIVMRT/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2 bg-orange-100 hover:bg-orange-200 rounded-lg transition text-gray-800"
                >
                  <i className="fi fi-brands-facebook text-orange-500"></i>
                  Facebook
                </a>
                <a
                  href="https://www.tiktok.com/@sesi.vmrt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2 bg-orange-100 hover:bg-orange-200 rounded-lg transition text-gray-800"
                >
                  <i className="fi fi-brands-tik-tok text-orange-500"></i>
                  TikTok
                </a>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}