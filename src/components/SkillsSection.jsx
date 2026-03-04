import React from 'react';
import { motion } from 'framer-motion';
import BentoCard from './BentoCard';
import { portfolioData } from '../data/portfolioData';

const SkillsSection = () => {
    return (
        <section id="skills" className="w-full max-w-7xl mx-auto px-4 py-24 relative z-20">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter mb-4">
                    Skills <span className="text-cyan-500">&</span> Abilities
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Technical Domain */}
                <BentoCard
                    className="md:col-span-1 md:row-span-1 bg-black border-[rgba(0,255,255,0.4)] border-opacity-50 shadow-lg shadow-[rgba(0,255,255,0.1)] p-8 md:p-12 flex flex-col"
                    style={{ '--accent-color': '0, 255, 255' }}
                    zIndex={15}
                    delay={0}
                >
                    <h3 className="text-[12px] font-mono uppercase tracking-widest text-[#00FFFF] mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FFFF] shadow-[0_0_10px_rgba(0,255,255,0.6)]"></span>
                        Technical Engine
                    </h3>
                    <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed mb-8">
                        The primary coding loadout utilized for building robust software infrastructure, smooth reactive interfaces, and complex interactive systems.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-auto">
                        {portfolioData.skills.filter(s => ['React', 'Tailwind CSS', 'Framer Motion', 'C++', 'TypeScript', 'Next.js'].includes(s)).map(tech => (
                            <span key={`tech-${tech}`} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs uppercase tracking-widest font-mono text-white hover:border-[#00FFFF] hover:bg-cyan-900/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.05)]">
                                {tech}
                            </span>
                        ))}
                    </div>
                </BentoCard>

                {/* Creative Domain */}
                <BentoCard
                    className="md:col-span-1 md:row-span-1 bg-black border-[rgba(244,63,94,0.4)] border-opacity-50 shadow-lg shadow-[rgba(244,63,94,0.1)] p-8 md:p-12 flex flex-col"
                    style={{ '--accent-color': '244, 63, 94' }}
                    zIndex={10}
                    delay={0.2}
                >
                    <h3 className="text-[12px] font-mono uppercase tracking-widest text-rose-500 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.6)]"></span>
                        Creative Arsenal
                    </h3>
                    <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed mb-8">
                        Visualizing brand identities, creating aesthetic media content, and driving comprehensive PR storytelling frameworks.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-auto">
                        {portfolioData.skills.filter(s => ['Graphic Design', 'Media Content Creation', 'Branding'].includes(s)).map(tech => (
                            <span key={`creative-${tech}`} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs uppercase tracking-widest font-mono text-white hover:border-rose-500 hover:bg-rose-900/20 transition-all duration-300 shadow-[0_0_15px_rgba(244,63,94,0.05)]">
                                {tech}
                            </span>
                        ))}
                    </div>
                </BentoCard>

            </div>
        </section>
    );
};

export default SkillsSection;
