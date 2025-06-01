
import { Code, Bolt, Palette, Headphones, Clock, Monitor } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Tailored applications and websites built to your exact specifications, ensuring unique solutions that align with your vision.',
  },
  {
    icon: Bolt,
    title: 'Blazing Performance',
    description: 'Optimized code for lightning-fast load times and seamless user experiences, keeping you ahead in the digital race.',
  },
  {
    icon: Palette,
    title: 'Stunning UI/UX',
    description: 'Visually striking and intuitive interfaces that captivate users and enhance engagement with your brand.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: '24/7 support via Discord to ensure your project stays on track with rapid issue resolution.',
  },
  {
    icon: Clock,
    title: 'Rapid Delivery',
    description: 'Efficient development cycles to deliver your project on time without compromising quality.',
  },
  {
    icon: Monitor,
    title: 'Robust Security',
    description: 'Advanced encryption and security protocols to protect your data and ensure user trust in your application.',
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 px-4 relative">
      <div className="container max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text font-orbitron">
          Why Choose Us?
        </h2>
        <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
          Discover why our clients choose us for exceptional digital solutions that drive real results.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className={`glass-effect card-hover-effect p-8 rounded-2xl relative group ${
                  index % 2 === 0 ? 'floating-animation' : 'floating-animation-reverse'
                }`}
              >
                <div className="relative z-10">
                  <div className="text-primary mb-6 text-6xl flex justify-center">
                    <IconComponent className="w-16 h-16 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
