
import { Button } from '@/components/ui/button';
import { CalendarCheck, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-32 relative hero-glow">
      <div className="container mx-auto text-center max-w-7xl relative z-10">
        <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold mb-6 gradient-text font-orbitron">
          Design. Develop.
          <br />
          <span className="bg-gradient-to-r from-secondary to-primary-light bg-clip-text text-transparent">
            Dominate the Market.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform your vision into stunning digital reality with cutting-edge technology and innovative design.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-primary text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/25 group"
            asChild
          >
            <a href="https://calendly.com/your-username/consultation" target="_blank" rel="noopener noreferrer">
              <CalendarCheck className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Book a Consultation
            </a>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/30 text-white hover:bg-primary/10 hover:border-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 group"
            asChild
          >
            <a href="https://discord.gg/zse5FtkutU" target="_blank" rel="noopener noreferrer">
              <Globe className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Join Discord
            </a>
          </Button>
        </div>

        {/* Floating orbs for visual enhancement */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl floating-animation"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl floating-animation-reverse"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary-light/20 rounded-full blur-xl floating-animation"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
      </div>
    </section>
  );
};

export default HeroSection;
