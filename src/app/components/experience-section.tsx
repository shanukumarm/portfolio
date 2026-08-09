import { Card } from "./ui/card";
import { Building2, TrendingUp, Zap, Award, Sparkles, CheckCircle2, Trophy, Activity } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Lead Engineer",
      company: "Verisk Analytics",
      period: "Apr 2024 – Present",
      promoted: null,
      icon: Building2,
      bg: "bg-blue-50 text-blue-600 border-blue-200",
      dotBg: "bg-blue-100 border-blue-500",
      iconBg: "bg-blue-100 text-blue-600",
      pill: "bg-blue-50 text-blue-700 border-blue-200",
      highlights: [
        { badge: "20+ Teams", label: "Developer Platform" },
        { badge: "30% Cost Cut", label: "KEDA CI Scaling" },
        { badge: "25% Less CPU", label: "Istio Ambient Mesh" },
      ],
      skills: [
        "Internal Developer Platform",
        "Backstage",
        "Kubernetes",
        "Istio Ambient Mesh",
        "AWS Bedrock (RAG)",
        "KEDA",
        "OpenTelemetry",
        "Terraform / CDKTF",
        "TypeScript",
      ],
      achievements: [
        {
          text: "Own the architecture of an Internal Developer Platform for 20+ engineering teams, building a Backstage-integrated Stack Management Platform (TypeScript, DynamoDB, CDKTF) for self-service infrastructure and Terraform state governance.",
          icon: Zap,
        },
        {
          text: "Migrated CI/CD execution from Azure DevOps cloud agents to self-hosted Kubernetes build fleets using KEDA, optimizing compute utilization and cutting infrastructure costs by 30%.",
          icon: TrendingUp,
        },
        {
          text: "Led zero-downtime migration of 100+ production services from Kubernetes Ingress to Gateway API with Istio Ambient Mesh, reducing service mesh resource consumption by 25%.",
          icon: Award,
        },
        {
          text: "Engineered an AI-powered assistant using AWS Bedrock (RAG) and Claude 3.5 Sonnet to automate incident runbook execution and developer troubleshooting.",
          icon: Sparkles,
        },
        {
          text: "Architected a unified OpenTelemetry observability platform across Kubernetes & AWS Lambda workloads for end-to-end tracing and real-time metric visibility.",
          icon: Activity,
        },
      ],
    },
    {
      title: "Technical Lead",
      company: "HCL Technologies",
      period: "Oct 2022 – Mar 2024",
      promoted: "Promoted from Senior Software Engineer",
      icon: Building2,
      bg: "bg-purple-50 text-purple-600 border-purple-200",
      dotBg: "bg-purple-100 border-purple-500",
      iconBg: "bg-purple-100 text-purple-600",
      pill: "bg-purple-50 text-purple-700 border-purple-200",
      highlights: [
        { badge: "Star Performer Award", label: "HCL Recognition" },
        { badge: "AWS GameDay Runner-up", label: "Cloud Competition" },
        { badge: "Transit Gateway", label: "AWS Multi-Account" },
      ],
      skills: [
        "Kubernetes",
        "AWS Transit Gateway",
        "Terraform",
        "Helm",
        "GitOps",
        "Python Automation",
        "CI/CD",
      ],
      achievements: [
        {
          text: "Standardized a shared Kubernetes platform across teams and architected AWS multi-account networking using Transit Gateway for centralized governance and security.",
          icon: Building2,
        },
        {
          text: "Designed reusable Terraform modules, Helm libraries, GitOps workflows, and Python automation services, accelerating infrastructure provisioning and security auditing.",
          icon: Zap,
        },
        {
          text: "Recognized as Star Performer & Distinguished Contributor for Kubernetes adoption, and placed 2nd runner-up in AWS GameDay cloud architecture competition.",
          icon: Trophy,
        },
        {
          text: "Led platform modernization initiatives including production Kubernetes upgrades, CI/CD optimization, and mentored engineers on cloud-native best practices.",
          icon: Award,
        },
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "HCL Technologies",
      period: "Aug 2021 – Oct 2022",
      promoted: null,
      icon: Building2,
      bg: "bg-green-50 text-green-600 border-green-200",
      dotBg: "bg-green-100 border-green-500",
      iconBg: "bg-green-100 text-green-600",
      pill: "bg-green-50 text-green-700 border-green-200",
      highlights: [
        { badge: "Zero-Downtime", label: "Blue-Green / Canary" },
        { badge: "HA State", label: "Hazelcast CP" },
      ],
      skills: [
        "Terraform",
        "GitOps",
        "Kubernetes",
        "Hazelcast CP",
        "Blue-Green / Canary",
      ],
      achievements: [
        {
          text: "Designed Infrastructure as Code standards and reusable deployment libraries, simplifying application onboarding and standardizing cloud-native delivery workflows.",
          icon: Zap,
        },
        {
          text: "Implemented GitOps-driven Blue-Green and Canary deployment strategies across production microservices, improving release safety and rollback efficiency.",
          icon: TrendingUp,
        },
        {
          text: "Designed and operated highly available Hazelcast CP clusters on Kubernetes, improving consistency, resilience, and fault tolerance for distributed stateful apps.",
          icon: Award,
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving platform innovation, cloud architecture, and operational excellence across enterprise infrastructure
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-green-600"></div>

          <div className="space-y-12">
            {experiences.map(({ title, company, period, promoted, icon: Icon, bg, dotBg, iconBg, pill, highlights, skills, achievements }, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2">
                    <div className={`w-6 h-6 ${dotBg} border-4 rounded-full z-10`}></div>
                  </div>

                  <div className={`md:grid md:grid-cols-2 gap-8 ${isLeft ? "" : "md:grid-flow-dense"}`}>
                    <div className={isLeft ? "" : "md:col-start-2"}>
                      <Card className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white">
                        {/* Header Info */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                            <Icon className="h-7 w-7" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
                            <p className="text-lg font-semibold text-gray-700">{company}</p>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <span className="text-sm font-medium text-gray-500">{period}</span>
                              {promoted && (
                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                                  ↑ {promoted}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Impact Highlight Badges */}
                        {highlights?.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-6 pt-2 border-t border-gray-100">
                            {highlights.map((h, hIdx) => (
                              <div key={hIdx} className={`text-xs font-semibold px-3 py-1.5 rounded-lg border flex items-center gap-1.5 ${bg}`}>
                                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                                <span><strong>{h.badge}</strong> • {h.label}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Achievements Bullet Points */}
                        <div className="space-y-3.5 mb-6">
                          {achievements.map(({ text, icon: AchIcon }, achIndex) => (
                            <div key={achIndex} className="flex items-start gap-3 group">
                              <AchIcon className={`h-5 w-5 ${iconBg} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform rounded-md p-0.5`} />
                              <p className="text-gray-700 leading-relaxed text-sm md:text-base">{text}</p>
                            </div>
                          ))}
                        </div>

                        {/* Skills / Tech Stack Pill Tags */}
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5">Key Technologies & Skills</p>
                          <div className="flex flex-wrap gap-1.5">
                            {skills.map((skill, sIdx) => (
                              <span key={sIdx} className={`text-xs font-medium px-2.5 py-1 rounded-md border ${pill}`}>{skill}</span>
                            ))}
                          </div>
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
