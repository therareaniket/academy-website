"use client"

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function SolutionHero() {

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
            <section className="section solutions-hero" ref={heroRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <motion.div className="inner-hero-cube" style={{ x: smoothX, y: smoothY, rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: "preserve-3d", }}>
                    <Image src="/images/general/site-hero-cube.svg" alt="site-hero-cube" width={733} height={574} className=""></Image>
                </motion.div>
                
                <div className="container">
                    <div className="hero-content">
                        <motion.h1 initial={{ y: '50px', opacity: 0 }} animate={{ y: '0px', opacity: 1, }} transition={{ delay: 0.5, duration: 1 }} >Explore Dhatu Products with Expert Training</motion.h1>
                    </div>
                </div>

                <Image src="/images/solutionpage/hero-elements/solu-hero-chart.svg" alt="solu-hero-chart" width={97} height={80} className="solu-hero-1 animate-sliding"></Image>
                
                <Image src="/images/solutionpage/hero-elements/solu-hero-profile.png" alt="solu-hero-profile" width={140} height={88} className="solu-hero-2 animate-ltr"></Image>
                
                <Image src="/images/solutionpage/hero-elements/solu-hero-scope.png" alt="solu-hero-scope" width={140} height={88} className="solu-hero-3 animate-scaleup"></Image>

                <Image src="/images/solutionpage/hero-elements/solu-hero-glob.svg" alt="solu-hero-glob" width={120} height={120} className="solu-hero-4 animate-rotate-full"></Image>
            </section>
        </>
    );
}