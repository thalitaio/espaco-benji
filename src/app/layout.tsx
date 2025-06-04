import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Espaço Benji - Eventos e Casamentos",
  description: "O lugar perfeito para realizar seu sonho",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
