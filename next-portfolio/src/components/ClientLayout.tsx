"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from './Navbar';
import { motion, AnimatePresence } from 'framer-motion';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isDark, setIsDark] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(systemPrefersDark);
        if (systemPrefersDark) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newDark = !isDark;
        setIsDark(newDark);
        if (newDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black selection:bg-apple-blue/20 transition-colors duration-500 flex flex-col">
            <Navbar
                isDark={isDark}
                toggleTheme={toggleTheme}
            />

            <main className="flex-grow">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="relative py-20 md:py-32 px-6 bg-white dark:bg-black border-t border-black/[0.05] dark:border-white/[0.05] transition-colors duration-500 overflow-hidden">
                <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
                    <div className="mb-14">
                        <h4 className="text-3xl font-bold mb-4 tracking-tighter text-black dark:text-white">Nabil.</h4>
                        <p className="text-sm md:text-base text-gray-400 dark:text-gray-500 font-medium max-w-xs mx-auto text-balance">
                            A builder, not a spectator. <br />
                            Instinct for design, discipline for CS.
                        </p>
                    </div>

                    {/* Centered Footer Links */}
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-10 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 mb-20">
                        <div className="flex flex-col items-center space-y-4 min-w-[140px]">
                            <p className="text-black dark:text-white border-b border-black/[0.05] dark:border-white/[0.05] pb-2 px-6 w-full text-center">Contact</p>
                            <div className="flex flex-col items-center space-y-3">
                                <a href="mailto:nabilanis1920@gmail.com" className="hover:text-apple-blue transition-colors text-zinc-500 dark:text-zinc-400">Email</a>
                                <a href="https://www.linkedin.com/in/nabil-anis" target="_blank" rel="noopener noreferrer" className="hover:text-apple-blue transition-colors text-zinc-500 dark:text-zinc-400">LinkedIn</a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4 min-w-[140px]">
                            <p className="text-black dark:text-white border-b border-black/[0.05] dark:border-white/[0.05] pb-2 px-6 w-full text-center">Social</p>
                            <div className="flex flex-col items-center space-y-3">
                                <a href="https://github.com/nabil-anis" target="_blank" rel="noopener noreferrer" className="hover:text-apple-blue transition-colors text-zinc-500 dark:text-zinc-400">GitHub</a>
                                <a href="https://www.instagram.com/its_nabil_anis/" target="_blank" rel="noopener noreferrer" className="hover:text-apple-blue transition-colors text-zinc-500 dark:text-zinc-400">Instagram</a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-gray-400 dark:text-zinc-700 uppercase">
                            © {new Date().getFullYear()} Nabil. All rights reserved.
                        </div>
                        <div className="flex items-center justify-center gap-4 opacity-30 dark:opacity-20 scale-90 md:scale-100">
                            <span className="text-[8px] font-black uppercase tracking-[0.5em]">Precise</span>
                            <div className="w-1 h-1 rounded-full bg-apple-blue" />
                            <span className="text-[8px] font-black uppercase tracking-[0.5em]">Calm</span>
                            <div className="w-1 h-1 rounded-full bg-apple-blue" />
                            <span className="text-[8px] font-black uppercase tracking-[0.5em]">Deliberate</span>
                        </div>
                    </div>
                </div>

                {/* Anchored signature */}
                <span className="absolute right-4 bottom-2 text-gray-400 dark:text-zinc-700 text-[10px] italic pointer-events-none select-none">By nbl.</span>
            </footer>
        </div>
    );
}
