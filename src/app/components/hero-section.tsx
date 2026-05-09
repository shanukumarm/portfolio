import { Download, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgProfile from "../../assets/images/profile.png"
import resumePdf from "../../assets/resume/shanu_resume.pdf"

export function HeroSection() {
  const scrollToExperience = () => {
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                Lead Engineer · Platform Engineering
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Shanu Kumar
              </h1>

              <p className="text-2xl md:text-3xl text-gray-600 font-medium leading-relaxed">
                Building Internal Developer Platforms, Kubernetes infrastructure,
                and Terraform-driven cloud automation at scale
              </p>
            </div>

            <div className="space-y-3 text-lg text-gray-700">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5"></div>
                <p>
                  Internal Developer Platform enabling 20+ engineering teams with self-service infrastructure and standardized delivery pipelines
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5"></div>
                <p>
                  Terraform CDK construct libraries, Istio ambient mesh, and KEDA-driven CI runners across 20+ EKS clusters
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5"></div>
                <p>90% faster provisioning · 50% faster releases · 30% CI cost reduction</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg"
                onClick={scrollToExperience}
              >
                View Experience
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-gray-400 px-8 py-6 text-lg rounded-xl"
                asChild
              >
                <a
                  href={resumePdf}
                  download="shanu_resume.pdf"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-20"></div>
              <div className="relative p-3 rounded-full shadow-2xl">
                <ImageWithFallback
                  src={imgProfile}
                  alt="Shanu Kumar - Platform Engineering Lead"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full"
                />
                <div className="absolute bottom-0 left-3 right-3 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg text-center">
                  <p className="text-base font-semibold text-gray-700">
                    Lead Engineer
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Verisk Analytics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
}
