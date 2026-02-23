import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        id: '01',
        role: "UI/UX Designer",
        company: "HEPL",
        type: "Full Time",
        period: "Jun 2024 - Present"
    },
    {
        id: '02',
        role: "UI/UX Designer",
        company: "Duzhine IT",
        type: "Internship",
        period: "Mar - Apr 2024"
    },
    {
        id: '03',
        role: "UI/UX Designer",
        company: "Open",
        type: "Freelancer",
        period: "Apr 2023 - May 2024"
    }
];

export default function Experience() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray('.exp-item');

            gsap.fromTo(items,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface" ref={containerRef}>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/3">
                    <h2 className="text-xl md:text-2xl font-serif italic text-accent">Journey</h2>
                    <h3 className="text-4xl md:text-6xl font-semibold mt-4">Experience</h3>
                    <p className="mt-6 text-foreground/60 text-lg">I have expertise in combining users needs & business goals for success. I am proficient in both UI & UX, user-centric design, product design, advanced prototyping & micro interactions, and A/B testing.</p>
                </div>

                <div className="lg:w-2/3 flex flex-col gap-6">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="exp-item group p-8 rounded-2xl bg-background border border-white/5 hover:border-white/20 transition-colors duration-500 flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div>
                                <h4 className="text-2xl font-serif font-semibold text-white group-hover:text-accent transition-colors mb-2">{exp.role}</h4>
                                <div className="text-lg text-white/80 font-sans">{exp.company} <span className="text-white/40 mx-2">•</span> {exp.type}</div>
                            </div>
                            <div className="mt-4 md:mt-0 text-sm tracking-widest uppercase text-white/50 border border-white/10 px-4 py-2 rounded-full font-semibold bg-white/5">
                                {exp.period}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
