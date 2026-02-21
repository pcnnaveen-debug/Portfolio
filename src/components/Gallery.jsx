import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=800&auto=format&fit=crop",
];

export default function Gallery() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray('.gallery-item');

            gsap.fromTo(items,
                { y: 100, opacity: 0, scale: 0.95 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "expo.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-32 px-6 md:px-12 lg:px-24" ref={containerRef}>
            <div className="mb-20 text-center">
                <h2 className="text-xl md:text-2xl font-serif italic text-accent">Design Explorations</h2>
                <h3 className="text-4xl md:text-6xl font-semibold mt-4">Visual Gallery</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
                {galleryImages.map((src, idx) => (
                    <div
                        key={idx}
                        className={`gallery-item relative rounded-2xl overflow-hidden group hover-target ${idx === 0 || idx === 3 ? 'md:col-span-2' : 'col-span-1'}`}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-expo-out"
                            style={{ backgroundImage: `url(${src})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                            <span className="text-white font-serif uppercase tracking-widest text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 block">Exploration {(idx + 1).toString().padStart(2, '0')}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
