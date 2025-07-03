
import { Hero } from "@/components/Hero";
import { FeaturedApps } from "@/components/FeaturedApps";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Navigation />
      <Hero />
      <FeaturedApps />
      <About />
      <Services />
      {/* <Skills /> */}
      <Contact />
    </div>
  );
};

export default Index;
