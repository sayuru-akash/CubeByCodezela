import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Essential',
    price: '$8,999',
    description: 'Perfect for personal use',
    features: [
      'Standard CUBE unit',
      'Basic climate control',
      'LED lighting system',
      'Bluetooth connectivity',
      '1-year warranty',
      'Email support',
    ],
  },
  {
    name: 'Premium',
    price: '$12,999',
    description: 'For the ultimate experience',
    features: [
      'Premium CUBE unit',
      'Advanced AI climate control',
      'RGB ambient lighting',
      '360° spatial audio system',
      'Wi-Fi 6 & Bluetooth 5.2',
      'Mobile app integration',
      '5-year warranty',
      '24/7 priority support',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For businesses & organizations',
    features: [
      'Multiple CUBE units',
      'Custom branding options',
      'Dedicated account manager',
      'Installation service included',
      'Extended warranty options',
      'Training & onboarding',
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            Choose Your
            <span className="text-red-600"> CUBE</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Flexible pricing for every need. All plans include free shipping.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 bg-zinc-900/50 border transition-all duration-300 relative ${
                plan.featured
                  ? 'border-red-600 scale-105 shadow-2xl shadow-red-600/20'
                  : 'border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 px-4 py-1 text-sm">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="text-4xl mb-2">{plan.price}</div>
                <p className="text-zinc-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.featured
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-zinc-800 hover:bg-zinc-700'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Pre-Order Now'}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
