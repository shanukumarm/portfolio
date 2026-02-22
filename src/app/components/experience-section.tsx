import { Card } from "./ui/card";
import { Building2, TrendingUp, Zap, Award } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Lead Engineer – Cloud Platform",
      company: "Verisk Analytics",
      period: "2023 - Present",
      icon: Building2,
      color: "blue",
      achievements: [
        {
          text: "Architected and executed Kubernetes Gateway API migration across multi-cluster infrastructure",
          icon: Zap,
        },
        {
          text: "Built enterprise CI/CD execution platform on EKS, achieving 30% cost reduction and 80% faster pod startup times",
          icon: TrendingUp,
        },
        {
          text: "Developed Terraform-based automation frameworks for standardized infrastructure provisioning",
          icon: Award,
        },
        {
          text: "Led zero-downtime migration to Istio ambient mesh architecture, improving performance and reducing resource overhead",
          icon: Zap,
        },
        {
          text: "Created platform abstraction libraries reducing provisioning time by 90%, enabling self-service infrastructure",
          icon: TrendingUp,
        },
      ],
    },
    {
      title: "Technical Lead – Cloud & DevOps",
      company: "HCL Technologies",
      period: "2022 - 2023",
      icon: Building2,
      color: "purple",
      achievements: [
        {
          text: "Designed and implemented multi-account AWS architecture with comprehensive governance framework",
          icon: Award,
        },
        {
          text: "Built automated CI/CD pipelines reducing release cycle time by 50%+ through GitOps practices",
          icon: TrendingUp,
        },
        {
          text: "Owned complete EKS lifecycle management including cluster upgrades, scaling, and security hardening",
          icon: Zap,
        },
        {
          text: "Implemented GitOps-driven Kubernetes deployments with ArgoCD for declarative infrastructure management",
          icon: Award,
        },
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "HCL Technologies",
      period: "2020 - 2022",
      icon: Building2,
      color: "green",
      achievements: [
        {
          text: "Delivered IaC-driven cloud provisioning solutions using Terraform and CloudFormation at scale",
          icon: Zap,
        },
        {
          text: "Designed and implemented blue-green and canary deployment strategies for zero-downtime releases",
          icon: TrendingUp,
        },
        {
          text: "Built and operated stateful distributed systems on Kubernetes with focus on data persistence and reliability",
          icon: Award,
        },
        {
          text: "Mentored junior engineers on cloud-native best practices and infrastructure automation",
          icon: Award,
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
