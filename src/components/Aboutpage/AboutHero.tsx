"use client"

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

type AboutHeroProps = {
    aboutHeroTitle: string;
} 

export default function AboutHero( { aboutHeroTitle } : AboutHeroProps ) {

    const heroRef = useRef<HTMLDivElement>(null);

    // Motion values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Rotation
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    // Smooth spring animation
    const smoothX = useSpring(x, { stiffness: 70, damping: 20 });
    const smoothY = useSpring(y, { stiffness: 70, damping: 20 });
    const smoothRotateX = useSpring(rotateX, { stiffness: 80, damping: 18 });
    const smoothRotateY = useSpring(rotateY, { stiffness: 80, damping: 18 });

    const MAX_MOVE = 200;
    const DEPTH_FACTOR = 0.35; 
    const MAX_ROTATE_X = 10; 
    const MAX_ROTATE_Y = 12;

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!heroRef.current) return;

        const rect = heroRef.current.getBoundingClientRect();

        const mouseX = e.clientX - (rect.left + rect.width / 2);
        const mouseY = e.clientY - (rect.top + rect.height / 2);

        const clampedX = Math.max(-MAX_MOVE, Math.min(MAX_MOVE, mouseX));
        const clampedY = Math.max(-MAX_MOVE, Math.min(MAX_MOVE, mouseY));

        // Parallax movement
        x.set(clampedX * DEPTH_FACTOR);
        y.set(clampedY * DEPTH_FACTOR);

        // 3D rotation
        rotateY.set((clampedX / MAX_MOVE) * MAX_ROTATE_Y);
        rotateX.set((-clampedY / MAX_MOVE) * MAX_ROTATE_X);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <>
            <section ref={heroRef} className="section solutions-hero" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <motion.div className="inner-hero-cube" style={{ x: smoothX, y: smoothY, rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: "preserve-3d", }}>
                    <Image src="/images/general/site-hero-cube.svg" alt="site-hero-cube" width={733} height={574} className=""></Image>
                </motion.div>
                
                <div className="container">
                    <div className="hero-content">
                        <motion.h1 initial={{ y: '50px', opacity: 0 }} animate={{ y: '0px', opacity: 1, }} transition={{ delay: 0.5, duration: 1 }} >{aboutHeroTitle}</motion.h1>  
                    </div>
                </div>

                <Image src="/images/aboutpage/abt-hero-notes.png" alt="abt-hero-notes" width={183} height={226} className="solu-hero-1 animate-sliding"></Image>
                
                <Image src="/images/aboutpage/abt-hero-megnify.png" alt="abt-hero-megnify" width={143} height={146} className="solu-hero-2 animate-scaleup"></Image>
                
                <Image src="/images/aboutpage/abt-hero-atomic.png" alt="abt-hero-atomic" width={167} height={160} className="solu-hero-3 animate-rotate-full"></Image>

                <Image src="/images/aboutpage/abt-hero-cap.png" alt="abt-hero-cap" width={177} height={132} className="solu-hero-4 animate-ltr"></Image>
            </section>
        </>
    );
}