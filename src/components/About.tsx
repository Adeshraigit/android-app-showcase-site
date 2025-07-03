
import { Users, Zap } from "lucide-react";

export const About = () => {

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-6">
            <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
        </div>

        {/* Main About Content with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I am a dedicated Android Developer with 6 months of hands-on experience. During my 3-month internship at Tejyash Cyber Solution, I successfully developed an Android Application for the Company.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Beyond Android development, I possess a well-rounded skill set that includes graphic design, app store optimization, and leadership. This diverse expertise allows me to approach projects from a holistic perspective, making me a unique asset to any team.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              My personal project, CalcyPro, showcases my ability to create innovative and user-friendly Android applications. I am passionate about staying updated with the latest trends and technologies in the Android development landscape.
            </p>
          </div>
          
          {/* Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              
                <img src="/about.png" alt="" />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
