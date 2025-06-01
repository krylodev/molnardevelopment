
const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Molnar Solutions transformed our vision into a stunning desktop application. Their attention to detail and technical expertise is unmatched.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Product Manager, InnovateCorp',
    content: 'The team delivered our e-commerce platform ahead of schedule with exceptional quality. Highly recommend their services!',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Founder, Digital Dreams',
    content: 'Outstanding work on our company website. The design is modern, fast, and exactly what we needed to grow our business.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text font-orbitron">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`glass-effect card-hover-effect p-8 rounded-2xl relative ${
                index % 2 === 0 ? 'floating-animation' : 'floating-animation-reverse'
              }`}
            >
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  &quot;{testimonial.content}&quot;
                </p>
                
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white font-orbitron">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
