import { motion } from 'motion/react';

const specs = [
  { label: 'Dimensions', value: '2m × 2m × 2m' },
  { label: 'Weight', value: '450 kg' },
  { label: 'Material', value: 'Aerospace-grade aluminum & tempered glass' },
  { label: 'Sound Isolation', value: '45 dB reduction' },
  { label: 'Power Consumption', value: '120W average' },
  { label: 'Temperature Range', value: '15°C - 30°C' },
  { label: 'Humidity Control', value: '40% - 60% RH' },
  { label: 'Audio System', value: '8-speaker 360° spatial array' },
  { label: 'Lighting', value: 'RGB LED with 16M colors' },
  { label: 'Connectivity', value: 'Wi-Fi 6, Bluetooth 5.2' },
  { label: 'Assembly Time', value: '4-6 hours (2 people)' },
  { label: 'Warranty', value: '5 years comprehensive' },
];

export function Specifications() {
  return (
    <section id="specs" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181800_1px,transparent_1px),linear-gradient(to_bottom,#18181800_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            Technical
            <span className="text-red-600"> Specifications</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Precision engineering meets cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-zinc-800/30">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 bg-zinc-900/80 hover:bg-zinc-800/80 transition-colors duration-300"
            >
              <div className="text-sm text-zinc-500 mb-2">{spec.label}</div>
              <div className="text-xl text-white">{spec.value}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 bg-gradient-to-r from-red-600/10 to-red-400/10 border border-red-600/30"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">99.9%</div>
              <div className="text-zinc-400">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl mb-2">5 Years</div>
              <div className="text-zinc-400">Warranty Coverage</div>
            </div>
            <div>
              <div className="text-4xl mb-2">24/7</div>
              <div className="text-zinc-400">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
