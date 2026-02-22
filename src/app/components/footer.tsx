import { Cloud, Code } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Cloud-inspired divider */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 opacity-30">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <Cloud className="h-5 w-5" />
            <Code className="h-5 w-5" />
            <Cloud className="h-5 w-5" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <div>
            <h3 className="text-2xl font-bold mb-1">Shanu Kumar</h3>
            <p className="text-gray-400">Senior Cloud & Platform Engineer</p>
          </div>

          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Building scalable, reliable cloud infrastructure with a focus on
            automation, developer productivity, and operational excellence.
          </p>

          <div className="pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Shanu Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
