import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1752061143360-623e42941ab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwY3ViZXxlbnwxfHx8fDE3NjI5NjQ5NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Minimalist Design',
  },
  {
    url: 'https://images.unsplash.com/photo-1631879742101-cfbb083e6402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwaW50ZXJpb3IlMjBzcGFjZXxlbnwxfHx8fDE3NjI5NjQ5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Futuristic Interior',
  },
  {
    url: 'https://images.unsplash.com/photo-1600229634233-ee5a9a640ff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBnZW9tZXRyaWN8ZW58MXx8fHwxNzYyODcyMDIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Geometric Perfection',
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            See It In
            <span className="text-red-600"> Action</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Experience the CUBE in various settings and configurations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 text-xl">{image.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
