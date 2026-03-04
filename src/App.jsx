import React from 'react';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import HackathonsSection from './components/HackathonsSection';
import ProjectsSection from './components/ProjectsSection';
import MagneticBackground from './components/MagneticBackground';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen w-full overflow-auto bg-black relative flex flex-col font-sans">
            {/* Cinematic Noise Overlay layer */}
            <div className="pointer-events-none fixed inset-0 z-10 h-full w-full opacity-30 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

            {/* Background radial gradient wrapper */}
            <div className="fixed inset-0 z-0 bg-black pointer-events-none"></div>

            {/* Magnetic Particle Engine Canvas */}
            <MagneticBackground />

            <div className="z-20 w-full min-h-screen p-4 pt-16 relative flex flex-col items-center">

                {/* Antigravity Global Header */}
                <header className="w-full max-w-7xl mx-auto px-4 mt-12 mb-8">
                    <h1 className="text-5xl font-extrabold tracking-tighter md:text-7xl lg:text-8xl text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                        Aman Panwar.
                    </h1>
                    <p className="text-gray-400 tracking-wide font-medium mt-2 md:text-xl">B.Tech CSE student at Graphic Era Hill University.</p>
                </header>

                {/* Sectioned Modules natively breaking down the Bento Structure */}
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <HackathonsSection />
                <ProjectsSection />
            </div>

            <Footer />
        </div>
    );
}

export default App;
