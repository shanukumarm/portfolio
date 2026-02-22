import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectsSection() {
  const projects = [
    {
      title: "Kubernetes Automation Framework",
      description:
        "Enterprise-grade Terraform modules for automated EKS cluster provisioning, configuration, and lifecycle management. Includes RBAC, network policies, and observability stack integration.",
      image:
        "https://images.unsplash.com/photo-1667372525747-0268cfbc7c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdWJlcm5ldGVzJTIwY29udGFpbmVycyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxNjc5NDMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Kubernetes", "Terraform", "AWS EKS", "GitOps", "Helm"],
    },
    {
      title: "CI/CD Execution Platform",
      description:
        "Scalable, cost-optimized CI/CD platform built on EKS with dynamic pod autoscaling, artifact caching, and multi-tenancy support. Reduced build times by 80% and costs by 30%.",
      image:
        "https://images.unsplash.com/photo-1586762257936-c5aa8e15b49b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGluZnJhc3RydWN0dXJlJTIwbmV0d29yayUyMG5vZGVzfGVufDF8fHx8MTc3MTY3OTQzMHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["GitHub Actions", "Kubernetes", "KEDA", "Karpenter", "ArgoCD"],
    },
    {
      title: "Cloud-Native Stock Analysis Platform",
      description:
        "Real-time stock analysis system with ML-powered predictions, deployed on Kubernetes with auto-scaling and comprehensive observability. Handles 100k+ requests per day.",
      image:
        "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZXJ2ZXIlMjByb29tJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE2NDk3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Python", "Kubernetes", "AWS", "ML/AI", "Prometheus"],
    },
    {
      title: "Multi-Account AWS Infrastructure",
      description:
        "Terraform-based multi-account AWS architecture with centralized governance, security controls, and automated compliance monitoring across development, staging, and production environments.",
      image:
        "https://images.unsplash.com/photo-1586762257936-c5aa8e15b49b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGluZnJhc3RydWN0dXJlJTIwbmV0d29yayUyMG5vZGVzfGVufDF8fHx8MTc3MTY3OTQzMHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Terraform", "AWS", "CDKTF", "Security", "Governance"],
    },
    {
      title: "End-to-End ML Pipeline",
      description:
        "Reproducible machine learning pipeline with automated training, versioning, and deployment on Kubernetes. Includes experiment tracking, model registry, and A/B testing capabilities.",
      image:
        "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZXJ2ZXIlMjByb29tJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE2NDk3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Python", "Kubernetes", "MLOps", "Docker", "GitOps"],
    },
    {
      title: "Distributed Data Processing System",
      description:
        "High-throughput data processing pipeline on Kubernetes with event-driven architecture, stateful workloads, and real-time analytics. Processes 10M+ events daily.",
      image:
        "https://images.unsplash.com/photo-1667372525747-0268cfbc7c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdWJlcm5ldGVzJTIwY29udGFpbmVycyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxNjc5NDMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: [
        "Kubernetes",
        "Python",
        "Event-Driven",
        "Observability",
        "StatefulSets",
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building production-grade systems that solve real problems at scale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 group"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs px-2.5 py-1 bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
