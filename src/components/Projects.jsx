import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "Budgie",
        category: "HRMS Dashboard",
        description: "Revolutionizing Dashboard Experience. A comprehensive HRMS software solution that goes beyond basic portals.",
        color: "#3b82f6", // blue-ish
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        link: "https://naveen-pc.framer.ai/work/gatech-landingpage/budgie-dashboard"
    },
    {
        id: 2,
        title: "Ck's Bakery",
        category: "Web App / QR Management",
        description: "Scanning Their Way to Success. Streamlined the ordering process for improved customer experience and sales.",
        color: "#f59e0b", // amber-ish
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop",
        link: "https://naveen-pc.framer.ai/work/gatech-landingpage/ck-bakery"
    },
    {
        id: 3,
        title: "Onroad",
        category: "Mobile App Product",
        description: "A seamless riding App. A taxi booking application offering convenient riding experiences.",
        color: "#9b5de5", // purple-ish
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
        link: "https://www.behance.net/gallery/186660637/ONROAD-UXUI-Case-study"
    }
];

export default function Projects() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const pCards = gsap.utils.toArray('.project-card');

            pCards.forEach((card) => {
                const image = card.querySelector('.project-image');

                // Parallax effect on the image
                gsap.fromTo(image,
                    { yPercent: -20 },
                    {
                        yPercent: 20,
                        ease: "none",
                        scrollTrigger: {
                            trigger: card,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" className="py-32 px-6 md:px-12 lg:px-24" ref={containerRef}>
            <div className="mb-20">
                <h2 className="text-xl md:text-2xl font-serif italic text-accent">Selected Contributions</h2>
                <h3 className="text-4xl md:text-6xl font-semibold mt-4">Featured Work</h3>
            </div>

            <div className="flex flex-col gap-32">
                {projects.map((project, idx) => (
                    <div key={project.id} className="project-card relative w-full h-[70vh] rounded-3xl overflow-hidden group">
                        {/* Background Image Container with Overflow Hidden for Parallax */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div
                                className="project-image w-full h-[140%] -top-[20%] relative bg-cover bg-center grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-[1.5s] ease-expo-out"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end">
                            <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-expo-out">
                                <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: project.color }}>{project.category}</p>
                                <h4 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-700">{project.title}</h4>

                                <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-700 ease-expo-out overflow-hidden md:w-1/2">
                                    <p className="text-lg md:text-xl text-white/80 mb-8 font-sans">{project.description}</p>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white uppercase tracking-wider text-sm font-semibold hover-target pb-2 border-b border-white/30 hover:border-white transition-colors">
                                        Explore Case Study
                                        <span className="block w-2 h-2 rounded-full" style={{ backgroundColor: project.color }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
