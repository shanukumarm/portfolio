import { Download, ChevronDown, CheckCircle2, Building2 } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgProfile from "../../assets/images/profile.png";
import resumePdf from "../../assets/resume/shanu_resume.pdf";

export function HeroSection() {
  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  const flagshipSkills = [
    "Internal Developer Platforms",
    "Kubernetes & EKS",
    "OpenTofu / Terraform",
    "Backstage",
    "Istio Ambient Mesh",
    "AWS Bedrock (AI)",
  ];

  const highlights = [
    (
      <>
        Architecting Internal Developer Platforms enabling <strong>20+ engineering teams</strong> with self-service infrastructure & delivery pipelines.
      </>
    ),
    "Backstage stack management, OpenTelemetry observability, Istio Ambient Mesh, and AWS Bedrock RAG AI runbooks.",
    (
      <>
        <strong>30% CI compute cost reduction</strong> · <strong>25% mesh CPU reduction</strong> · 100+ production services migrated.
      </>
    ),
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden bg-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Headline & Summary */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Lead Engineer · Platform Engineering
                </span>
                <span className="text-xs text-gray-500 font-medium px-3 py-1 bg-gray-100 rounded-full">
                  IIT Madras Alumnus
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                Shanu Kumar
              </h1>

              <p className="text-2xl md:text-3xl text-gray-600 font-medium leading-relaxed">
                Building Internal Developer Platforms, Kubernetes infrastructure, and cloud automation at enterprise scale
              </p>
            </div>

            {/* Flagship Skills Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {flagshipSkills.map((skill, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="text-xs font-semibold px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Key Highlights */}
            <div className="space-y-3.5 text-base md:text-lg text-gray-700">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                onClick={scrollToExperience}
              >
                View Experience
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-gray-400 px-8 py-6 text-lg rounded-xl font-medium"
                asChild
              >
                <a href={resumePdf} download="shanu_resume.pdf">
                  <Download className="mr-2 h-5 w-5 text-gray-700" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Portrait & Floating Glassmorphism Badge */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative mb-6 md:mb-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 rounded-full blur-2xl opacity-25 animate-pulse"></div>
              <div className="relative p-3 rounded-full shadow-2xl bg-white/60 backdrop-blur-sm border border-gray-100">
                <ImageWithFallback
                  src={imgProfile}
                  alt="Shanu Kumar - Platform Engineering Lead"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-inner"
                />

                {/* Floating 3D Badge */}
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[85%] bg-white/95 backdrop-blur-xl px-5 py-3.5 rounded-2xl shadow-2xl text-center border border-blue-100 z-20 transition-all hover:scale-102">
                  <div className="flex items-center justify-center gap-1.5 mb-0.5">
                    <Building2 className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      Verisk Analytics
                    </span>
                  </div>
                  <p className="text-base md:text-lg font-extrabold text-gray-900 tracking-tight leading-snug">
                    Lead Engineer
                  </p>
                  <p className="text-xs font-medium text-gray-500 mt-0.5">
                    Internal Developer Platform & Cloud Architecture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToExperience}
      >
        <ChevronDown className="h-6 w-6 text-gray-400 hover:text-blue-600 transition-colors" />
      </div>
    </section>
  );
}
