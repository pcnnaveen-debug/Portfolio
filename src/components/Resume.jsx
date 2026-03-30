import { motion } from 'framer-motion';

const resumeData = {
  education: [
    { year: '2015-2018', title: 'Secondary School', sub: 'Englands School', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { year: '2012-2015', title: 'Primary School', sub: 'US School', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ],
  experience: [
    { year: '2019-Present', title: 'Web Developer', sub: 'Envato Market', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { year: '2016-2019', title: 'Graphic Designer', sub: 'Themeforest', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ]
};

const Resume = () => {
  return (
    <section id="resume" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-black mb-4 uppercase">My Resume</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-10 border-l-4 border-primary pl-4 uppercase">Education</h3>
            <div className="space-y-12">
              {resumeData.education.map((item, i) => (
                <div key={i} className="relative pl-8 border-l border-white/10 group">
                  <div className="absolute top-0 left-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-2 group-hover:scale-150 transition-transform" />
                  <div className="inline-block px-4 py-1 border border-primary text-primary text-xs font-bold uppercase mb-4 tracking-widest">
                    {item.year}
                  </div>
                  <h4 className="text-xl font-bold mb-1 tracking-tight uppercase">{item.title}</h4>
                  <span className="text-primary/70 text-sm font-bold uppercase mb-4 block tracking-wider">{item.sub}</span>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-10 border-l-4 border-primary pl-4 uppercase">Experience</h3>
            <div className="space-y-12">
              {resumeData.experience.map((item, i) => (
                <div key={i} className="relative pl-8 border-l border-white/10 group">
                  <div className="absolute top-0 left-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-2 group-hover:scale-150 transition-transform" />
                  <div className="inline-block px-4 py-1 border border-primary text-primary text-xs font-bold uppercase mb-4 tracking-widest">
                    {item.year}
                  </div>
                  <h4 className="text-xl font-bold mb-1 tracking-tight uppercase">{item.title}</h4>
                  <span className="text-primary/70 text-sm font-bold uppercase mb-4 block tracking-wider">{item.sub}</span>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
