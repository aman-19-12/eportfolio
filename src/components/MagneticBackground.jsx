import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const MagneticBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            className="fixed inset-0 z-0 pointer-events-none"
            options={{
                fullScreen: { enable: false, zIndex: 0 },
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: "window",
                    events: {
                        onHover: {
                            enable: true,
                            mode: "attract",
                        },
                        resize: true,
                    },
                    modes: {
                        attract: {
                            distance: 150, // Expanded Magnetic pull radius
                            duration: 0.4,
                            speed: 1,
                        },
                    },
                },
                particles: {
                    color: {
                        value: ["#00FFFF", "#7000FF"], // Cyan & Deep Purple
                    },
                    links: { enable: false }, // "Molecules" not interconnected webs
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce", // Ensures particles don't permanently leave viewport
                        },
                        random: true,
                        speed: 0.3, // Slow drift
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 120, // Between 100-150 count spec
                    },
                    opacity: {
                        value: 0.8,
                        animation: {
                            enable: true,
                            speed: 1,
                            minimumValue: 0.2, // Twinkle oscillation spec
                            sync: false
                        }
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 }, // Molecular size
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default MagneticBackground;
