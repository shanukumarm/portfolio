import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function ContactSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Open to exciting opportunities in cloud platform engineering, DevOps
            leadership, and technical architecture roles
          </p>
        </div>

        <Card className="p-10 border-0 bg-white shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left side - Contact info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities,
                  technical challenges, or collaboration on innovative cloud
                  infrastructure projects.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:shanukumarm@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900 font-medium">
                      shanukumarm@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/shanukumarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Linkedin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <p className="text-gray-900 font-medium">
                      linkedin.com/in/shanukumarm
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/shanukumarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">GitHub</p>
                    <p className="text-gray-900 font-medium">
                      github.com/shanukumarm
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-900 font-medium">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - CTA */}
            <div className="flex flex-col justify-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to collaborate?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're looking to build cloud-native infrastructure,
                  optimize your platform costs, or scale your Kubernetes
                  operations, let's connect.
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-xl shadow-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send a Message
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-gray-300 hover:border-gray-400 py-6 text-lg rounded-xl"
                >
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
