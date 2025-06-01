import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Spaces from '@/components/Spaces';
import Gastronomy from '@/components/Gastronomy';
import Ceremony from '@/components/Ceremony';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Spaces />
      <Gastronomy />
      <Ceremony />
      <Contact />
    </main>
  );
}
