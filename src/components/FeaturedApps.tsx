
import { ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    }
  ];

  return (
    <section id="apps" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Apps
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover my latest Android applications, each crafted with attention to detail and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => (
            <Card key={app.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {app.title}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{app.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {app.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {app.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {app.downloads} downloads
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View App
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
