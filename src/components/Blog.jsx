import { motion } from 'framer-motion';

const blogPosts = [
  { id: 1, date: '12 Jan', title: 'Why is a Theme so Important?', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, date: '15 Feb', title: 'Design is the Method for Styling', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, date: '20 Mar', title: 'The Importance of Typography', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop' },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-black mb-4 uppercase">Latest Blog</h2>
          <p className="text-on-surface-variant italic">Staying updated with the latest trends and stories.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 inline-block px-4 py-1 bg-primary text-on-primary font-bold text-xs uppercase tracking-widest rounded-lg">
                  {post.date}
                </div>
              </div>
              <h3 className="text-2xl font-black mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
              <a href="#" className="inline-block pb-1 border-b-2 border-primary text-primary font-bold uppercase text-xs tracking-[0.2em]">
                Continue Reading
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
