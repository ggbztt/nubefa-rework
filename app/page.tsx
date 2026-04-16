import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import NubefaAssist from '@/components/NubefaAssist';
import Ecosistema from '@/components/Ecosistema';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        
        {/* Nueva Sección Oscura: Nubefa Assist */}
        <NubefaAssist />
        
        {/* Nuevo Ecosistema Interactivo */}
        <Ecosistema />
        
        {/* Pricing y Footer (Pendientes de pasar a Tailwind puro) */}
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
