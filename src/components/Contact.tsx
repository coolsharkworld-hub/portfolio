import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a
            href="mailto:vladplaz.codes@gmail.com"
            className="group bg-slate-900/50 border border-slate-800 rounded-xl p-8 backdrop-blur-sm hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-200 mb-2">Email</h3>
                <p className="text-slate-400 group-hover:text-blue-400 transition-colors">
                  vladplaz.codes@gmail.com
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>

          <a
            href="tel:+13474538764"
            className="group bg-slate-900/50 border border-slate-800 rounded-xl p-8 backdrop-blur-sm hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-200 mb-2">Phone</h3>
                <p className="text-slate-400 group-hover:text-blue-400 transition-colors">
                  +1 347 453 8764
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 backdrop-blur-sm mb-12 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <MapPin className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-200 mb-2">Location</h3>
              <p className="text-slate-400">Boca Raton, Florida, United States</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105"
          >
            <Linkedin className="w-5 h-5 text-blue-400" />
            <span className="text-slate-300 group-hover:text-blue-400 transition-colors">LinkedIn</span>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5 text-blue-400" />
            <span className="text-slate-300 group-hover:text-blue-400 transition-colors">GitHub</span>
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm">
            © 2025 Vladislav Plazinskiy. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
