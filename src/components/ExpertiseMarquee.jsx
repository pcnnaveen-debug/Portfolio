import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const tools = [
    "Figma", "Sketch", "Adobe XD", "Framer", "React", "Tailwind CSS",
    "Webflow", "Spline", "GSAP", "Three.js", "Next.js", "Cinema 4D"
];

export default function ExpertiseMarquee() {
    const scrollRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Simple loop animation for the marquee
            const tl = gsap.timeline({ repeat: -1 });
            tl.to(scrollRef.current, {
                xPercent: -50,
                ease: "none",
                duration: 20
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-24 border-y border-white/5 overflow-hidden bg-surface relative">
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-surface to-transparent z-10" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-surface to-transparent z-10" />

            <div className="flex w-[200vw]" ref={scrollRef}>
                <div className="flex w-1/2 justify-around items-center px-4">
                    {tools.map((tool, idx) => (
                        <span key={idx} className="text-4xl md:text-6xl font-serif text-white/20 uppercase tracking-wider whitespace-nowrap hover:text-accent transition-colors duration-300">
                            {tool}
                        </span>
                    ))}
                </div>
                <div className="flex w-1/2 justify-around items-center px-4">
                    {tools.map((tool, idx) => (
                        <span key={`dup-${idx}`} className="text-4xl md:text-6xl font-serif text-white/20 uppercase tracking-wider whitespace-nowrap hover:text-accent transition-colors duration-300">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
