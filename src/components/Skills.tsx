import { Code, Database, Cloud, Cpu, Wrench, Shield } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend',
    skills: ['React', 'React Native', 'Angular', 'Next.js', 'Vue.js', 'Flutter', 'Redux', 'Tailwind CSS', 'Material UI', 'TypeScript']
  },
  {
    icon: Cpu,
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'Express.js', 'FastAPI', 'Django', 'Ruby on Rails', 'Go', '.NET Core', 'GraphQL', 'REST', 'gRPC']
  },
  {
    icon: Database,
    title: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'ClickHouse', 'Snowflake', 'Redis', 'Firebase', 'CouchDB']
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Jenkins', 'Nginx', 'ArgoCD']
  },
  {
    icon: Shield,
    title: 'AI/ML & GenAI',
    skills: ['OpenAI ChatGPT', 'Anthropic Claude', 'Google Gemini', 'TensorFlow Lite', 'Machine Learning', 'Predictive Analytics']
  },
  {
    icon: Wrench,
    title: 'Tools & More',
    skills: ['Kafka', 'RabbitMQ', 'Stripe', 'Solana', 'Jest', 'Cypress', 'Playwright', 'WordPress', 'Sanity', 'Contentful']
  }
];

const languages = [
  'JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'C/C++', 'C#', 'Ruby', 'PHP', 'Shell/Bash'
];

const architectures = [
  'Microservices',
  'Micro-frontend',
  'Serverless',
  'Event-driven Architecture',
  'Cloud-native Design',
  'Multi-tenant SaaS',
  'AI-integrated Architecture'
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-3">
            <Code className="w-6 h-6 text-blue-400" />
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg text-slate-300 text-sm font-medium hover:border-blue-400/40 hover:scale-105 transition-all duration-200"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-3">
            <Shield className="w-6 h-6 text-blue-400" />
            Architecture
          </h3>
          <div className="flex flex-wrap gap-3">
            {architectures.map((arch, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-300 text-sm font-medium hover:border-blue-400/40 hover:scale-105 transition-all duration-200"
              >
                {arch}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-bold text-slate-200">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-800/50 rounded-md text-slate-400 text-sm hover:text-blue-400 hover:bg-slate-800 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
