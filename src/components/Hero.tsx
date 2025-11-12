import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_50%)]" />
      </div>

      {/* Floating Cube Animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="relative w-64 h-64 md:w-96 md:h-96"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Cube faces */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 border-2 border-red-600/30 bg-red-600/5 backdrop-blur-sm"
              style={{
                transform: `
                  ${i === 0 ? 'rotateY(0deg) translateZ(128px)' : ''}
                  ${i === 1 ? 'rotateY(90deg) translateZ(128px)' : ''}
                  ${i === 2 ? 'rotateY(180deg) translateZ(128px)' : ''}
                  ${i === 3 ? 'rotateY(-90deg) translateZ(128px)' : ''}
                  ${i === 4 ? 'rotateX(90deg) translateZ(128px)' : ''}
                  ${i === 5 ? 'rotateX(-90deg) translateZ(128px)' : ''}
                `,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
            Experience the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
              Ultimate Cube
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto">
            A revolutionary human-sized sanctuary. Redefine your space, transform your reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6">
              Pre-Order Now
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/10 text-lg px-8 py-6">
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>
  );
}
