import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BentoCard from './BentoCard';
import { portfolioData } from '../data/portfolioData';

const HackathonsSection = () => {
    const [selectedId, setSelectedId] = useState(null);

    const allWork = portfolioData.hackathons.map((hack, index) => ({
        id: `hack-${index}`,
        title: hack.title,
        category: hack.category,
        shortDesc: hack.description,
        techStack: hack.tags,
        accent: index % 2 === 0 ? "245, 158, 11" : "16, 185, 129",
        gridClass: "md:col-span-2 md:row-span-1",
        bgClass: `bg-[rgba(${index % 2 === 0 ? "245,158,11" : "16,185,129"},0.05)] border-[rgba(${index % 2 === 0 ? "245,158,11" : "16,185,129"},0.5)] border-opacity-50 shadow-lg shadow-[rgba(${index % 2 === 0 ? "245,158,11" : "16,185,129"},0.1)]`
    }));

    const selectedProject = allWork.find(p => p.id === selectedId);

    return (
        <section id="hackathons" className="w-full max-w-7xl mx-auto px-4 py-16 relative z-20">
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter mb-4">
                    Hackathons
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent"></div>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <AnimatePresence>
                    {allWork.map((project, index) => (
                        <BentoCard
                            key={project.id}
                            layoutId={project.id}
                            onClick={() => setSelectedId(project.id)}
                            className={`${project.gridClass} ${project.bgClass} cursor-pointer group`}
                            style={{ '--accent-color': project.accent }}
                            delay={index * 0.1}
                            duration={3 + (index * 0.5)}
                            zIndex={10}
                        >
                            <div className="p-4 h-full flex flex-col justify-center">
                                <h3 className="text-2xl lg:text-3xl font-sans tracking-tighter font-semibold text-white mb-2 group-hover:text-[rgba(var(--accent-color),1)] transition-colors duration-500">
                                    {project.title}
                                </h3>
                                <p className="text-[#00FFFF] font-mono text-[10px] uppercase tracking-widest leading-relaxed mb-4 group-hover:drop-shadow-[0_0_8px_rgba(var(--accent-color),0.8)] transition-all duration-500">
                                    {project.category}
                                </p>
                                <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed">
                                    {project.shortDesc}
                                </p>

                                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-lg text-[10px] uppercase tracking-widest font-mono text-gray-300 group-hover:border-[rgba(var(--accent-color),0.4)] transition-colors duration-500">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </BentoCard>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Modal functionality */}
            <AnimatePresence>
                {selectedId && selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={selectedId}
                            className="relative w-full max-w-3xl bg-zinc-950 border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_80px_rgba(var(--accent-color),0.15)] flex flex-col"
                            style={{ '--accent-color': selectedProject.accent }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-white hover:bg-white/20 transition-all border border-white/10"
                                onClick={() => setSelectedId(null)}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>

                            <p className="text-[10px] font-mono uppercase tracking-widest text-[rgba(var(--accent-color),1)] mb-4">{selectedProject.category}</p>
                            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-6">{selectedProject.title}</h2>
                            <p className="text-white/70 text-lg leading-relaxed mb-12">{selectedProject.shortDesc}</p>

                            <div>
                                <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3">Tags & Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.techStack.map(tech => (
                                        <span key={`modal-${tech}`} className="px-3 py-1 bg-white/5 border border-white/10 text-white text-xs font-mono tracking-widest uppercase rounded">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default HackathonsSection;
