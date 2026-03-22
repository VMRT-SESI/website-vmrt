import NavBar from "@/components/Navbar";
import Link from "next/link";

type TournamentComingSoonProps = {
  editionLabel: string;
  title: string;
  description: string;
};

export default function TournamentComingSoon({
  editionLabel,
  title,
  description,
}: TournamentComingSoonProps) {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <NavBar />

        <main className="flex min-h-[calc(100vh-120px)] items-center py-8 md:py-12">
          <section className="relative w-full overflow-hidden rounded-[2rem] border border-base-300 bg-gradient-to-br from-base-200 via-base-100 to-base-200 px-6 py-14 md:px-10 md:py-20 shadow-sm">
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute top-1/3 right-0 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center rounded-full border border-base-300 bg-base-100/80 px-4 py-2 text-sm font-medium shadow-sm">
                {editionLabel}
              </span>

              <div className="mx-auto mt-6 flex h-24 w-24 items-center justify-center rounded-[2rem] border border-base-300 bg-base-100 shadow-lg">
                <span className="text-4xl">🚧</span>
              </div>

              <h1 className="mt-8 text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-[1.05]">
                {title}
                <span className="block text-primary">em breve</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-base-content/75 leading-relaxed">
                {description}
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/torneio-vmrt"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 font-semibold text-primary-content transition hover:opacity-90"
                >
                  Voltar
                </Link>

                <Link
                  href="/galeria"
                  className="inline-flex items-center justify-center rounded-2xl border border-base-300 bg-base-100 px-6 py-3 font-semibold text-base-content transition hover:border-primary/40 hover:text-primary"
                >
                  Ir para galeria
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}