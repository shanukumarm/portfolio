import { useState } from "react";
import { Mail, MapPin, Send, Copy, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { LinkedinIcon, GithubIcon } from "./ui/icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shanukumarm@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socialItems = [
    {
      label: "LinkedIn",
      value: "linkedin.com/in/shanukumarm",
      href: "https://www.linkedin.com/in/shanukumarm",
      icon: LinkedinIcon,
      iconBg: "bg-blue-100 text-blue-600 group-hover:bg-blue-200",
    },
    {
      label: "GitHub",
      value: "github.com/shanukumarm",
      href: "https://github.com/shanukumarm",
      icon: GithubIcon,
      iconBg: "bg-gray-900 text-white group-hover:bg-black",
    },
    {
      label: "Location",
      value: "Hyderabad, India",
      href: null,
      icon: MapPin,
      iconBg: "bg-emerald-100 text-emerald-600",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Open to opportunities in Lead/Principal Platform Engineering, Cloud Architecture, and Developer Platform Leadership
          </p>
        </div>

        <Card className="p-8 md:p-10 border border-gray-100 bg-white shadow-2xl rounded-3xl">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left side - Contact info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  I'm always open to discussing platform engineering initiatives, cloud-native technical architecture, or collaboration on developer tooling.
                </p>
              </div>

              <div className="space-y-3">
                {/* Email with Quick Copy */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-blue-50/50 border border-gray-100 transition-colors group">
                  <a href="mailto:shanukumarm@gmail.com" className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="truncate">
                      <p className="text-xs text-gray-500 font-medium">Email</p>
                      <p className="text-gray-900 font-semibold truncate text-sm md:text-base">shanukumarm@gmail.com</p>
                    </div>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 hover:bg-white rounded-xl text-gray-500 hover:text-blue-600 transition-all border border-transparent hover:border-gray-200"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>

                {/* Social Items & Location */}
                {socialItems.map(({ label, value, href, icon: Icon, iconBg }, idx) => {
                  const content = (
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 transition-colors group">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors flex-shrink-0 ${iconBg}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">{label}</p>
                        <p className="text-gray-900 font-semibold text-sm md:text-base">{value}</p>
                      </div>
                    </div>
                  );

                  return href ? (
                    <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={idx}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Right side - CTA Card */}
            <div className="flex flex-col justify-between bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-8 shadow-lg">
              <div>
                <span className="inline-block text-xs font-semibold px-3 py-1 bg-white/20 rounded-full text-white mb-4">
                  Open to Opportunities
                </span>
                <h3 className="text-2xl font-bold mb-3 text-white">Ready to optimize your developer platform?</h3>
                <p className="text-blue-100 leading-relaxed text-sm md:text-base">
                  Whether you're building Internal Developer Platforms, modernizing Kubernetes infrastructure, scaling GitOps, or reducing cloud cost overhead, let's talk.
                </p>
              </div>

              <div className="space-y-3 mt-8">
                <Button size="lg" className="w-full bg-white hover:bg-blue-50 text-blue-700 font-bold py-6 text-lg rounded-2xl shadow-md" asChild>
                  <a href="mailto:shanukumarm@gmail.com">
                    <Send className="mr-2 h-5 w-5" />
                    Send an Email
                  </a>
                </Button>

                <Button
                  size="lg"
                  className="w-full bg-white/10 hover:bg-white/20 border-2 border-white text-white font-bold py-6 text-lg rounded-2xl transition-all shadow-sm"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/shanukumarm" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon className="mr-2 h-5 w-5 text-white" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
