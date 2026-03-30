import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const portfolioItems = [
  { id: 1, title: 'Luxury App UI', category: 'Design', img: '/Portfolio/images/p1.png' },
  { id: 2, title: 'Agency Branding', category: 'Branding', img: '/Portfolio/images/p2.png' },
  { id: 3, title: 'Tech Accessory', category: 'Creative', img: '/Portfolio/images/p3.png' },
  { id: 4, title: 'Minimalist Poster', category: 'Branding', img: 'https://images.unsplash.com/photo-1541462608141-ad4d4f65f702?q=80&w=2070&auto=format&fit=crop' },
  { id: 5, title: 'Web Experience', category: 'Design', img: 'https://images.unsplash.com/photo-1522542550221-31fd1971107c?q=80&w=2070&auto=format&fit=crop' },
  { id: 6, title: 'Creative Layout', category: 'Creative', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop' },
];

const categories = ['All', 'Design', 'Branding', 'Creative'];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">My Portfolio</h2>
            <div className="w-24 h-1 bg-primary mx-auto lg:mx-0" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === cat 
                  ? 'text-primary' 
                  : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer bg-surface"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-95 transition-all duration-500 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 p-8 text-center">
                   <h3 className="text-on-primary text-3xl font-black uppercase mb-2">{item.title}</h3>
                   <span className="text-on-primary/70 text-xs font-bold uppercase tracking-widest">{item.category}</span>
                   <div className="mt-8 flex gap-4">
                      <div className="w-14 h-14 rounded-full border-2 border-on-primary/20 flex items-center justify-center hover:bg-on-primary hover:text-primary transition-all duration-300">
                        <Plus size={24} />
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
