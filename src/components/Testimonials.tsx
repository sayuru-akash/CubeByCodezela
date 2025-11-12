import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Tech Entrepreneur',
    content: 'The CUBE has completely transformed my work-from-home experience. It\'s my personal sanctuary where I can focus without any distractions.',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Music Producer',
    content: 'The soundproofing and acoustic quality are mind-blowing. I use it as my mobile studio and the results are incredible.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'Meditation Instructor',
    content: 'Perfect for creating a peaceful, controlled environment. My students love the sessions I conduct from my CUBE.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.05),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            Loved By
            <span className="text-red-600"> Thousands</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Join the community of CUBE owners transforming their spaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-zinc-900/50 border border-zinc-800 hover:border-red-600/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
                ))}
              </div>
              <p className="text-zinc-300 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="text-white">{testimonial.name}</div>
                <div className="text-sm text-zinc-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
