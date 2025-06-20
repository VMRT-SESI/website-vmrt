import type { Metadata } from "next";
import { League_Spartan, Montserrat } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league",
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Torneio VMRT",
  description: "Torneio de Robótica da equipe VMRT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${leagueSpartan.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}