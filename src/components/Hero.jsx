import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const headlineRef = useRef(null);
    const subtexRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            const statsEl = subtexRef.current?.nextElementSibling;

            tl.fromTo(headlineRef.current.children,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power4.out', delay: 0.2 }
            )
                .fromTo(subtexRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
                    "-=0.6"
                );

            if (statsEl) {
                tl.fromTo(statsEl,
                    { opacity: 0, x: -20 },
                    { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
                    "-=0.4"
                );
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
            {/* Abstract Background Element (placeholder for 3D/Canvas) */}
            <div className="absolute top-1/2 right-10 md:right-32 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-accent/20 blur-3xl rounded-full z-0 mix-blend-screen animate-pulse" />

            <div className="relative z-10 max-w-5xl">
                <h1
                    className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-foreground font-semibold"
                    ref={headlineRef}
                >
                    <div className="overflow-hidden"><span className="inline-block">Designing</span></div>
                    <div className="overflow-hidden flex items-center gap-4">
                        <span className="inline-block text-white/50 italic">Intuitive,</span>
                        <span className="inline-block text-accent">Impactful</span>
                    </div>
                    <div className="overflow-hidden"><span className="inline-block">Experiences</span></div>
                </h1>

                <p
                    ref={subtexRef}
                    className="mt-8 text-lg md:text-xl text-foreground/60 max-w-2xl font-sans"
                >
                    Hey, I’m Naveen 👋<br />
                    UI/UX Designer based in Chennai, India. A multi-disciplinary designer focused on crafting immersive digital experiences and intuitive interfaces for forward-thinking brands.
                </p>

                <div className="mt-8 flex gap-8 items-center border-l-2 border-accent/50 pl-6 z-10 opacity-0 relative">
                    <div>
                        <span className="block text-3xl font-serif text-white font-bold">2+</span>
                        <span className="text-sm text-white/50 uppercase tracking-widest mt-1 block">Years of Experience</span>
                    </div>
                    <div>
                        <span className="block text-3xl font-serif text-white font-bold">20+</span>
                        <span className="text-sm text-white/50 uppercase tracking-widest mt-1 block">Successful Projects</span>
                    </div>
                </div>

                <div className="mt-12 flex gap-6 relative z-20">
                    <a href="https://drive.google.com/file/d/1k00fZvp9Sbr_us6Kh71NNoW29WZhLPYM/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 hover-target text-sm uppercase tracking-widest font-semibold px-8 py-4 border border-white/20 hover:border-accent hover:bg-accent/10 transition-colors duration-300 rounded-full">
                        View Resume
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
