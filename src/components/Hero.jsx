import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const headlineRef = useRef(null);
    const subtexRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo(headlineRef.current.children,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power4.out', delay: 0.2 }
            )
                .fromTo(subtexRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
                    "-=0.6"
                );
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
                    <div className="overflow-hidden"><span className="inline-block">I have expertise</span></div>
                    <div className="overflow-hidden"><span className="inline-block text-white/50 italic">in combining</span></div>
                    <div className="overflow-hidden"><span className="inline-block">users' needs</span></div>
                    <div className="overflow-hidden flex items-center gap-4">
                        <span className="inline-block">&amp; business goals</span>
                    </div>
                    <div className="overflow-hidden"><span className="inline-block text-accent">for success.</span></div>
                </h1>

                <p
                    ref={subtexRef}
                    className="mt-8 text-lg md:text-xl text-foreground/60 max-w-2xl font-sans"
                >
                    A multi-disciplinary designer focused on crafting immersive digital experiences and intuitive interfaces for forward-thinking brands.
                </p>

                <div className="mt-12 flex gap-6">
                    <a href="#projects" className="group flex items-center gap-2 hover-target text-sm uppercase tracking-widest font-semibold pb-1 border-b border-white/20 hover:border-accent transition-colors">
                        View Work
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
