import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export function CertificationsSection() {
  const topCertifications = [
    {
      title: "Certified Kubernetes Administrator",
      abbr: "CKA",
      issuer: "Cloud Native Computing Foundation (CNCF)",
      color: "blue",
      category: "Kubernetes Cluster Infrastructure",
    },
    {
      title: "Certified Kubernetes Application Developer",
      abbr: "CKAD",
      issuer: "Cloud Native Computing Foundation (CNCF)",
      color: "blue",
      category: "Cloud-Native Application Design",
    },
    {
      title: "HashiCorp Certified: Terraform Associate",
      abbr: "Terraform Associate",
      issuer: "HashiCorp",
      color: "purple",
      category: "Infrastructure as Code",
    },
  ];

  const bottomCertifications = [
    {
      title: "AWS Certified AI Practitioner",
      abbr: "AWS AI Practitioner",
      issuer: "Amazon Web Services (AWS)",
      color: "amber",
      category: "Cloud AI & GenAI",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      abbr: "AWS CCP",
      issuer: "Amazon Web Services (AWS)",
      color: "amber",
      category: "Cloud Infrastructure",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-100 text-blue-600",
      border: "border-blue-200 hover:border-blue-400",
      badge: "bg-blue-50 text-blue-700 border-blue-200",
    },
    purple: {
      bg: "bg-purple-100 text-purple-600",
      border: "border-purple-200 hover:border-purple-400",
      badge: "bg-purple-50 text-purple-700 border-purple-200",
    },
    amber: {
      bg: "bg-amber-100 text-amber-600",
      border: "border-amber-200 hover:border-amber-400",
      badge: "bg-amber-50 text-amber-700 border-amber-200",
    },
  };

  const renderCertCard = (cert: typeof topCertifications[0], index: number, isCentered = false) => {
    const colors = colorClasses[(cert.color || "blue") as keyof typeof colorClasses] || colorClasses.blue;
    return (
      <Card
        key={index}
        className={`p-6 hover:shadow-xl transition-all duration-300 border-2 ${colors.border} bg-white group flex flex-col justify-between ${isCentered ? "w-full md:w-[calc(33.333%-16px)]" : ""
          }`}
      >
        <div>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className={`w-13 h-13 ${colors.bg} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-xs`}>
              <Award className="h-6 w-6" />
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              Certified
            </span>
          </div>

          <div className="mb-4">
            <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {cert.title}
            </h3>
            <p className="text-xs text-gray-500 font-medium mt-1">
              {cert.issuer}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <Badge className={`${colors.badge} border font-semibold text-xs`}>
            {cert.abbr}
          </Badge>
          <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
            {cert.category}
          </span>
        </div>
      </Card>
    );
  };

  return (
    <section id="certifications" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications & Credentials
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-recognized credentials validating hands-on expertise in Kubernetes, Terraform, and AWS cloud architecture
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {/* Row 1: 3 Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {topCertifications.map((cert, index) => renderCertCard(cert, index, false))}
          </div>

          {/* Row 2: 2 Cards Centered Horizontally */}
          <div className="flex flex-wrap justify-center gap-6">
            {bottomCertifications.map((cert, index) => renderCertCard(cert, index, true))}
          </div>
        </div>
      </div>
    </section>
  );
}
