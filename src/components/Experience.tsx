import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Crestron Electronics',
    role: 'Lead Full Stack Engineer',
    period: 'Feb 2021 - Present',
    location: 'New Jersey, United States',
    description: 'Architecting enterprise-scale IoT and automation systems integrating AI-driven intelligence, multi-platform UX, and real-time data orchestration.',
    highlights: [
      'Architected AI-enhanced automation platforms using React.js, Angular, Next.js, Node.js, driving 35% faster automation',
      'Integrated Generative AI (OpenAI GPT, Gemini, Claude) for predictive maintenance and natural language control',
      'Led backend modernization from monolith to distributed microservices with Kafka, Redis, and RabbitMQ',
      'Built scalable cloud-native infrastructure across AWS and Azure with zero-downtime deployments',
      'Led 12-member distributed engineering team across US, Europe, and Asia, increasing delivery velocity by 30%'
    ]
  },
  {
    company: 'NBCUniversal LLC',
    role: 'Senior Full Stack Engineer',
    period: 'Jun 2012 - Dec 2020',
    location: 'New Jersey, United States',
    description: 'Core member of the engineering team behind NBCUniversal\'s Peacock streaming platform.',
    highlights: [
      'Engineered high-concurrency streaming system supporting 10M+ subscribers with sub-second response times',
      'Designed real-time sports betting and live dashboard systems with WebSockets, Kafka, and GraphQL',
      'Integrated LLM-based personalization for content recommendations, improving engagement by 28%',
      'Built data streaming and analytics pipelines with ClickHouse and Snowflake',
      'Led cross-functional development teams across 3 continents'
    ]
  },
  {
    company: 'WGSN',
    role: 'Software Engineer',
    period: 'Sep 2011 - Jun 2012',
    location: 'London, United Kingdom',
    highlights: [
      'Developed trend forecasting dashboards for over 1,000 global brands',
      'Integrated backend Ruby and PHP microservices, improving response times by 20%',
      'Built dynamic, data-driven reporting systems, increasing engagement by 30%'
    ]
  },
  {
    company: 'Blue Fountain Media',
    role: 'Software Engineer',
    period: 'Mar 2010 - Apr 2011',
    location: 'New York, United States',
    highlights: [
      'Built responsive multi-device web applications using Java and Ruby on Rails',
      'Optimized front-end performance improving mobile engagement'
    ]
  },
  {
    company: 'SmartWeb Designs',
    role: 'Web Developer/Designer',
    period: 'Sep 2005 - May 2010',
    location: 'Brooklyn, NY',
    highlights: [
      'Developed 30+ interactive web applications',
      'Created modular AJAX-driven UI components'
    ]
  },
  {
    company: 'Team Centro',
    role: 'Web Developer/Designer',
    period: 'Sep 2002 - May 2005',
    location: 'Limassol, Cyprus',
    highlights: [
      'Built SaaS platforms and digital marketplaces',
      'Introduced modular coding standards and Git-based version control'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 backdrop-blur-sm hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-blue-400" />
                    <h3 className="text-2xl font-bold text-slate-200">{exp.company}</h3>
                  </div>
                  <p className="text-xl text-blue-400 font-medium mb-1">{exp.role}</p>
                  <p className="text-slate-500 text-sm">{exp.location}</p>
                </div>

                <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-4 py-2 rounded-lg whitespace-nowrap">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>

              {exp.description && (
                <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
              )}

              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-400">
                    <span className="text-blue-400 mt-1.5">•</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
