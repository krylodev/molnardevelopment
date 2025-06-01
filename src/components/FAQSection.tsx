
import { useState } from 'react';

const faqs = [
  {
    question: 'What programming languages do you use to develop apps?',
    answer: 'We specialize in C# using WinForms and WPF for robust, high-performance desktop applications. For web development, we use modern technologies like React, TypeScript, Node.js, and Python. These frameworks allow us to create tailored solutions that meet your specific requirements with a focus on usability and efficiency.',
  },
  {
    question: 'How secure will my app be?',
    answer: 'We prioritize security by implementing custom authorization systems tailored to your app&apos;s needs. Additionally, we employ advanced obfuscation techniques to protect your product from reverse engineering and ensure robust data protection. All our applications follow industry-standard security practices.',
  },
  {
    question: 'How long does it take to develop a custom website or app?',
    answer: 'The timeline depends on your project&apos;s complexity. A custom website typically takes 2-3 weeks, while a tailored desktop application may require approximately 2 months. We provide a detailed timeline after understanding your specific requirements during our consultation.',
  },
  {
    question: 'How can I be sure that you are trustworthy?',
    answer: 'We encourage you to check out genuine reviews and feedback from our community on our official Discord server. Transparency and customer satisfaction are our top priorities. We also provide regular updates throughout the development process.',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes! We offer comprehensive maintenance packages starting from $50/month, including 24/7 monitoring, bug fixes, performance optimization, and priority support. Our goal is to ensure your application continues to perform excellently long after launch.',
  },
  {
    question: 'Can you help with design and user experience?',
    answer: 'Absolutely! Our team includes experienced UI/UX designers who create stunning, intuitive interfaces. We focus on user-centered design principles to ensure your application not only looks great but also provides an exceptional user experience.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 relative">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text font-orbitron">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
          Find answers to common questions about our services and development process
        </p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass-effect rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-primary' : 'border-white/10'
              } ${index % 2 === 0 ? 'floating-animation' : 'floating-animation-reverse'}`}
            >
              <button
                className="w-full text-left px-8 py-6 flex justify-between items-center hover:bg-white/5 transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <div
                  className={`text-primary text-xl transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  ↓
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
