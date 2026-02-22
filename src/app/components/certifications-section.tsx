import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, CheckCircle2 } from "lucide-react";

export function CertificationsSection() {
  const certifications = [
    {
      title: "Certified Kubernetes Administrator",
      abbr: "CKA",
      issuer: "Cloud Native Computing Foundation",
      color: "blue",
      verified: true,
    },
    {
      title: "Certified Kubernetes Application Developer",
      abbr: "CKAD",
      issuer: "Cloud Native Computing Foundation",
      color: "blue",
      verified: true,
    },
    {
      title: "HashiCorp Certified: Terraform Associate",
      abbr: "Terraform Associate",
      issuer: "HashiCorp",
      color: "purple",
      verified: true,
    },
    {
      title: "AWS Certified Cloud Practitioner",
      abbr: "AWS CCP",
      issuer: "Amazon Web Services",
      color: "orange",
      verified: true,
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
      badge: "bg-blue-100",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-200",
      badge: "bg-purple-100",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-200",
      badge: "bg-orange-100",
    },
  };

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-recognized certifications validating expertise in
            cloud-native technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const colors =
              colorClasses[cert.color as keyof typeof colorClasses];

            return (
              <Card
                key={index}
                className={`p-8 hover:shadow-xl transition-all duration-300 border-2 ${colors.border} bg-white group hover:scale-105`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <Award className={`h-8 w-8 ${colors.text}`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {cert.title}
                      </h3>
                      {cert.verified && (
                        <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                      )}
                    </div>

                    <p className="text-gray-600 mb-3">{cert.issuer}</p>

                    <Badge
                      className={`${colors.badge} ${colors.text} border-0`}
                    >
                      {cert.abbr}
                    </Badge>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
