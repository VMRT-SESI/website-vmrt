import NavBar from "@/components/Navbar";
import Image from "next/image";

const canais = [
  {
    titulo: "E-mail",
    texto: "vmrt4075@gmail.com",
    href: "mailto:vmrt4075@gmail.com",
    icon: "fi fi-rr-envelope",
  },
  {
    titulo: "GitHub",
    texto: "github.com/VMRT-SESI",
    href: "https://github.com/VMRT-SESI",
    icon: "fi fi-brands-github",
  },
];

const redesSociais = [
  {
    nome: "Instagram",
    href: "https://www.instagram.com/sesivmrt",
    icon: "fi fi-brands-instagram",
  },
  {
    nome: "Facebook",
    href: "https://www.facebook.com/SESIVMRT/",
    icon: "fi fi-brands-facebook",
  },
  {
    nome: "TikTok",
    href: "https://www.tiktok.com/@sesi.vmrt",
    icon: "fi fi-brands-tik-tok",
  },
];

export default function Contato() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <NavBar />

        <main className="space-y-16 py-8 md:py-12">
          {/* HERO */}
          <section className="relative overflow-hidden rounded-[2rem] border border-base-300 bg-gradient-to-br from-base-200 via-base-100 to-base-200 px-6 py-10 md:px-10 md:py-14 shadow-sm">
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
              <div className="space-y-5 text-center lg:text-left">
                <span className="inline-flex items-center rounded-full border border-base-300 bg-base-100/80 px-4 py-2 text-sm font-medium shadow-sm">
                  Contato VMRT
                </span>

                <h1 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05]">
                  Fale com
                  <span className="block text-primary">a nossa equipe</span>
                </h1>

                <p className="text-lg md:text-xl text-base-content/75 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Quer entrar em contato com a VMRT? Seja para tirar dúvidas,
                  acompanhar nosso trabalho, conhecer nossos projetos ou falar
                  sobre parcerias, aqui estão os canais oficiais da equipe.
                </p>
              </div>

              <div className="w-full">
                <div className="overflow-hidden rounded-[1.75rem] border border-base-300 bg-base-200 shadow-2xl">
                  <Image
                    src="/equipe.jpeg"
                    alt="Equipe VMRT reunida"
                    width={900}
                    height={600}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* CONTEÚDO */}
          <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10">
            {/* Canais principais */}
            <div className="rounded-[2rem] border border-base-300 bg-base-200 p-6 md:p-8 shadow-sm space-y-8">
              <div className="space-y-3">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Canais principais
                </span>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Entre em contato pelos nossos meios oficiais
                </h2>
                <p className="text-lg text-base-content/75 leading-relaxed">
                  Escolha o canal que fizer mais sentido para você e fale com a
                  equipe VMRT.
                </p>
              </div>

              <div className="grid gap-4">
                {canais.map((canal) => (
                  <a
                    key={canal.titulo}
                    href={canal.href}
                    target={canal.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      canal.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <i className={`${canal.icon} text-xl`} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-medium uppercase tracking-wide text-base-content/60">
                          {canal.titulo}
                        </p>
                        <p className="text-base md:text-lg font-semibold truncate">
                          {canal.texto}
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-full border border-base-300 bg-base-200 px-3 py-1 text-xs font-medium text-base-content/70 transition-colors group-hover:border-primary/40 group-hover:text-primary">
                      Abrir
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Redes sociais */}
            <div className="rounded-[2rem] border border-base-300 bg-base-200 p-6 md:p-8 shadow-sm space-y-8">
              <div className="space-y-3">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Redes sociais
                </span>
                <h2 className="text-3xl font-bold">Acompanhe a VMRT</h2>
                <p className="text-base-content/75 leading-relaxed">
                  Veja bastidores, projetos, torneios, registros das equipes e
                  novidades publicadas ao longo das temporadas.
                </p>
              </div>

              <div className="grid gap-4">
                {redesSociais.map((rede) => (
                  <a
                    key={rede.nome}
                    href={rede.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <i className={`${rede.icon} text-xl`} />
                    </div>

                    <div className="flex-1">
                      <p className="text-lg font-semibold">{rede.nome}</p>
                      <p className="text-sm text-base-content/65">
                        Acessar perfil oficial
                      </p>
                    </div>

                    <span className="rounded-full border border-base-300 bg-base-200 px-3 py-1 text-xs font-medium text-base-content/70 transition-colors group-hover:border-primary/40 group-hover:text-primary">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}