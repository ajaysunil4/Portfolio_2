import { spaceGrotesk } from "../fonts/spaceGrotesk";
import { motion } from "framer-motion";
import Logo from "../components/svg/Logo";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";

const Hero = () => {
    return (
        <motion.section
            className="relative z-10 flex bg-[#969696] h-[100vh] w-full justify-center"
            id="home"
            initial="initial"
            animate="animate"
        >
            {/* <HeroBackground /> */}
            <div className="mt-10 flex flex-col items-center sm:mt-0">
                <div className="waves"></div>
                <div className={`relative flex ${spaceGrotesk.className} pointer-events-none`}>
                    <Logo width={500} height={500} />
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
