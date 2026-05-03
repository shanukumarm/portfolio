import { Card } from "./ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

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

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-blue-200 bg-white">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-1">
                  <div>
                    <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
                      Postgraduate Degree
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      Master of Technology in Computer Science
                    </h3>
                    <p className="text-blue-600 font-semibold mt-1">
                      Indian Institute of Technology Madras
                    </p>
                  </div>
                  <span className="flex items-center gap-2 text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
                    <Calendar className="h-3.5 w-3.5" />
                    Jul 2019 – Jul 2021
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-3 text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Chennai, India</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
