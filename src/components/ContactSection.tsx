
import { Button } from '@/components/ui/button';
import { CalendarCheck, Globe } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text font-orbitron">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Let&apos;s discuss your vision and turn it into a stunning digital reality. 
          Book a consultation or join our community today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-primary text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/25 group"
            asChild
          >
            <a href="https://calendly.com/your-username/consultation" target="_blank" rel="noopener noreferrer">
              <CalendarCheck className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Book Free Consultation
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
              Join Our Discord
            </a>
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-16 glass-effect rounded-2xl p-8 floating-animation">
          <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">
            Get In Touch
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-primary text-2xl mb-2">📧</div>
              <div className="text-gray-300">Email</div>
              <div className="text-white font-semibold">contact@molnarsolutions.com</div>
            </div>
            <div>
              <div className="text-primary text-2xl mb-2">💬</div>
              <div className="text-gray-300">Discord</div>
              <div className="text-white font-semibold">Available 24/7</div>
            </div>
            <div>
              <div className="text-primary text-2xl mb-2">⚡</div>
              <div className="text-gray-300">Response Time</div>
              <div className="text-white font-semibold">Within 2 hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
