import { motion } from 'framer-motion';
import { Layout, Code, Hash, Crown, Key, HelpCircle } from 'lucide-react';

const services = [
  { icon: Layout, title: 'Web Design', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin pharetra tortor.' },
  { icon: Code, title: 'Development', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin pharetra tortor.' },
  { icon: Hash, title: 'Social Media', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin pharetra tortor.' },
  { icon: Crown, title: 'Branding', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin pharetra tortor.' },
  { icon: Key, title: 'Strategy', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin pharetra tortor.' },
  { icon: HelpCircle, title: 'Consulting', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin pharetra tortor.' },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl font-black mb-4">What I'm Doing</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="px-8 border-x border-white/5 last:border-r-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <div className="flex justify-center mb-6">
                <service.icon size={48} className="text-primary stroke-1" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
