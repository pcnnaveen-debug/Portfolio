import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="pt-24 bg-surface/30">
      <div className="container mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Form */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-6 py-4 bg-background/50 border border-white/5 rounded-xl focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/40"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-6 py-4 bg-background/50 border border-white/5 rounded-xl focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/40"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full px-6 py-4 bg-background/50 border border-white/5 rounded-xl focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/40"
              />
              <textarea 
                rows="6" 
                placeholder="Your Message" 
                className="w-full px-6 py-4 bg-background/50 border border-white/5 rounded-xl focus:border-primary outline-none transition-all placeholder:text-on-surface-variant/40 resize-none"
              ></textarea>
              <button className="w-full py-5 bg-primary text-on-primary font-black uppercase tracking-widest text-sm hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-primary/20 transition-all active:scale-[0.98]">
                Touch Here
              </button>
            </form>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div 
            className="lg:w-1/3 flex flex-col gap-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {[
              { icon: MapPin, title: 'Address', detail: '123 Creative Street, London, UK' },
              { icon: Mail, title: 'Email', detail: 'hello@janemon.com' },
              { icon: Phone, title: 'Phone', detail: '+00 123 456 789' },
              { icon: Clock, title: 'Working Hours', detail: 'Mon - Fri: 9:00 - 18:00' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1 mb-1">{item.title}</h4>
                  <p className="text-on-surface text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Grayscale Map Placeholder */}
      <div className="w-full h-[400px] grayscale brightness-[0.2] contrast-[1.2] relative overflow-hidden flex items-center justify-center bg-[#111]">
         <div className="absolute inset-0 bg-primary/5 mix-blend-color" />
         <h3 className="text-on-surface/20 text-4xl font-black uppercase italic select-none">Google Map Placeholder</h3>
      </div>
    </section>
  );
};

export default Contact;
