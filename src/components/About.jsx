import { motion } from 'framer-motion';

const skills = [
  { name: 'Strategy', level: 95 },
  { name: 'Creative Design', level: 90 },
  { name: 'Research', level: 85 },
  { name: 'Freelance', level: 92 },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image with Decorative Shapes */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary transition-colors duration-500">
              <img 
                src="/Portfolio/images/profile.png" 
                alt="Jannatul Ferdousy" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
            {/* Background elements */}
            <div className="absolute top-[-20px] left-[-20px] w-full h-full border-2 border-primary/10 rounded-3xl -z-10 translate-x-4 translate-y-4" />
          </motion.div>

          {/* Content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-primary font-bold uppercase tracking-widest mb-4 italic">— About Me</h4>
            <h2 className="text-5xl font-black mb-8 leading-tight">I Am a Creative Strategist and Designer</h2>
            <p className="text-on-surface-variant text-lg mb-10 leading-relaxed italic border-l-4 border-primary pl-6 py-2">
              "Design is not just what it looks like and feels like. Design is how it works."
            </p>
            
            <div className="space-y-8">
              {skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-bold uppercase tracking-widest text-sm">{skill.name}</span>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-surface rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary shadow-[0_0_10px_rgba(255,180,0,0.5)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
