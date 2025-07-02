
import { Smartphone, TrendingUp, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Android Development",
      description: "Custom Android applications built with modern technologies like Kotlin, Jetpack Compose, and Material Design principles.",
      features: ["Native Android Apps", "Jetpack Compose UI", "Material Design", "Performance Optimization"]
    },
    {
      icon: TrendingUp,
      title: "App Store Optimization (ASO)",
      description: "Increase your app's visibility and downloads with strategic ASO techniques and market analysis.",
      features: ["Keyword Research", "App Store Listing", "Performance Analytics", "Conversion Optimization"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create intuitive and engaging user experiences with modern design principles and user-centered approach.",
      features: ["User Interface Design", "User Experience Research", "Prototyping", "Design Systems"]
    },
    {
      icon: Zap,
      title: "Graphic Design",
      description: "Professional graphic design services including app icons, marketing materials, and brand identity.",
      features: ["App Icon Design", "Marketing Graphics", "Brand Identity", "Print Design"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive mobile development and design services to bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center"
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
