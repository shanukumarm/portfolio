import { Card } from "./ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const educations = [
  {
    degree: "Master of Technology in Computer Science",
    abbr: "M.Tech",
    institution: "Indian Institute of Technology Madras",
    location: "Chennai, India",
    period: "Jul 2019 – Jul 2021",
    level: "Postgraduate",
    color: "blue" as const,
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    abbr: "B.Tech",
    institution: "Loknayak Jai Prakash Institute of Technology",
    location: "Chapra, India",
    period: "Sep 2014 – Jul 2017",
    level: "Undergraduate",
    color: "indigo" as const,
  },
];

const colorClasses = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    border: "border-blue-400",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-600",
    dot: "border-blue-400",
  },
  slate: {
    bg: "bg-slate-100",
    text: "text-slate-600",
    border: "border-slate-400",
    badgeBg: "bg-slate-50",
    badgeText: "text-slate-600",
    dot: "border-slate-400",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-500",
    border: "border-indigo-300",
    badgeBg: "bg-indigo-50",
    badgeText: "text-indigo-500",
    dot: "border-indigo-300",
  },
};

export function EducationSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-indigo-300"></div>

          <div className="space-y-10">
            {educations.map((edu, index) => {
              const colors = colorClasses[edu.color];
              return (
                <div key={index} className="relative flex gap-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center flex-shrink-0">
                    <div
                      className={`w-16 h-16 ${colors.bg} border-4 ${colors.dot} rounded-xl flex items-center justify-center z-10`}
                    >
                      <GraduationCap className={`h-7 w-7 ${colors.text}`} />
                    </div>
                  </div>

                  <Card className="flex-1 p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-white">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <span
                          className={`inline-block text-xs font-semibold ${colors.badgeText} ${colors.badgeBg} px-3 py-1 rounded-full mb-3`}
                        >
                          {edu.level} · {edu.abbr}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">
                          {edu.degree}
                        </h3>
                        <p className={`font-semibold mt-1 ${colors.text}`}>
                          {edu.institution}
                        </p>
                      </div>
                      <span className="flex items-center gap-2 text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full whitespace-nowrap">
                        <Calendar className="h-3.5 w-3.5" />
                        {edu.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
