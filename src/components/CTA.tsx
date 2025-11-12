import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';

export function CTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            Ready to Transform
            <span className="block text-red-600">Your Space?</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Join the waitlist and be the first to experience the future of personal space. 
            Limited units available for early adopters.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500 flex-1"
              required
            />
            <Button type="submit" className="bg-red-600 hover:bg-red-700 px-8">
              Join Waitlist
            </Button>
          </form>

          <p className="text-sm text-zinc-500">
            Early adopters get <span className="text-red-600">20% off</span> their first CUBE
          </p>
        </motion.div>
      </div>
    </section>
  );
}
