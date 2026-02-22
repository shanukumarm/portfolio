import { Card } from "./ui/card";
import { Zap, Shield, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 hover:shadow-xl transition-shadow border-0 bg-white">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Zap className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Automation-First
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Every manual process is an opportunity for improvement. I build
              systems that eliminate toil and enable teams to move faster.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-shadow border-0 bg-white">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <Shield className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Reliability & Scale
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Production-grade systems require thoughtful architecture. I design
              for resilience, observability, and sustainable growth.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-shadow border-0 bg-white">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Users className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Developer Productivity
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Platform engineering is about empowering developers. I create
              tools and abstractions that reduce friction and cognitive load.
            </p>
          </Card>
        </div>

        <Card className="p-10 border-0 bg-gradient-to-br from-blue-50 to-purple-50">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With{" "}
            <span className="font-bold text-blue-600">
              4+ years of experience
            </span>{" "}
            building cloud-native, production-grade systems, I bring a deep
            understanding of the entire platform lifecycle—from initial
            architecture to day-2 operations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I take strong ownership of{" "}
            <span className="font-semibold">
              platform architecture and infrastructure
            </span>
            , leading critical migrations, mentoring engineering teams, and
            consistently driving cost optimization initiatives that deliver
            measurable impact.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            My approach combines technical depth with pragmatic
            engineering—balancing innovation with stability, speed with
            reliability, and complexity with maintainability.
          </p>
        </Card>
      </div>
    </section>
  );
}
