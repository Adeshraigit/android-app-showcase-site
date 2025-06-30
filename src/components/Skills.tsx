
export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "Kotlin", level: 95 },
        { name: "Java", level: 90 },
        { name: "Jetpack Compose", level: 88 },
        { name: "XML Layouts", level: 92 }
      ]
    },
    {
      title: "Android Development",
      skills: [
        { name: "MVVM Architecture", level: 90 },
        { name: "Room Database", level: 85 },
        { name: "Retrofit & APIs", level: 88 },
        { name: "Material Design", level: 92 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Android Studio", level: 95 },
        { name: "Git & GitHub", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "Play Console", level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels in Android development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl border border-gray-200 dark:border-gray-600 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
