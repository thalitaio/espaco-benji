import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/styles.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Spaces from "@/components/Spaces";
import Gastronomy from "@/components/Gastronomy";
import Ceremony from "@/components/Ceremony";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Espaço Benji - Casamentos Inesquecíveis no Rio de Janeiro",
  description: "Espaço para casamentos em Vargem Pequena, Rio de Janeiro. Gastronomia exclusiva, cerimônia no local e decoração personalizada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KG7KS3ZR');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KG7KS3ZR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main>
          <Hero />
          <Spaces />
          <Gastronomy />
          <Ceremony />
          <Contact />
        </main>
        <Footer />
      </body>
    </html>
  );
}
