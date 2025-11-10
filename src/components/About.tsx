import { MapPin, Phone, Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-slate-300 leading-relaxed text-lg">
              Senior Lead Full Stack Engineer with 20+ years of progressive experience architecting and delivering complex, enterprise-grade software systems across web, mobile, IoT, and AI-driven ecosystems.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Specialized in full-stack architecture, microservices, and micro-frontends, integrating high-performance APIs, scalable databases, and cloud-native infrastructures.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Expert in leading distributed global teams, modernizing legacy systems, designing resilient architectures, and deploying intelligent systems powered by Generative AI, machine learning, and predictive analytics.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <h3 className="text-xl font-semibold text-slate-200 mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Boca Raton, FL</span>
                </div>

                <div className="flex items-center gap-3 text-slate-400">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a href="tel:+13474538764" className="hover:text-blue-400 transition-colors">
                    +1 347 453 8764
                  </a>
                </div>

                <div className="flex items-center gap-3 text-slate-400">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href="mailto:vladplaz.codes@gmail.com" className="hover:text-blue-400 transition-colors">
                    vladplaz.codes@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-8 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <h3 className="text-xl font-semibold text-slate-200 mb-4">Education</h3>
              <p className="text-slate-300 font-medium">Bachelor Degree in Computer Science</p>
              <p className="text-slate-400">Brooklyn College, NY</p>
              <p className="text-slate-500 text-sm mt-2">1999 - 2003</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
