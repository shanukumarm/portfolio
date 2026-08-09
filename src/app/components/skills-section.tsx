import { Card } from "./ui/card";
import { Cloud, Container, GitBranch, Shield, Cpu, Activity } from "lucide-react";
import { Badge } from "./ui/badge";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Infrastructure & IaC",
      icon: Cloud,
      bg: "bg-blue-100 text-blue-600",
      border: "border-blue-200 hover:border-blue-400",
      badge: "bg-blue-50 text-blue-800 border-blue-200",
      featured: "bg-blue-600 text-white font-semibold",
      skills: [
        { name: "Terraform", featured: true },
        { name: "OpenTofu", featured: true },
        { name: "CDKTF", featured: true },
        { name: "AWS EKS", featured: true },
        { name: "CloudFormation", featured: false },
        { name: "AWS EC2 / RDS / VPC", featured: false },
        { name: "Lambda / DynamoDB", featured: false },
        { name: "Transit Gateway / IAM", featured: false },
      ],
    },
    {
      title: "Containers & Platform",
      icon: Container,
      bg: "bg-purple-100 text-purple-600",
      border: "border-purple-200 hover:border-purple-400",
      badge: "bg-purple-50 text-purple-800 border-purple-200",
      featured: "bg-purple-600 text-white font-semibold",
      skills: [
        { name: "Kubernetes", featured: true },
        { name: "Istio Ambient Mesh", featured: true },
        { name: "Gateway API", featured: true },
        { name: "Docker", featured: false },
        { name: "Helm", featured: false },
        { name: "KEDA", featured: true },
        { name: "Karpenter", featured: false },
        { name: "Crossplane", featured: true },
        { name: "vCluster", featured: false },
      ],
    },
    {
      title: "Developer Platform & CI/CD",
      icon: GitBranch,
      bg: "bg-green-100 text-green-600",
      border: "border-green-200 hover:border-green-400",
      badge: "bg-green-50 text-green-800 border-green-200",
      featured: "bg-emerald-600 text-white font-semibold",
      skills: [
        { name: "Backstage", featured: true },
        { name: "ArgoCD", featured: true },
        { name: "GitOps Workflows", featured: true },
        { name: "Azure DevOps", featured: false },
        { name: "GitHub Actions", featured: false },
        { name: "GitLab CI", featured: false },
        { name: "ARC Runners", featured: false },
        { name: "Artifact Management", featured: false },
      ],
    },
    {
      title: "Security & Governance",
      icon: Shield,
      bg: "bg-red-100 text-red-600",
      border: "border-red-200 hover:border-red-400",
      badge: "bg-red-50 text-red-800 border-red-200",
      featured: "bg-red-600 text-white font-semibold",
      skills: [
        { name: "OPA Gatekeeper", featured: true },
        { name: "Keycloak OIDC", featured: false },
        { name: "Kong API Gateway", featured: false },
        { name: "Trivy", featured: false },
        { name: "DependencyTrack", featured: false },
        { name: "SBOM Governance", featured: false },
      ],
    },
    {
      title: "Observability",
      icon: Activity,
      bg: "bg-indigo-100 text-indigo-600",
      border: "border-indigo-200 hover:border-indigo-400",
      badge: "bg-indigo-50 text-indigo-800 border-indigo-200",
      featured: "bg-indigo-600 text-white font-semibold",
      skills: [
        { name: "OpenTelemetry", featured: true },
        { name: "Prometheus", featured: true },
        { name: "Grafana", featured: true },
        { name: "Loki", featured: false },
        { name: "Tempo", featured: false },
        { name: "Datadog", featured: false },
        { name: "OpenCost FinOps", featured: false },
      ],
    },
    {
      title: "AI Platform & Languages",
      icon: Cpu,
      bg: "bg-orange-100 text-orange-600",
      border: "border-orange-200 hover:border-orange-400",
      badge: "bg-orange-50 text-orange-800 border-orange-200",
      featured: "bg-orange-600 text-white font-semibold",
      skills: [
        { name: "AWS Bedrock", featured: true },
        { name: "RAG Architecture", featured: true },
        { name: "MCP Protocol", featured: true },
        { name: "TypeScript", featured: true },
        { name: "Python", featured: true },
        { name: "Bash Scripting", featured: false },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive toolkit for architecting Internal Developer Platforms, Kubernetes infrastructure, and cloud automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ title, icon: Icon, bg, border, badge, featured, skills }, index) => (
            <Card key={index} className={`p-6 hover:shadow-xl transition-all duration-300 border-2 ${border} bg-white flex flex-col justify-between`}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-xs`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${skill.featured ? `${featured} shadow-xs` : `${badge}`
                        }`}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
