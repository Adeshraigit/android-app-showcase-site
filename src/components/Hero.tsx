
import { ArrowDown, Github, Linkedin, Mail, Code2, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToApps = () => {
    const element = document.querySelector("#apps");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 transition-colors duration-300"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/20 dark:bg-purple-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400/20 dark:bg-pink-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="animate-fade-in-up">
            {/* Floating icons */}
            <div className="flex justify-center mb-8 space-x-8">
              <div className="animate-float">
                <Code2 className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="animate-float-delayed">
                <Smartphone className="w-12 h-12 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="inline-block animate-slide-in-left">Android</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x animate-slide-in-right">
                Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-500">
              Crafting innovative mobile experiences with cutting-edge Android development. 
              <span className="block mt-2 text-lg text-blue-600 dark:text-blue-400 font-medium">
                Passionate about creating apps that make a difference.
              </span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up animation-delay-1000">
            <Button 
              onClick={scrollToApps}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              View My Apps
            </Button>
            
            <div className="flex space-x-6">
              {[
                { icon: Github, href: "https://github.com", color: "hover:text-gray-900 dark:hover:text-white" },
                { icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-600 dark:hover:text-blue-400" },
                { icon: Mail, href: "mailto:developer@example.com", color: "hover:text-purple-600 dark:hover:text-purple-400" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-gray-700 dark:text-gray-300 ${social.color} group`}
                >
                  <social.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          <div className="animate-bounce-slow">
            <ArrowDown className="w-8 h-8 text-gray-400 dark:text-gray-500 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
