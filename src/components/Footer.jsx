import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="py-12 bg-background border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Logo */}
                    <motion.div 
                        className="text-3xl font-script text-primary"
                        whileHover={{ scale: 1.05 }}
                    >
                        Janemon
                    </motion.div>

                    {/* Links */}
                    <div className="flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                        <a href="#" className="hover:text-primary transition-colors">Facebook</a>
                        <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                        <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                        <a href="#" className="hover:text-primary transition-colors">Dribbble</a>
                    </div>

                    {/* Copyright */}
                    <div className="text-xs text-on-surface-variant/50 font-medium uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} Janemon. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
