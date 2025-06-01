
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const portfolioItems = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with advanced analytics and inventory management.',
    category: 'Web Development',
    image: '/placeholder.svg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    id: 2,
    title: 'Desktop Security Suite',
    description: 'Comprehensive security application with real-time threat detection.',
    category: 'Desktop Application',
    image: '/placeholder.svg',
    technologies: ['C#', 'WPF', '.NET', 'SQLite'],
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    description: 'Analytics dashboard with real-time data visualization and reporting.',
    category: 'Web Development',
    image: '/placeholder.svg',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Charts.js'],
  },
  {
    id: 4,
    title: 'Mobile-First Website',
    description: 'Responsive corporate website with optimized performance.',
    category: 'Web Development',
    image: '/placeholder.svg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
  },
  {
    id: 5,
    title: 'Inventory Manager',
    description: 'Desktop application for warehouse management and tracking.',
    category: 'Desktop Application',
    image: '/placeholder.svg',
    technologies: ['C#', 'WinForms', 'MySQL', 'Reports'],
  },
  {
    id: 6,
    title: 'API Gateway',
    description: 'Microservices architecture with advanced routing and authentication.',
    category: 'Backend',
    image: '/placeholder.svg',
    technologies: ['Node.js', 'Express', 'Redis', 'JWT'],
  },
];

const categories = ['All', 'Web Development', 'Desktop Application', 'Backend'];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text font-orbitron">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our recent projects and see how we transform ideas into exceptional digital experiences
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25'
                  : 'border-primary/30 text-gray-300 hover:border-primary hover:text-white'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`glass-effect card-hover-effect rounded-2xl overflow-hidden group ${
                index % 2 === 0 ? 'floating-animation' : 'floating-animation-reverse'
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 relative z-10">
                <div className="mb-3">
                  <span className="text-primary text-sm font-semibold bg-primary/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 font-orbitron">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
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

export default PortfolioSection;
