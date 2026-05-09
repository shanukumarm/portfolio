import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, ExternalLink, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Self-Service Developer Platform",
      description:
        "Self-service IDP built on Terraform and GitOps: team onboarding via PR-based registration, automated account bootstrapping (VPC, EKS namespace, IAM OIDC, ECR), and a reusable CDKTF construct library for application infrastructure. Teams go from registration to first deployment without platform team intervention.",
      image: "src/assets/images/Self-Service Developer Platform.png",
      tags: ["CDKTF", "ArgoCD", "GitOps", "Kubernetes", "AWS", "IDP"],
      details: {
        overview: "A fully self-service Internal Developer Platform where teams onboard via a PR-based registration manifest. The platform automatically vends AWS accounts, provisions VPC with Transit Gateway attachment, bootstraps EKS namespaces, configures IAM OIDC trust, and sets up ECR repositories. Application teams receive a complete onboarding pack with CI/CD pipelines, Helm values, and CDKTF infrastructure code.",
        highlights: [
          "PR-based team registration: teams submit registration.yaml with team name, app, environments, VPC CIDR, and ADO project",
          "Automated account bootstrapping: VPC with TGW attachment, EKS namespace, IAM OIDC trust, and ECR provisioned automatically",
          "CDKTF construct library: main-service + supporting-services pattern auto-provisions networking, IAM, storage, and routing",
          "OIDC-federated CI/CD: no long-lived credentials; scoped IAM roles assumed via Azure DevOps OIDC service connections",
          "5-stage pipeline: build/test/scan → publish to ECR → deploy dev (auto) → deploy test (auto) → deploy prod (manual approval)",
          "Same immutable Docker image promoted through dev → test → accept → prod; environment differences via Helm values only",
          "Pre-flight registration check enforces mandatory billing tags on every resource before deployment proceeds",
        ],
      },
    },
    {
      title: "Autonomous Alert Remediation Agent",
      description:
        "Multi-agent system for autonomous incident remediation: alerts ingested via SQS trigger a Step Functions workflow coordinating five role-specialized agents (triage, codebase explorer, log analyst, root-cause generator, PR author) backed by Bedrock Claude. Includes human approval gate before PR merge and full audit trail in DynamoDB.",
      image: "src/assets/images/Autonomous Alert Remediation Agent.png",
      tags: ["AWS Bedrock", "Step Functions", "Multi-Agent", "Python", "DynamoDB", "MCP"],
      details: {
        overview: "A multi-agent system that autonomously triages, investigates, and remediates platform incidents. Alerts arrive via SQS FIFO and trigger an AWS Step Functions workflow orchestrating five specialized agents, each with access to external systems via Model Context Protocol servers. A human approval gate prevents automatic PR merges.",
        highlights: [
          "Alert ingestion via SQS FIFO with alertId-based deduplication; Step Functions as durable orchestrator with retry logic",
          "5 role-specialized agents: Triage Agent, Codebase Explorer, Log & Metrics Analyst, Root Cause & Fix Generator, PR Author",
          "Amazon Bedrock (Claude 3.5 Sonnet) as the reasoning engine; shared incident context object passed between agents",
          "8 MCP servers: GitHub (11 tools), Kubernetes read-only (8 tools), AWS (10 tools), Datadog (7 tools), PagerDuty (6 tools)",
          "DynamoDB incident state store with full audit trail — every agent action and decision is persisted",
          "Human approval gate via PagerDuty notification before generated PR is merged to the main branch",
          "FIFO deduplication by alertId prevents duplicate incident workflows for the same firing alert",
        ],
      },
    },
    {
      title: "RAG Documentation Assistant on Kubernetes",
      description:
        "RAG-based knowledge assistant deployed on Kubernetes: documents ingested into OpenSearch Serverless via S3 + EventBridge pipeline, retrieved via hybrid semantic + BM25 search, and served through a FastAPI layer backed by AWS Bedrock. Secured with JWT validation and API Gateway rate limiting.",
      image: "src/assets/images/RAG Documentation Assistant on Kubernetes.png",
      tags: ["AWS Bedrock", "RAG", "OpenSearch", "Python", "Kubernetes", "FastAPI"],
      details: {
        overview: "An internal platform documentation assistant that answers natural-language questions about runbooks, onboarding guides, SLOs, CI/CD pipelines, and incident playbooks. Built on AWS Bedrock Knowledge Base with OpenSearch Serverless as the vector store. Documents are ingested asynchronously via an event-driven S3 pipeline.",
        highlights: [
          "Document ingestion pipeline: S3 upload → EventBridge → SNS → SQS → Lambda → Bedrock ingestion job (fully async)",
          "Embedding: Amazon Titan Embeddings v2 (1536 dimensions), hierarchical chunking (1500 token parent / 300 token child, 60 token overlap)",
          "Retrieval: hybrid semantic + BM25 search, top-K=5; vector store on OpenSearch Serverless with AES-256 encryption and VPC endpoint",
          "Bedrock Agent (Claude 3.5 Sonnet) with 10-turn session memory and platform-specific instruction guidelines",
          "Live action groups: get-pipeline-status (ADO REST API), get-service-slo (Datadog API), get-incident-status (PagerDuty API)",
          "Security: Kong API Gateway with Okta JWKS JWT validation, rate limiting (100 req/min per user), IP allow-list, 8KB request size limit",
          "Bedrock Guardrails for content safety; never reveals IAM credentials or assists with security bypass attempts",
        ],
      },
    },
    {
      title: "Platform Observability Stack with SLO Dashboards",
      description:
        "Full observability stack deployed on Kubernetes: Prometheus for metrics scraping, Loki for log aggregation, Grafana dashboards for golden signals (latency, traffic, errors, saturation), and SLO/error-budget tracking panels. Includes alerting rules for P1–P4 incident severity levels.",
      image: "src/assets/images/Platform Observability Stack with SLO Dashboards.png",
      tags: ["Prometheus", "Grafana", "Loki", "SLO", "Kubernetes", "Alerting"],
      details: {
        overview: "A complete platform observability stack deployed on Kubernetes covering the four golden signals. Grafana dashboards surface real-time SLO compliance and error budget burn rates per service. Alerting rules cover 23 AWS metrics and 15 Kubernetes metrics across P1-P4 severity levels with defined acknowledgement SLAs.",
        highlights: [
          "Prometheus scrapes metrics across all platform services; Loki aggregates logs with structured labels for fast querying",
          "Grafana golden signal dashboards: latency (p50/p95/p99), traffic (RPS), error rate (5xx%), saturation (CPU/memory/disk)",
          "SLO/error-budget panels: per-service SLI tracking, burn rate alerts (1h and 6h windows), remaining budget visualization",
          "23 AWS alert rules: EKS API latency, RDS free storage, ALB 5xx rate, SQS DLQ depth, Lambda error rate, DynamoDB throttles",
          "15 Kubernetes alert rules: CrashLoopBackOff, OOMKilled, rollout stuck, node NotReady, Istio mTLS failures, PVC pending",
          "Incident severity: P1 (<5min ack), P2 (<15min), P3 (<1hr), P4 (<24hr); lifecycle: Alert → Triage → Bridge → Mitigation → Postmortem",
          "PagerDuty integration for P1/P2 on-call escalation; Datadog used for APM and service-level SLO metrics",
        ],
      },
    },
    {
      title: "Kubernetes Failure & Debug Lab",
      description:
        "Hands-on chaos lab simulating real Kubernetes failure scenarios: CrashLoopBackOff, OOMKilled, node pressure eviction, pod pending due to resource exhaustion, and scheduler failures. Includes a structured debugging playbook covering kubectl workflows, resource inspection, and log analysis.",
      image: "src/assets/images/Kubernetes Failure & Debug Lab.png",
      tags: ["Kubernetes", "Chaos Engineering", "EKS", "Debugging", "Helm"],
      details: {
        overview: "A structured chaos engineering lab for developing deep Kubernetes debugging skills. Each failure scenario is reproducible via Helm-deployed manifests. A companion debugging playbook documents the exact kubectl commands, resource inspection steps, and resolution paths for each failure mode across workload, node, networking, and storage categories.",
        highlights: [
          "Workload failures: CrashLoopBackOff (bad entrypoint, missing config), OOMKilled (memory limit), image pull errors, init container failures",
          "Scheduling failures: pod pending from resource exhaustion, node selector mismatch, taint/toleration misconfiguration",
          "Node pressure: DiskPressure and MemoryPressure eviction scenarios; node NotReady simulation via kubelet stop",
          "Networking failures: CoreDNS resolution errors, NetworkPolicy blocking traffic, Istio mTLS peer auth failures",
          "Storage failures: PVC stuck in Pending, EFS mount timeout, StorageClass misconfiguration",
          "Debugging toolkit: kubectl describe/logs/events workflow, resource inspection (top nodes/pods), node-level tools (top, journalctl)",
          "Each scenario includes: symptom → investigation steps → root cause → resolution → prevention checklist",
        ],
      },
    },
    {
      title: "3-Tier AWS Architecture with Terraform",
      description:
        "Production-grade 3-tier AWS architecture built with Terraform: VPC with public/private/data subnets across 2 AZs, EC2 Auto Scaling with ALB, RDS PostgreSQL with multi-AZ failover, and per-environment remote state management via S3 + DynamoDB locking.",
      image: "src/assets/images/3-Tier AWS Architecture with Terraform.png",
      tags: ["Terraform", "AWS", "VPC", "EC2", "RDS", "IAM"],
      details: {
        overview: "A production-grade 3-tier AWS architecture built with reusable Terraform modules covering networking, compute, and data tiers. Environment parity is maintained across dev, staging, and production using the same modules with different variable files. Remote state is managed per environment via S3 with DynamoDB locking.",
        highlights: [
          "VPC module: public/private/data subnets across 2 AZs, single NAT (dev) vs per-AZ NAT (prod), route table associations",
          "Compute tier: EC2 Auto Scaling Group with Launch Template (IMDSv2, encrypted EBS), ALB with target group health checks",
          "Data tier: RDS PostgreSQL 15.4, gp3 storage, encryption at rest, 7-day backup retention, multi-AZ for prod only",
          "IAM module: least-privilege roles with assume-role policies, managed and inline policies, instance profile generation",
          "Remote state: S3 bucket with versioning, SSE-AES256, public access blocked; DynamoDB lock table per environment",
          "Environment parity: same modules with different tfvars for dev/staging/prod; prevent_destroy lifecycle on state resources",
          "Secrets Manager integration for RDS credentials; security groups scoped to app subnet CIDRs only",
        ],
      },
    },
  ];

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
                  <Button size="sm" variant="outline" onClick={() => setSelectedProject(project)}>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-56 overflow-hidden rounded-t-2xl">
              <ImageWithFallback src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <X className="h-5 w-5 text-gray-700" />
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{selectedProject.title}</h3>
              <div className="flex flex-wrap gap-2 mb-5">
                {selectedProject.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="text-xs px-2.5 py-1 bg-blue-50 text-blue-700">{tag}</Badge>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">{selectedProject.details.overview}</p>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Architecture Highlights</h4>
              <ul className="space-y-2">
                {selectedProject.details.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Button size="sm" variant="outline" disabled className="opacity-50">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub — Coming Soon
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
