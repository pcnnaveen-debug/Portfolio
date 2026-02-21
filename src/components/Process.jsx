import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
    { id: '01', title: 'Discover & Empathize', desc: 'Understanding the user landscape, business goals, and competitive space.' },
    { id: '02', title: 'Define & Plan', desc: 'Distilling insights into actionable strategies, information architecture, and core features.' },
    { id: '03', title: 'Design & Prototype', desc: 'Crafting premium visual languages, interaction models, and high-fidelity mockups.' },
    { id: '04', title: 'Validate & Iterate', desc: 'Testing with real users, refining micro-interactions, and polishing the final product.' },
];

export default function Process() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const steps = gsap.utils.toArray('.process-step');

            gsap.fromTo(steps,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-surface" ref={containerRef}>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

                <div className="lg:w-1/3">
                    <h2 className="text-xl md:text-2xl font-serif italic text-accent">Methodology</h2>
                    <h3 className="text-4xl md:text-6xl font-semibold mt-4">The Process</h3>
                    <p className="mt-6 text-foreground/60 text-lg">A systematic approach to transforming complex problems into elegant, intuitive digital solutions.</p>
                </div>

                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {processSteps.map((step) => (
                        <div key={step.id} className="process-step group p-8 rounded-2xl bg-background/50 border border-white/5 hover:border-accent/40 transition-colors duration-500">
                            <span className="text-5xl font-serif text-white/10 group-hover:text-accent/30 transition-colors duration-500">{step.id}</span>
                            <h4 className="text-2xl font-semibold mt-6 mb-4 font-serif">{step.title}</h4>
                            <p className="text-white/60 leading-relaxed font-sans">{step.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
