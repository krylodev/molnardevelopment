
import { useEffect, useState } from 'react';

const stats = [
  { number: 150, label: 'Projects Completed', suffix: '+' },
  { number: 95, label: 'Client Satisfaction', suffix: '%' },
  { number: 24, label: 'Support Hours', suffix: '/7' },
  { number: 5, label: 'Years Experience', suffix: '+' },
];

const StatsSection = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.number / 100;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.number) {
                current = stat.number;
                clearInterval(timer);
              }
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(current);
                return newCounters;
              });
            }, 20);
          });
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('stats-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="stats-section" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text font-orbitron">
            Our Impact
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Numbers that speak for themselves - our commitment to excellence in every project
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`glass-effect p-8 rounded-2xl text-center card-hover-effect ${
                index % 2 === 0 ? 'floating-animation' : 'floating-animation-reverse'
              }`}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-orbitron">
                {counters[index]}{stat.suffix}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
