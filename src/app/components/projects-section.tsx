import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  FileText,
  X,
  Building2,
  Cpu,
  Activity,
  Sparkles,
  CheckCircle2,
  ZoomIn,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Import generated high-resolution technical architecture diagram assets
import imgPlatform from "../../assets/images/enterprise_developer_platform_diagram.png";
import imgAgent from "../../assets/images/autonomous_sre_alert_remediation_agent_diagram.png";
import imgObservability from "../../assets/images/platform_observability_slo_engine_diagram.png";
import imgRag from "../../assets/images/rag_knowledge_assistant_diagram.png";

export function ProjectsSection() {
  const projects = [
    {
      title: "Multi-Tenant Internal Developer Platform (PaaS)",
      category: "Flagship Platform",
      categoryIcon: Building2,
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      description:
        "Production-grade OpenTofu & GitOps PaaS on Amazon EKS v1.35. Built with a 2-layer management paradigm separating core infrastructure modules from ArgoCD workflows, Crossplane XRD compositions, vCluster tenant isolation, Keycloak and AI workload rightsizing.",
      image: imgPlatform,
      tags: [
        "OpenTofu",
        "EKS v1.35",
        "ArgoCD",
        "Crossplane",
        "vCluster",
        "OPA Gatekeeper",
        "OpenFGA",
        "TypeScript",
      ],
      details: {
        overview:
          "A production-grade, multi-tenant Internal Developer Platform (PaaS) built on Amazon EKS v1.35 following a 2-layer architecture: Layer 1 (OpenTofu core infrastructure foundation) and Layer 2 (GitOps & Crossplane self-service workflows). Enables engineering teams to deploy cloud resources safely without platform team intervention.",
        highlights: [
          "Layer 1 Core Infrastructure: OpenTofu modules for multi-AZ VPC, EKS v1.35, EKS Pod Identity, Access Entries, and minimal bootstrappers (Argo CD, Crossplane, Karpenter)",
          "Layer 2 GitOps Workflow: Argo CD App-of-Apps pattern managing platform add-ons, security policies, and resource compositions",
          "Crossplane XRD Compositions: Self-service declarative resources for StaticWebsite, PostgresInstance, and DNSDomain mapping directly to AWS primitives",
          "Multi-Tenancy & Isolation: vCluster virtual tenant control planes, OPA Gatekeeper constraint templates, and default-deny NetworkPolicies",
          "CI & Ephemeral Runners: Actions Runner Controller (ARC) pod fleets auto-scaled on AWS Spot compute for cost-effective CI",
          "AuthN & ReBAC Governance: Keycloak OIDC identity provider integrated with OpenFGA Zanzibar ReBAC engine for fine-grained authorization",
          "Observability & Rightsizing: LGTM Stack (Prometheus, Loki, Tempo), KEDA autoscalers, OpenCost, and AI workload rightsizing",
        ],
      },
    },
    {
      title: "Autonomous SRE Alert Remediation Agent",
      category: "Agentic AI Platform",
      categoryIcon: Cpu,
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      description:
        "Multi-agent system for autonomous incident investigation and remediation. Ingests alerts via SQS and coordinates 5 specialized agents (triage, codebase explorer, log analyst, root-cause generator, PR author) backed by AWS Bedrock Claude with human approval gates.",
      image: imgAgent,
      tags: [
        "AWS Bedrock",
        "Step Functions",
        "Multi-Agent",
        "Python",
        "DynamoDB",
        "MCP Servers",
        "PagerDuty",
      ],
      details: {
        overview:
          "A multi-agent SRE system that autonomously triages, investigates, and remediates platform incidents. Alerts arrive via SQS FIFO and trigger an AWS Step Functions workflow orchestrating five specialized agents, each interacting with external infrastructure via Model Context Protocol (MCP) servers.",
        highlights: [
          "Alert ingestion via SQS FIFO with deduplication; Step Functions as durable orchestrator with retry and fallback logic",
          "5 specialized agents: Triage Agent, Codebase Explorer, Log & Metrics Analyst, Root Cause & Fix Generator, PR Author",
          "Amazon Bedrock (Claude 3.5 Sonnet) as the reasoning engine with shared incident context state passed between steps",
          "8 MCP servers: GitHub (11 tools), Kubernetes read-only (8 tools), AWS (10 tools), Datadog (7 tools), PagerDuty (6 tools)",
          "DynamoDB incident state store maintaining a complete, auditable trace of all agent decisions",
          "Human approval gate via PagerDuty notification before any generated PR is merged to production branches",
        ],
      },
    },
    {
      title: "Platform Observability Stack & SLO Engine",
      category: "SRE & Monitoring",
      categoryIcon: Activity,
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      description:
        "Enterprise observability platform deployed on Kubernetes covering four golden signals. Features Prometheus metric scraping, Loki log aggregation, Grafana SLO/error-budget panels, and P1–P4 severity escalation rules across 38 metrics.",
      image: imgObservability,
      tags: [
        "Prometheus",
        "Grafana",
        "Loki",
        "OpenTelemetry",
        "SLO / SLI",
        "Kubernetes",
        "Alertmanager",
      ],
      details: {
        overview:
          "A comprehensive platform observability stack deployed on Kubernetes covering the four golden signals (latency, traffic, error rate, saturation). Grafana dashboards surface real-time SLO compliance and error-budget burn rates per service with automated PagerDuty alerting rules.",
        highlights: [
          "Prometheus scrapes metrics across 100+ services; Loki aggregates logs with structured labels for rapid incident querying",
          "Grafana golden signal dashboards: latency (p50/p95/p99), traffic (RPS), error rate (5xx%), saturation (CPU/memory/disk)",
          "SLO & error-budget panels: per-service SLI tracking, burn rate alerts (1h and 6h windows), and budget visualization",
          "23 AWS alert rules: EKS API latency, RDS free storage, ALB 5xx rate, SQS DLQ depth, Lambda error rate, DynamoDB throttles",
          "15 Kubernetes alert rules: CrashLoopBackOff, OOMKilled, rollout stuck, node NotReady, Istio mTLS failures, PVC pending",
          "Incident escalation: P1 (<5min ack), P2 (<15min), P3 (<1hr), P4 (<24hr) with automated PagerDuty on-call routing",
        ],
      },
    },
    {
      title: "RAG Knowledge Assistant for Engineering Runbooks",
      category: "DevEx & AI",
      categoryIcon: Sparkles,
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      description:
        "RAG knowledge assistant deployed on Kubernetes that answers natural-language questions on runbooks, SLOs, and incident playbooks. Powered by AWS Bedrock Knowledge Base, OpenSearch Serverless, and FastAPI with JWT security.",
      image: imgRag,
      tags: [
        "AWS Bedrock",
        "RAG Architecture",
        "OpenSearch",
        "FastAPI",
        "Kubernetes",
        "Okta JWT",
      ],
      details: {
        overview:
          "An internal platform documentation assistant that answers natural-language questions about runbooks, onboarding guides, SLOs, CI/CD pipelines, and incident playbooks. Built on AWS Bedrock Knowledge Base with OpenSearch Serverless as the vector store.",
        highlights: [
          "Document ingestion pipeline: S3 upload → EventBridge → SNS → SQS → Lambda → Bedrock ingestion job (fully async)",
          "Hierarchical chunking (1500 token parent / 300 token child) with Amazon Titan Embeddings v2 (1536 dimensions)",
          "Retrieval: hybrid semantic + BM25 search (top-K=5) on OpenSearch Serverless with AES-256 encryption & VPC endpoints",
          "Bedrock Agent (Claude 3.5 Sonnet) with multi-turn session memory and instruction guardrails",
          "Live API integrations: pipeline status (ADO REST API), service SLOs (Datadog API), incident status (PagerDuty API)",
          "Security: Kong API Gateway with Okta JWT validation, rate limiting (100 req/min), and Bedrock content guardrails",
        ],
      },
    },
  ];

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [enlargedImage, setEnlargedImage] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setEnlargedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Architecting production-grade Internal Developer Platforms, agentic SRE automation, and observability systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const CategoryIcon = project.categoryIcon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white flex flex-col group">
                <div
                  className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 cursor-pointer"
                  onClick={() => setEnlargedImage({ src: project.image, title: project.title })}
                  title="Click to view full architecture diagram"
                >
                  <ImageWithFallback src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-sm">
                    <ZoomIn className="w-5 h-5" />
                    <span>Expand Architecture Diagram</span>
                  </div>

                  <div className="absolute top-4 left-4 z-10">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border shadow-sm backdrop-blur-md ${project.badgeColor}`}>
                      <CategoryIcon className="w-3.5 h-3.5" />
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs px-2.5 py-1 bg-gray-100 text-gray-700 font-medium">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-5 rounded-xl shadow-sm" onClick={() => setSelectedProject(project)}>
                      <FileText className="h-4 w-4 mr-2" />
                      View Architecture & Specs
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Modal Popup for Project Specs */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-60 overflow-hidden rounded-t-2xl bg-gray-900 cursor-pointer group" onClick={() => setEnlargedImage({ src: selectedProject.image, title: selectedProject.title })}>
              <ImageWithFallback src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-sm">
                <ZoomIn className="w-5 h-5" />
                <span>Click for Fullscreen High-Res Diagram</span>
              </div>
              <button onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }} className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-md">
                <X className="h-5 w-5 text-gray-700" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 z-10">
                <h3 className="text-2xl font-bold text-white mb-1">{selectedProject.title}</h3>
                <p className="text-xs text-gray-300">Technical Architecture & Implementation Specification</p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-1.5 mb-6">
                {selectedProject.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs px-2.5 py-1 bg-blue-50 text-blue-700 font-medium">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">System Overview</h4>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base bg-gray-50 p-4 rounded-xl border border-gray-100">{selectedProject.details.overview}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Technical Highlights</h4>
                <ul className="space-y-3">
                  {selectedProject.details.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                <Button variant="outline" onClick={() => setSelectedProject(null)} className="rounded-xl px-6">
                  Close Specification
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FULLSCREEN IMAGE LIGHTBOX POP-OUT MODAL */}
      {enlargedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200 cursor-zoom-out" onClick={() => setEnlargedImage(null)}>
          <button onClick={() => setEnlargedImage(null)} className="fixed top-6 right-6 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all z-10 border border-white/20 shadow-lg">
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="overflow-hidden rounded-2xl shadow-2xl border border-white/20 bg-gray-950 p-2 max-h-[80vh]">
              <ImageWithFallback src={enlargedImage.src} alt={enlargedImage.title} className="w-full h-full object-contain max-h-[78vh] rounded-xl" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white mb-1">{enlargedImage.title}</h3>
              <p className="text-xs text-gray-400">Fullscreen Architecture Diagram • Click anywhere or press Esc to close</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
