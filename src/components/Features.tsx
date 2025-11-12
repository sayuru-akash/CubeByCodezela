import { motion } from 'motion/react';
import { Maximize2, Zap, Shield, Thermometer, Volume2, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Maximize2,
    title: 'Human-Sized Design',
    description: '2m x 2m x 2m of pure personal space. Perfectly designed for complete immersion.',
  },
  {
    icon: Zap,
    title: 'Smart Technology',
    description: 'AI-powered climate control and ambient lighting that adapts to your mood and needs.',
  },
  {
    icon: Shield,
    title: 'Soundproof Isolation',
    description: 'Advanced acoustic panels eliminate external noise, creating your perfect silence.',
  },
  {
    icon: Thermometer,
    title: 'Climate Control',
    description: 'Precision temperature regulation from 15°C to 30°C with humidity optimization.',
  },
  {
    icon: Volume2,
    title: 'Immersive Audio',
    description: '360° spatial audio system for the ultimate entertainment or meditation experience.',
  },
  {
    icon: Smartphone,
    title: 'App Integration',
    description: 'Control every aspect of your CUBE from your smartphone or voice commands.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6 bg-zinc-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.05),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            Engineered for
            <span className="text-red-600"> Perfection</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Every feature meticulously crafted to deliver an unparalleled personal space experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-zinc-900/50 border border-zinc-800 hover:border-red-600/50 transition-all duration-300 backdrop-blur-sm"
            >
              <feature.icon className="w-12 h-12 text-red-600 mb-6" />
              <h3 className="text-2xl mb-4">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
