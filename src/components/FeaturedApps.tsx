import { ExternalLink, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const FeaturedApps = () => {
  const apps = [
    {
      id: 1,
      title: "PromptPix",
      description: "PromptPix lets users generate images using AI via prompts, drawings, or diagrams.",
      image: "/a1.png",
      // rating: 4.8,
      // downloads: "10K+",
      tags: ["Productivity", "Material Design", "Kotlin"],
      url: "/PromptPix.apk"
    },
    {
      id: 2,
      title: "Notes",
      description: "A basic Notes app with a beautiful UI for creating notes.",
      image: "/a2.png",
      // rating: 4.6,
      // downloads: "25K+",
      tags: ["Weather", "Animation", "Widgets"],
      url: "#"
    },
    {
      id: 3,
      title: "Tejyash Health Care App",
      description: "Health care app featuring a blood bank, disease dictionary, and more.",
      image: "/a3.png",
      rating: null,
      downloads: "",
      tags: ["Fitness", "Health", "Social"],
      url: "/tejas.apk"
    },
    {
      id: 4,
      title: "Calcy Pro",
      description: "Health care app featuring a blood bank, disease dictionary, and more.",
      image: "https://mushtaqmaniyar.netlify.app/Images/Tejyash_icon.png",
      rating: null,
      downloads: "",
      tags: ["Fitness", "Health", "Social"],
      url: "/CalcyPro.apk"
    },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `
      }} />
      <section id="apps" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Featured Apps
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Discover my latest Android applications, each crafted with attention to detail and user experience.
          </p>
        </div>

        {/* Mobile: Horizontal scroll container */}
        <div className="sm:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 px-4 -mx-4 hide-scrollbar">
            {apps.map((app) => (
              <div key={app.id} className="flex-shrink-0 w-72">
                <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 h-full">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate pr-2">
                        {app.title}
                      </h3>
                      <div className="flex items-center space-x-1 flex-shrink-0">
                        {/* <Star className="w-4 h-4 text-yellow-400 fill-current" /> */}
                        <span className="text-sm text-gray-600 dark:text-gray-400">{app.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {app.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {app.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {app.downloads} 
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-blue-600 hover:text-white transition-colors border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        <a href={app.url} download >Download</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Mobile scroll indicator */}
          <div className="flex justify-center mt-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Swipe to see more apps
              <ChevronRight className="w-4 h-4 ml-1" />
            </p>
          </div>
        </div>

        {/* Desktop: Carousel with navigation */}
        <div className="hidden sm:block">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 lg:-ml-4">
              {apps.map((app) => (
                <CarouselItem key={app.id} className="pl-3 lg:pl-4 basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 h-full">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={app.image}
                        alt={app.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white truncate pr-2">
                          {app.title}
                        </h3>
                        <div className="flex items-center space-x-1 flex-shrink-0">
                          {/* <Star className="w-4 h-4 text-yellow-400 fill-current" /> */}
                          <span className="text-sm text-gray-600 dark:text-gray-400">{app.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {app.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                        {app.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs sm:text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                          {app.downloads}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-blue-600 hover:text-white transition-colors border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs sm:text-sm"
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                           <a href={app.url} download >Download</a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-8 lg:-left-12 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" />
            <CarouselNext className="-right-8 lg:-right-12 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" />
          </Carousel>
        </div>
      </div>
      </section>
    </>
  );
};