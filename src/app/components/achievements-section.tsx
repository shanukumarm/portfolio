import { Card } from "./ui/card";
import { Trophy, Star, Target } from "lucide-react";

export function AchievementsSection() {
  const achievements = [
    {
      title: "Star Performer",
      description:
        "Recognized for exceptional contributions to cloud platform modernization and cost optimization initiatives",
      icon: Star,
      color: "yellow",
    },
    {
      title: "Distinguished Contributor",
      description:
        "Awarded for technical leadership in implementing enterprise-wide Kubernetes adoption and GitOps practices",
      icon: Trophy,
      color: "blue",
    },
    {
      title: "AWS Game Day Winner",
      description:
        "Top performer in AWS Game Day competition, demonstrating expertise in architecting resilient cloud solutions under pressure",
      icon: Target,
      color: "orange",
    },
  ];

  const colorClasses = {
    yellow: {
      bg: "bg-yellow-100",
      text: "text-yellow-600",
      glow: "from-yellow-400/20 to-orange-400/20",
    },
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      glow: "from-blue-400/20 to-purple-400/20",
    },
    orange: {
      bg: "bg-orange-100",
      text: "text-orange-600",
      glow: "from-orange-400/20 to-red-400/20",
    },
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized for technical excellence and measurable business impact
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const colors =
              colorClasses[achievement.color as keyof typeof colorClasses];

            return (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-white group relative overflow-hidden"
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colors.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto`}
                  >
                    <Icon className={`h-8 w-8 ${colors.text}`} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {achievement.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
