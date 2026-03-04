import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BentoCard from './BentoCard';
import { portfolioData } from '../data/portfolioData';
import AboutBox from './AboutBox';

const BentoGrid = () => {
    const [filter, setFilter] = useState("All");
    const [selectedId, setSelectedId] = useState(null);

    // Map the single-source-of-truth portfolioData into our robust 3D Bento Layout!
    const projects = [
        ...portfolioData.experience.map((exp, index) => ({
            id: `exp-${index}`,
            title: exp.company,
            category: exp.role,
            shortDesc: `${exp.duration} — ${exp.description}`,
            techStack: portfolioData.skills.slice(0, 3), // Visual aesthetic filler since modal requires it
            accent: index === 0 ? "244, 63, 94" : "168, 85, 247",
            gridClass: "md:col-span-2 md:row-span-2",
            bgClass: `bg-[rgba(${index === 0 ? "244,63,94" : "168,85,247"},0.05)] border-[rgba(${index === 0 ? "244,63,94" : "168,85,247"},0.5)] border-opacity-50 shadow-lg shadow-[rgba(${index === 0 ? "244,63,94" : "168,85,247"},0.1)]`
        })),
        {
            id: "core-arsenal",
            title: "Core Arsenal",
            category: "Skills",
            shortDesc: "Primary technical and creative loadout.",
            techStack: portfolioData.skills,
            accent: "16, 185, 129",
            gridClass: "md:col-span-2 md:row-span-1",
            bgClass: "bg-[rgba(16,185,129,0.05)] border-[rgba(16,185,129,0.5)] border-opacity-50 shadow-lg shadow-[rgba(16,185,129,0.1)]"
        },
        ...portfolioData.projects.map((proj, index) => ({
            id: `proj-${index}`,
            title: proj.title,
            category: proj.category,
            shortDesc: proj.description,
            techStack: proj.tags,
            accent: index === 0 ? "99, 102, 241" : "245, 158, 11",
            gridClass: index === 0 ? "md:col-span-2 md:row-span-1" : "md:col-span-4 md:row-span-1",
            bgClass: `bg-[rgba(${index === 0 ? "99,102,241" : "245,158,11"},0.05)] border-[rgba(${index === 0 ? "99,102,241" : "245,158,11"},0.5)] border-opacity-50 shadow-lg shadow-[rgba(${index === 0 ? "99,102,241" : "245,158,11"},0.1)]`
        }))
    ];

    const categories = ["All", "Hackathon", "Software", "Skills"];

    // Lock background scrolling when detailed overlay is opened
    useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => { document.body.style.overflow = "auto" };
    }, [selectedId]);

    const filteredProjects = projects.filter(p => filter === "All" || p.category === filter);
    const selectedProject = projects.find(p => p.id === selectedId);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 relative z-20">

            {/* Dynamic Filter Controls */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full font-mono text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 ease-out border ${filter === cat ? 'bg-white text-zinc-950 border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]' : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/30'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Layout Animations Grid Wrapper */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[minmax(300px,auto)] pb-32">
                <AnimatePresence>
                    {/* Static Grid Modules: Avatar & About Me Base */}
                    {(filter === "All" || filter === "Management") && (
                        <>
                            <AboutBox />
                        </>
                    )}

                    {/* Dynamic Database Iteration */}
                    {filteredProjects.map((project, index) => (
                        <BentoCard
                            key={project.id}
                            layoutId={project.id}
                            onClick={() => setSelectedId(project.id)}
                            className={`${project.gridClass} ${project.bgClass} cursor-pointer group`}
                            style={{ '--accent-color': project.accent }}
                            delay={index * 0.15}
                            duration={3 + (index * 0.5)}
                            yOffset={filter === "All" ? [0, -10, 0] : [0, 0, 0]} // Reduce float oscillation when filtered
                            zIndex={10}
                        >
                            {index < 2 ? (
                                <div className="flex flex-col items-center justify-center h-full relative z-10 w-full p-4">
                                    <h3 className="text-4xl lg:text-7xl font-sans tracking-tighter font-extrabold text-white mb-3 group-hover:text-[rgba(var(--accent-color),1)] transition-colors duration-500 text-center drop-shadow-md">{project.title}</h3>
                                    <div className="flex items-center gap-2 text-[#00FFFF] group-hover:drop-shadow-[0_0_8px_rgba(var(--accent-color),0.8)] transition-all duration-500">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                                        <p className="font-mono text-[10px] uppercase tracking-widest leading-relaxed">{project.category}</p>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-2xl lg:text-3xl font-sans tracking-tighter font-semibold text-white mb-1 group-hover:text-[rgba(var(--accent-color),1)] transition-colors duration-500">{project.title}</h3>
                                    <p className="text-[#00FFFF] font-mono text-[10px] uppercase tracking-widest leading-relaxed mb-4 group-hover:drop-shadow-[0_0_8px_rgba(var(--accent-color),0.8)] transition-all duration-500">{project.category}</p>
                                    <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed max-w-lg">{project.shortDesc}</p>

                                    <div className="mt-auto pt-8 flex flex-wrap gap-2">
                                        {project.techStack.map(tech => (
                                            <span key={tech} className="px-3 py-1.5 bg-zinc-950/40 border border-white/10 rounded-lg text-[10px] uppercase tracking-widest font-mono text-gray-300 group-hover:border-[rgba(var(--accent-color),0.4)] transition-colors duration-500">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </>
                            )}
                        </BentoCard>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Detailed Overlay Technical Breakdown connected via layoutId */}
            <AnimatePresence>
                {selectedId && selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12 bg-black/90 backdrop-blur-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={selectedId}
                            className={`relative w-[95vw] md:w-[80vw] h-[90vh] md:h-[80vh] overflow-hidden rounded-[2rem] border border-t-[rgba(var(--accent-color),0.6)] border-l-white/20 border-r-white/5 border-b-white/5 bg-black p-6 md:p-12 shadow-[0_0_80px_rgba(var(--accent-color),0.15)] flex flex-col`}
                            style={{ '--accent-color': selectedProject.accent }}
                            onClick={(e) => e.stopPropagation()}
                            transition={{ layout: { type: "spring", stiffness: 300, damping: 30, duration: 0.5 } }}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center bg-white/5 rounded-full text-white hover:bg-white/20 border border-white/10 transition-all z-50 backdrop-blur-md hover:scale-110 shadow-lg"
                                onClick={() => setSelectedId(null)}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>

                            {/* Inner Scrollable Presentation Layout */}
                            <div className="overflow-y-auto h-full w-full pr-2 md:pr-4 flex flex-col gap-12 relative z-10 custom-scrollbar">
                                {/* Header section mapping */}
                                <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 items-start pt-8 md:pt-0">
                                    <div className="flex-1">
                                        <p className="text-[10px] font-mono uppercase tracking-widest text-[rgba(var(--accent-color),1)] mb-4 flex items-center gap-3">
                                            <span className="w-8 h-[1px] bg-[rgba(var(--accent-color),1)]"></span>
                                            {selectedProject.category}
                                        </p>
                                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans font-extrabold tracking-tighter text-white mb-6 leading-[1.1]">{selectedProject.title}</h2>
                                        <p className="text-white/60 font-sans text-lg md:text-xl leading-relaxed">{selectedProject.shortDesc}</p>
                                    </div>
                                    <div className="flex-1 w-full bg-black/40 rounded-2xl border border-white/10 overflow-hidden aspect-video shadow-2xl relative">
                                        {selectedProject.image && (
                                            <>
                                                <div className="absolute inset-0 bg-[rgba(var(--accent-color),0.2)] mix-blend-overlay z-10 pointer-events-none"></div>
                                                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover filter contrast-125 hover:scale-105 transition-transform duration-700" />
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Body structural section mapping */}
                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 pb-12">
                                    <div className="flex flex-col space-y-12">
                                        <div className="relative">
                                            <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 to-transparent"></div>
                                            <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                                                The Problem
                                            </h4>
                                            <p className="text-white/90 font-mono text-sm md:text-[15px] leading-loose">{selectedProject.problem}</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[rgba(var(--accent-color),1)] to-[rgba(var(--accent-color),0.1)] shadow-[0_0_10px_rgba(var(--accent-color),1)]"></div>
                                            <h4 className="text-[10px] font-mono uppercase tracking-widest text-[rgba(var(--accent-color),1)] mb-3 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[rgba(var(--accent-color),1)] shadow-[0_0_10px_rgba(var(--accent-color),1)]"></span>
                                                The Solution
                                            </h4>
                                            <p className="text-white/90 font-mono text-sm md:text-[15px] leading-loose">{selectedProject.solution}</p>
                                        </div>
                                    </div>

                                    {/* Code Snippet & Results Output block */}
                                    <div className="flex flex-col space-y-8">
                                        {selectedProject.codeSnippet && (
                                            <div className="p-6 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-x-auto shadow-inner relative">
                                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[rgba(var(--accent-color),1)] to-transparent opacity-50"></div>
                                                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[rgba(var(--accent-color),0.8)] mb-4">Core Implementation</h4>
                                                <pre className="text-gray-300 font-mono text-[11px] md:text-xs leading-relaxed whitespace-pre-wrap"><code>{selectedProject.codeSnippet}</code></pre>
                                            </div>
                                        )}

                                        {selectedProject.results && (
                                            <div className="p-6 bg-[rgba(var(--accent-color),0.05)] border border-[rgba(var(--accent-color),0.2)] rounded-xl relative overflow-hidden">
                                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(var(--accent-color),0.1),_transparent_60%)] pointer-events-none"></div>
                                                <h4 className="text-[10px] font-mono uppercase tracking-widest text-[rgba(var(--accent-color),1)] mb-2 inline-block px-2 py-1 bg-[rgba(var(--accent-color),0.1)] rounded-md">Key Results</h4>
                                                <p className="text-white font-sans text-sm md:text-[15px] font-medium leading-relaxed mt-2">{selectedProject.results}</p>
                                            </div>
                                        )}

                                        <div>
                                            <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-4">Tech Stack Mapping</h4>
                                            <div className="flex flex-wrap gap-3">
                                                {selectedProject.techStack.map(tech => (
                                                    <span key={tech} className="px-4 py-2 bg-[rgba(var(--accent-color),0.1)] border border-[rgba(var(--accent-color),0.3)] font-mono text-[10px] uppercase tracking-widest text-[#FFF] rounded shadow-[0_0_10px_rgba(var(--accent-color),0.05)]">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Overlay internal decorative glow matching accent color */}
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(var(--accent-color),0.15),_transparent_50%)] pointer-events-none z-0 rounded-[2rem]"></div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default BentoGrid;
