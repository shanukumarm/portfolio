import { Card } from "./ui/card";
import { Building2, TrendingUp, Zap, Award } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Lead Engineer – Cloud Platform",
      company: "Verisk Analytics",
      period: "Apr 2024 - Present",
      icon: Building2,
      color: "blue",
      achievements: [
        {
          text: "Designed reusable Terraform modules and Kubernetes templates, reducing environment provisioning time by 90%",
          icon: Zap,
        },
        {
          text: "Architected service mesh migration from Istio sidecar to ambient mode, reducing resource consumption by 25%",
          icon: TrendingUp,
        },
        {
          text: "Built scalable CI/CD execution platform on EKS with self-hosted runners, cutting CI infrastructure costs by 30%",
          icon: TrendingUp,
        },
        {
          text: "Led migration from Kubernetes Ingress to Gateway API, enabling scalable routing policies across 100+ microservices",
          icon: Zap,
        },
        {
          text: "Implemented software supply chain security with DependencyTrack, enabling automated vulnerability scanning across 50+ services",
          icon: Award,
        },
      ],
    },
    {
      title: "Technical Lead – Cloud & DevOps",
      company: "HCL Technologies",
      period: "Oct 2022 - Mar 2024",
      icon: Building2,
      color: "purple",
      achievements: [
        {
          text: "Designed and implemented cloud-agnostic CI/CD pipelines across Kubernetes and AWS, reducing release cycle time by 50%",
          icon: TrendingUp,
        },
        {
          text: "Owned EKS lifecycle management including version upgrades, add-on compatibility, autoscaling, and cluster observability",
          icon: Zap,
        },
        {
          text: "Built reusable Helm and Terraform modules, standardizing infrastructure provisioning across microservice deployments",
          icon: Award,
        },
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "HCL Technologies",
      period: "Aug 2021 - Oct 2022",
      icon: Building2,
      color: "green",
      achievements: [
        {
          text: "Standardized Kubernetes microservice deployments using Helm and GitOps workflows with ArgoCD, improving consistency across 50+ services",
          icon: Award,
        },
        {
          text: "Automated AWS infrastructure provisioning using Terraform and CloudFormation, accelerating environment setup across dev and production",
          icon: Zap,
        },
        {
          text: "Implemented blue-green and canary deployment strategies, enabling zero-downtime releases and reducing production risk",
          icon: TrendingUp,
        },
      ],
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      border: "border-blue-500",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-600",
      border: "border-purple-500",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-600",
      border: "border-green-500",
    },
  };

  return (
    <section id="experience" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving platform innovation and operational excellence across
            enterprise cloud infrastructure
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-green-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const colors =
                colorClasses[exp.color as keyof typeof colorClasses];
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2">
                    <div
                      className={`w-6 h-6 ${colors.bg} border-4 ${colors.border} rounded-full z-10`}
                    ></div>
                  </div>

                  <div
                    className={`md:grid md:grid-cols-2 gap-8 ${isLeft ? "" : "md:grid-flow-dense"}`}
                  >
                    <div className={isLeft ? "" : "md:col-start-2"}>
                      <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-white">
                        <div className="flex items-start gap-4 mb-6">
                          <div
                            className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
                          >
                            <Icon className={`h-7 w-7 ${colors.text}`} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {exp.title}
                            </h3>
                            <p className="text-lg font-semibold text-gray-600">
                              {exp.company}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              {exp.period}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {exp.achievements.map((achievement, achIndex) => {
                            const AchIcon = achievement.icon;
                            return (
                              <div
                                key={achIndex}
                                className="flex items-start gap-3 group"
                              >
                                <AchIcon
                                  className={`h-5 w-5 ${colors.text} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}
                                />
                                <p className="text-gray-700 leading-relaxed">
                                  {achievement.text}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
