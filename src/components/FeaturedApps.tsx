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
      title: "TaskMaster Pro",
      description: "A powerful task management app with intuitive design and advanced productivity features. Built with Kotlin and Jetpack Compose.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop",
      rating: 4.8,
      downloads: "10K+",
      tags: ["Productivity", "Material Design", "Kotlin"],
      playStoreUrl: "#"
    },
    {
      id: 2,
      title: "WeatherWise",
      description: "Beautiful weather app with accurate forecasts and stunning animations. Features location-based weather and customizable widgets.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=600&fit=crop",
      rating: 4.6,
      downloads: "25K+",
      tags: ["Weather", "Animation", "Widgets"],
      playStoreUrl: "#"
    },
    {
      id: 3,
      title: "FitTracker",
      description: "Comprehensive fitness tracking app with workout plans, progress monitoring, and social features for motivation.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
      rating: 4.9,
      downloads: "50K+",
      tags: ["Fitness", "Health", "Social"],
      playStoreUrl: "#"
    },
    {
      id: 4,
      title: "ExpenseTracker",
      description: "Smart expense tracking app with budgeting tools, category management, and detailed financial insights.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=600&fit=crop",
      rating: 4.7,
      downloads: "15K+",
      tags: ["Finance", "Budgeting", "Analytics"],
      playStoreUrl: "#"
    },
    {
      id: 5,
      title: "FoodieFind",
      description: "Discover local restaurants and cuisines with personalized recommendations and social reviews.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=600&fit=crop",
      rating: 4.5,
      downloads: "30K+",
      tags: ["Food", "Social", "Discovery"],
      playStoreUrl: "#"
    },
    {
      id: 6,
      title: "PhotoEdit Pro",
      description: "Professional photo editing app with advanced filters, AI-powered enhancements, and cloud storage integration.",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=600&fit=crop",
      rating: 4.6,
      downloads: "40K+",
      tags: ["Photography", "AI", "Editing"],
      playStoreUrl: "#"
    },
    {
      id: 7,
      title: "MusicMood",
      description: "Discover and stream music based on your mood with intelligent playlists and social sharing features.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop",
      rating: 4.4,
      downloads: "60K+",
      tags: ["Music", "Streaming", "Social"],
      playStoreUrl: "#"
    },
    {
      id: 8,
      title: "StudyBuddy",
      description: "Educational app with flashcards, study schedules, progress tracking, and collaborative learning features.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
      rating: 4.7,
      downloads: "35K+",
      tags: ["Education", "Productivity", "Learning"],
      playStoreUrl: "#"
    },
    {
      id: 9,
      title: "TravelGuide",
      description: "Complete travel companion with offline maps, local recommendations, itinerary planning, and expense tracking.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=600&fit=crop",
      rating: 4.8,
      downloads: "45K+",
      tags: ["Travel", "Maps", "Planning"],
      playStoreUrl: "#"
    },
    {
      id: 10,
      title: "MindfulMoments",
      description: "Meditation and mindfulness app with guided sessions, breathing exercises, and progress tracking.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
      rating: 4.9,
      downloads: "20K+",
      tags: ["Wellness", "Meditation", "Health"],
      playStoreUrl: "#"
    }
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
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
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
                        {app.downloads} downloads
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-blue-600 hover:text-white transition-colors border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View App
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
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
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
                          {app.downloads} downloads
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-blue-600 hover:text-white transition-colors border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs sm:text-sm"
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          View App
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