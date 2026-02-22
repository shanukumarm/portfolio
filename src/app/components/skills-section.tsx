import { Card } from "./ui/card";
import { Cloud, Container, GitBranch, Shield, Code } from "lucide-react";
import { Badge } from "./ui/badge";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "blue",
      skills: [
        "AWS (EKS, VPC, IAM, RDS, S3, CloudFront)",
        "Terraform",
        "CDKTF",
        "CloudFormation",
        "Multi-cloud Architecture",
      ],
    },
    {
      title: "Containers & Orchestration",
      icon: Container,
      color: "purple",
      skills: [
        "Kubernetes",
        "Docker",
        "Istio (Sidecar & Ambient)",
        "Helm",
        "KEDA",
        "Karpenter",
      ],
    },
    {
      title: "CI/CD & GitOps",
      icon: GitBranch,
      color: "green",
      skills: [
        "GitHub Actions",
        "Azure DevOps",
        "Jenkins",
        "ArgoCD",
        "GitOps Workflows",
        "Artifact Management",
      ],
    },
    {
      title: "Security & Observability",
      icon: Shield,
      color: "red",
      skills: [
        "Prometheus",
        "Grafana",
        "Datadog",
        "Trivy",
        "DependencyTrack",
        "RBAC",
        "Network Policies",
      ],
    },
    {
      title: "Programming",
      icon: Code,
      color: "orange",
      skills: [
        "Python", 
        "TypeScript", 
        "Bash", 
        "Go", 
        "Infrastructure as Code"
      ],
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      border: "border-blue-200",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-600",
      border: "border-purple-200",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-600",
      border: "border-green-200",
    },
    red: { 
      bg: "bg-red-100", 
      text: "text-red-600", 
      border: "border-red-200" 
    },
    orange: {
      bg: "bg-orange-100",
      text: "text-orange-600",
      border: "border-orange-200",
    },
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building and operating cloud-native
            infrastructure at enterprise scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-fit mx-auto justify-items-center">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors =
              colorClasses[category.color as keyof typeof colorClasses];

            return (
              <Card
                key={index}
                className={`p-6 hover:shadow-xl transition-all duration-300 border-2 ${colors.border} hover:scale-105`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}
                  >
                    <Icon className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
