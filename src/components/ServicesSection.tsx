
import { Monitor, Globe, Wrench } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Desktop Applications',
    description: 'Powerful desktop solutions built with C# WinForms and WPF for maximum performance and user experience.',
    price: 'From $100',
    features: [
      'Custom UI/UX Design',
      'Advanced Security Features',
      'Custom Authorization System',
      'Multi-threading Support',
      'Desktop-Only Compatibility',
    ],
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive websites that captivate your audience and drive business growth.',
    price: 'From $350',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Fast Loading Times',
      'Content Management',
      'E-commerce Integration',
    ],
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance to keep your applications running smoothly and securely.',
    price: 'From $50/mo',
    features: [
      '24/7 Monitoring',
      'Additional Updates',
      'Bug Fixes',
      'Performance Tuning',
      'Priority Support',
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text font-orbitron">
          Our Services
        </h2>
        <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
          Transform your ideas into powerful digital solutions with our comprehensive development services
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className={`glass-effect card-hover-effect p-8 rounded-2xl relative group ${
                  index % 2 === 0 ? 'floating-animation' : 'floating-animation-reverse'
                }`}
              >
                {/* Pricing Tag */}
                <div className="absolute top-5 right-5 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold transform rotate-6 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-300">
                  {service.price}
                </div>

                <div className="relative z-10">
                  <div className="text-primary mb-6 flex justify-center">
                    <IconComponent className="w-16 h-16 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 text-left">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-gray-300 flex items-center">
                        <span className="text-primary mr-3 font-bold">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
