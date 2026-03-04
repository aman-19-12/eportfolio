import React from 'react';
import AboutBox from './AboutBox';

const AboutSection = () => {
    return (
        <section id="about" className="w-full max-w-7xl mx-auto px-4 py-8 md:py-24 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-3">
                    <AboutBox />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
