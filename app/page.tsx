import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import HowItWorks from '@/components/HowItWorks';
import Services from '@/components/Services';
import Partnership from '@/components/Partnership';
import WhyWorkWithUs from '@/components/WhyWorkWithUs';
import AccountOwnership from '@/components/AccountOwnership';
import FAQAndCTA from '@/components/FAQAndCTA';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <HowItWorks />
        <Services />
        <Partnership />
        <WhyWorkWithUs />
        <AccountOwnership />
        <FAQAndCTA />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
