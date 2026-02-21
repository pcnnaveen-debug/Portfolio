import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.footer-text',
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 1.2,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer className="relative py-32 px-6 md:px-12 lg:px-24 bg-background border-t border-white/10 overflow-hidden" ref={containerRef}>
            {/* Abstract Footer Graphic */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
                <h2 className="footer-text text-5xl md:text-8xl font-serif font-bold tracking-tight mb-8">
                    Let's create something <span className="text-accent italic block mt-2">extraordinary.</span>
                </h2>

                <p className="footer-text text-lg text-white/50 max-w-xl font-sans mb-16">
                    Open to new opportunities, collaborations, and conversations. Drop a line if you have a project in mind.
                </p>

                <a
                    href="mailto:hello@example.com"
                    className="footer-text inline-block hover-target px-12 py-5 rounded-full border border-white/20 hover:border-accent hover:bg-accent/10 transition-colors duration-500 uppercase tracking-widest text-sm font-semibold"
                >
                    Start a Conversation
                </a>
            </div>

            <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-white/30 font-sans footer-text relative z-10 w-full">
                <div>&copy; {new Date().getFullYear()} Designed & Developed with Purpose.</div>
                <div className="flex gap-6 mt-6 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors hover-target">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors hover-target">Dribbble</a>
                    <a href="#" className="hover:text-white transition-colors hover-target">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
