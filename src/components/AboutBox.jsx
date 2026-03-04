import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";

const AboutBox = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 md:row-span-2 bg-zinc-900/50 border border-white/10 rounded-[2rem] p-6 relative overflow-hidden group w-full h-full flex flex-col justify-center backdrop-blur-md shadow-lg"
        >
            {/* Photo Container */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 flex-shrink-0">
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-cyan-500/50 z-10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.img
                    src={profilePic}
                    alt="Aman Panwar"
                    className="w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
            </div>

            {/* Bio Content */}
            <div className="text-center flex-grow flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tighter mb-1">Aman Panwar</h2>
                <p className="text-cyan-400 text-[10px] md:text-xs font-mono mb-4">CSE Student @ GEHU | Graphic Designer | PR Specialist</p>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    I'm a B.Tech 2nd-year Computer Science student with a strong interest in learning new technologies and developing creative solutions. I enjoy working on coding projects, solving real-world problems, and continuously improving my technical skills.
                </p>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-purple-500/10 blur-3xl rounded-full z-0 pointer-events-none" />
        </motion.div>
    );
};

export default AboutBox;
