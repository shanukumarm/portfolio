import { Card } from "./ui/card";
import { Building2, TrendingUp, Zap, Award } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Lead Engineer",
      company: "Verisk Analytics",
      period: "Apr 2024 - Present",
      promoted: null,
      icon: Building2,
      color: "blue",
      achievements: [
        {
          text: "Standardised infrastructure onboarding for 20+ teams across 500+ daily pipeline runs by architecting a per-team isolated AWS account model with automated bootstrapping and language-specific CI/CD templates.",
          icon: Building2,
        },
        {
          text: "Reduced provisioning effort by 90% with CDKTF TypeScript constructs using a main-service + supporting-services pattern; a pre-flight registration check enforces mandatory billing tags, preventing configuration drift across the platform.",
          icon: Zap,
        },
        {
          text: "Reduced service mesh resource consumption by 25% with zero downtime by migrating Istio sidecar to ambient mode across 20+ EKS clusters; migrated 100+ services from Istio Ingress to Kubernetes Gateway API, separating infrastructure and application routing ownership.",
          icon: TrendingUp,
        },
        {
          text: "Reduced CI costs by 30% by replacing Azure-hosted agents with self-hosted EKS runners scaled by KEDA and Karpenter; integrated DependencyTrack for supply chain vulnerability scanning across 100+ services.",
          icon: TrendingUp,
        },
        {
          text: "Built an internal RAG assistant on AWS Bedrock for natural-language access to platform documentation for 20+ teams; secured with Okta JWT, Kong API Gateway rate limiting, and Bedrock Guardrails.",
          icon: Zap,
        },
        {
          text: "Led platform incident response through on-call runbooks, SLO/error-budget frameworks, and a multi-agent autonomous remediation system built on AWS Step Functions and Bedrock.",
          icon: TrendingUp,
        },
      ],
    },
    {
      title: "Technical Lead",
      company: "HCL Technologies",
      period: "Oct 2022 - Mar 2024",
      promoted: "Promoted from Senior Software Engineer",
      icon: Building2,
      color: "purple",
      achievements: [
        {
          text: "Reduced infrastructure configuration effort by 85% by building a multi-tenant EKS platform for 30+ teams with namespace isolation, per-team Karpenter node pools, and reusable Terraform and Helm templates.",
          icon: TrendingUp,
        },
        {
          text: "Eliminated manual routing changes on new team onboarding by redesigning Transit Gateway from flat hub-and-spoke to a hierarchical model using RFC 6598 supernets, scaling to 30+ teams without CIDR exhaustion or on-prem address conflicts.",
          icon: Building2,
        },
        {
          text: "Cut release cycle time by 50% for 10+ directly supported teams by delivering a shared CI/CD pipeline with SBOM generation, container scanning, and ArgoCD GitOps; reduced time-to-production for every new team onboarded.",
          icon: TrendingUp,
        },
        {
          text: "Reduced shared AWS account costs by 60% by enforcing least-privilege IAM with mandatory tagging policies and automating resource cleanup via EventBridge-triggered Lambda jobs; governed 20+ engineers with zero untagged resource drift.",
          icon: TrendingUp,
        },
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "HCL Technologies",
      period: "Aug 2021 - Oct 2022",
      promoted: null,
      icon: Building2,
      color: "green",
      achievements: [
        {
          text: "Cut Kubernetes onboarding time from 2–3 days to 4 hours for 10+ teams by building a reusable Helm chart library covering the full application deployment lifecycle.",
          icon: Zap,
        },
        {
          text: "Standardised safe delivery across 50+ services by introducing blue-green and canary deployment strategies with ArgoCD GitOps, eliminating manual release steps.",
          icon: TrendingUp,
        },
        {
          text: "Established the org's Terraform module library, remote state foundation, and GitLab CI plan/approval gate from scratch; adopted as the infrastructure delivery standard across all teams.",
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
                            {exp.promoted && (
                              <p className="text-sm text-green-700 font-medium mt-1 italic">
                                ↑ {exp.promoted}
                              </p>
                            )}
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
