
import { Hero } from "@/components/Hero";
import { FeaturedApps } from "@/components/FeaturedApps";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Hero />
      <About />
      <FeaturedApps />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
