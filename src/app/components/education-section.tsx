import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Sparkles,
  Cpu,
  Brain,
  Layers,
  Award,
} from "lucide-react";

export function EducationSection() {
  const iitMadrasCoursework = [
    {
      title: "AI & Deep Learning",
      icon: Brain,
      iconColor: "text-purple-600",
      skills: ["Artificial Intelligence & ML", "Deep Learning Architectures"],
      badgeClass: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      title: "GPU & High-Performance Computing",
      icon: Cpu,
      iconColor: "text-blue-600",
      skills: ["GPU Programming & CUDA", "Parallel Computing"],
      badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      title: "Algorithms & Core Infrastructure",
      icon: Layers,
      iconColor: "text-emerald-600",
      skills: ["Advanced Algorithms", "Distributed Systems Architecture"],
      badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
      spanTwo: true,
    },
  ];

  const btechFoundations = [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Management Systems",
    "Computer Networks",
    "Software Engineering",
  ];

  return (
    <section id="education" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic foundation from IIT Madras specializing in AI, Machine Learning, GPU Computing, and Distributed Systems
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto space-y-10">
          {/* Timeline connecting line */}
          <div className="hidden md:block absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-indigo-500 rounded-full"></div>

          {/* 1. M.TECH - IIT MADRAS */}
          <div className="relative flex gap-8">
            <div className="hidden md:flex flex-col items-center flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-4 border-white rounded-2xl flex items-center justify-center z-10 shadow-xl">
                <GraduationCap className="h-8 w-8" />
              </div>
            </div>

            <Card className="flex-1 p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 relative overflow-hidden">
              {/* Top Accent Ribbon / Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs">
                  <Award className="w-3.5 h-3.5 text-amber-700" />
                  Institute of National Importance • NIRF #1
                </span>
                <span className="flex items-center gap-2 text-xs font-semibold text-gray-600 bg-white/90 border border-gray-200 px-3 py-1.5 rounded-full shadow-2xs">
                  <Calendar className="h-3.5 w-3.5 text-blue-600" />
                  Jul 2019 – Jul 2021
                </span>
              </div>

              {/* Title & Institution */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100 px-2.5 py-0.5 rounded-md">
                    Postgraduate • M.Tech
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Master of Technology in Computer Science & Engineering
                </h3>
                <p className="text-xl font-bold text-blue-700 mt-1 flex items-center gap-2">
                  Indian Institute of Technology Madras (IIT Madras)
                </p>
                <div className="flex items-center gap-2 text-gray-500 mt-1 text-sm font-medium">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span>Chennai, India</span>
                </div>
              </div>

              {/* Specialized Coursework Breakdown */}
              <div className="pt-6 border-t border-blue-100/80 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Advanced Specialized Coursework</span>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {iitMadrasCoursework.map(({ title, icon: Icon, iconColor, skills, badgeClass, spanTwo }, idx) => (
                    <div
                      key={idx}
                      className={`bg-white/80 p-4 rounded-xl border border-blue-100 shadow-2xs ${
                        spanTwo ? "md:col-span-2" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
                        <Icon className={`w-4 h-4 ${iconColor}`} />
                        <span>{title}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {skills.map((skill, sIdx) => (
                          <Badge key={sIdx} className={`${badgeClass} text-xs font-medium`}>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* 2. B.TECH - LNJPIT */}
          <div className="relative flex gap-8">
            <div className="hidden md:flex flex-col items-center flex-shrink-0">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-700 border-4 border-white rounded-2xl flex items-center justify-center z-10 shadow-md">
                <GraduationCap className="h-8 w-8" />
              </div>
            </div>

            <Card className="flex-1 p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100">
                  Undergraduate • B.Tech
                </span>
                <span className="flex items-center gap-2 text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
                  <Calendar className="h-3.5 w-3.5 text-indigo-500" />
                  Sep 2014 – Jul 2017
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Bachelor of Technology in Computer Science & Engineering
                </h3>
                <p className="text-lg font-semibold text-indigo-600 mt-1">
                  Loknayak Jai Prakash Institute of Technology
                </p>
                <div className="flex items-center gap-2 text-gray-500 mt-1 text-sm font-medium">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span>Chapra, India</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5">
                  Core Foundations
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {btechFoundations.map((item, idx) => (
                    <Badge key={idx} className="bg-indigo-50 text-indigo-700 border-indigo-200 text-xs font-medium">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
