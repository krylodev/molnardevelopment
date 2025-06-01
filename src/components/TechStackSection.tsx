
const techStacks = [
  {
    category: 'Frontend',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
    color: 'from-blue-500 to-purple-600',
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'Python', 'C#', '.NET', 'Express'],
    color: 'from-green-500 to-teal-600',
  },
  {
    category: 'Desktop',
    technologies: ['C# WinForms', 'WPF', 'Electron', 'Qt', 'JavaFX'],
    color: 'from-primary to-secondary',
  },
  {
    category: 'Database',
    technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'SQLite'],
    color: 'from-orange-500 to-red-600',
  },
  {
    category: 'DevOps',
    technologies: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Nginx'],
    color: 'from-indigo-500 to-blue-600',
  },
  {
    category: 'Tools',
    technologies: ['Git', 'VS Code', 'Figma', 'Postman', 'Jest'],
    color: 'from-pink-500 to-rose-600',
  },
];

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="py-24 px-4 relative">
      <div className="container mx-auto text-center max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text font-orbitron">
          Tech Stack
        </h2>
        <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
          We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => (
            <div
              key={stack.category}
              className={`glass-effect card-hover-effect p-8 rounded-2xl relative group ${
                index % 2 === 0 ? 'floating-animation' : 'floating-animation-reverse'
              }`}
            >
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${stack.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl font-orbitron font-bold text-white">
                    {stack.category.charAt(0)}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">
                  {stack.category}
                </h3>
                
                <div className="space-y-3">
                  {stack.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2 text-gray-300 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
