
const Footer = () => {
  const socialLinks = [
    {
      href: 'https://discord.gg/zse5FtkutU',
      label: 'Discord',
      icon: '💬',
      color: 'hover:text-[#5865F2]',
    },
    {
      href: 'https://www.youtube.com/@XNRLTweaks',
      label: 'YouTube',
      icon: '📺',
      color: 'hover:text-[#FF0000]',
    },
    {
      href: 'https://www.tiktok.com/@xnrltweaks',
      label: 'TikTok',
      icon: '🎵',
      color: 'hover:text-white',
    },
  ];

  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo and tagline */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-orbitron font-bold text-xl">M</span>
              </div>
              <span className="font-orbitron font-bold text-2xl text-white">
                Molnar Solutions
              </span>
            </div>
            <p className="text-gray-400 text-lg">
              Designing tomorrow&apos;s digital experiences today
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${link.color} transition-all duration-300 transform hover:scale-110 flex items-center space-x-2 group`}
                aria-label={link.label}
              >
                <span className="text-2xl group-hover:animate-bounce">{link.icon}</span>
                <span className="font-medium">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-400">
            <a href="#why-us" className="hover:text-white transition-colors duration-300">Features</a>
            <a href="#services" className="hover:text-white transition-colors duration-300">Services</a>
            <a href="#portfolio" className="hover:text-white transition-colors duration-300">Portfolio</a>
            <a href="#tech-stack" className="hover:text-white transition-colors duration-300">Tech Stack</a>
            <a href="#faq" className="hover:text-white transition-colors duration-300">FAQ</a>
            <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm w-full">
            <p>© 2025 Molnar Solutions. All rights reserved.</p>
            <p className="mt-2">Built with passion and cutting-edge technology</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
