import { Card } from "./ui/card";
import { Zap, Shield, Users, Award, Server, Cpu, Layers } from "lucide-react";

export function AboutSection() {
  const stats = [
    { value: "5+ Years", label: "Platform Engineering", icon: Award },
    { value: "20+ Teams", label: "Supported on IDP", icon: Users },
    { value: "100+ Services", label: "Migrated to Service Mesh", icon: Server },
    { value: "30% Cost Cut", label: "Cloud & K8s Optimization", icon: Cpu },
  ];

  const pillars = [
    {
      title: "Automation-First Platform",
      icon: Zap,
      bg: "bg-blue-100 text-blue-600",
      border: "hover:border-blue-200",
      description:
        "Every manual process is an opportunity for platform automation. I build Backstage-integrated self-service portals, Terraform/CDKTF libraries, and GitOps delivery pipelines that eliminate toil.",
    },
    {
      title: "Reliability & Cloud Scale",
      icon: Shield,
      bg: "bg-green-100 text-green-600",
      border: "hover:border-green-200",
      description:
        "Production-grade distributed systems require resilience. I architect high-availability Kubernetes platforms, zero-downtime Istio Ambient Mesh migrations, and robust AWS multi-account networking.",
    },
    {
      title: "DevEx & AI Innovation",
      icon: Layers,
      bg: "bg-purple-100 text-purple-600",
      border: "hover:border-purple-200",
      description:
        "Platform engineering is about empowering developers. I streamline developer workflows with unified OpenTelemetry observability and AI-powered Bedrock RAG runbook assistants.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Architecting Internal Developer Platforms, resilient cloud infrastructure, and self-service developer tools
          </p>
        </div>

        {/* Bio Summary Card */}
        <Card className="p-8 md:p-10 border border-gray-100 bg-white mb-12 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
            <p>
              I am a <strong className="text-gray-900 font-semibold">Lead Platform Engineer</strong> with over{" "}
              <span className="font-bold text-blue-600">5+ years of experience</span> specializing in Internal Developer Platforms (IDPs), cloud-native infrastructure, and platform software development.
            </p>
            <p>
              My expertise spans building Backstage-integrated stack management tools, automated Infrastructure as Code (OpenTofu / Terraform & CDKTF) platforms, zero-downtime service mesh architecture (Istio Ambient Mesh), and AI-driven engineering tools using AWS Bedrock & RAG.
            </p>
            <p>
              I focus on reducing developer cognitive load, standardizing platform governance, and maximizing cloud infrastructure cost efficiency across multi-cluster Kubernetes and AWS environments.
            </p>
          </div>

          {/* Key Metrics Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-100">
            {stats.map(({ value, label, icon: StatIcon }, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100">
                <StatIcon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{value}</div>
                <div className="text-xs font-medium text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Core Pillars */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900">Core Engineering Focus</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map(({ title, icon: Icon, bg, border, description }, idx) => (
            <Card key={idx} className={`p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white ${border}`}>
              <div className={`w-14 h-14 ${bg} rounded-xl flex items-center justify-center mb-6`}>
                <Icon className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
