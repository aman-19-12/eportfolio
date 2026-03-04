import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-black/50 backdrop-blur-md border-t border-white/10 mt-32 z-20 relative">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

                    {/* Left Column: About & Socials */}
                    <div className="space-y-6">
                        <h4 className="text-white font-mono text-sm uppercase tracking-widest flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#00FFFF] shadow-[0_0_10px_rgba(0,255,255,0.6)]"></span>
                            About Me
                        </h4>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                            Thank you for visiting my personal portfolio. I am a CSE student at <span className="text-white">GEHU</span> bridging the gap between design and engineering.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>
                    </div>

                    {/* Center Column: Navigation */}
                    <div className="space-y-6">
                        <h4 className="text-white font-mono text-sm uppercase tracking-widest flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]"></span>
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Skills', 'Experience'].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase()}`} className="text-zinc-400 text-sm hover:text-white hover:translate-x-1 inline-block transition-transform duration-300">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-white font-mono text-sm uppercase tracking-widest flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]"></span>
                            Contact Info
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-zinc-400 text-sm group">
                                <svg className="mt-1 flex-shrink-0 text-zinc-500 group-hover:text-purple-400 transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <span>+91 7668735641</span>
                            </li>
                            <li className="flex items-start gap-4 text-zinc-400 text-sm group">
                                <svg className="mt-1 flex-shrink-0 text-zinc-500 group-hover:text-cyan-400 transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <span>panwaraman002@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-4 text-zinc-400 text-sm group">
                                <svg className="mt-1 flex-shrink-0 text-zinc-500 group-hover:text-pink-400 transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                <span>Shyampur, Rishikesh, Uttarakhand</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Copyright Bottom Bar */}
            <div className="w-full border-t border-white/5 py-6 bg-black/40">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-zinc-500 text-xs font-mono tracking-widest uppercase">
                        © 2024 - 2026
                    </p>
                    <p className="text-zinc-500 text-xs font-mono tracking-widest uppercase flex items-center gap-2">
                        Designed by <span className="text-white">Aman Panwar</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    </p>
                </div>
            </div>

            {/* Ambient Base Light */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_0_20px_rgba(0,255,255,0.8)] pointer-events-none"></div>
        </footer>
    );
};

export default Footer;
