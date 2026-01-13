"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function HomeHero() {

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

    const homeHeroAnimations = {
        spanAnimationInitial: { opacity: 0, scale: 1.3 },
        spanAnimationAnimate: { opacity: 1, scale: 1 },
    }

    return (
        <>
            <section ref={heroRef} className="section home-hero" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <motion.div className="site-hero-cube" style={{ x: smoothX, y: smoothY, rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: "preserve-3d", }}>
                    <Image src="/images/general/site-hero-cube.svg" alt="site-hero-cube" width={1070} height={837}></Image>
                </motion.div>
                
                <Image src="/images/homepage/home-hero-bulb.webp" alt="home-hero-bulb" width={381} height={490} className="home-hero-bulb animate-ltr"></Image>
                
                <Image src="/images/homepage/home-hero-cap.webp" alt="home-hero-cap" width={224} height={217} className="home-hero-cap animate-ltr"></Image>
                
                <Image src="/images/homepage/home-hero-player.webp" alt="home-hero-player" width={242} height={171} className="home-hero-player animate-scaleup"></Image>

                <Link href="/ComingSoon" title="Get Started" className="get-started-btn">
                    <div className="arrow-link">
                        <Image src="/images/homepage/hero-home-btn-arrow.svg" alt="hero-home-btn-arrow" width={100} height={35} className="animate-sliding"></Image>
                    </div>
                    
                    <span className="h5">Get Started</span>
                </Link>

                <div className="container">
                    <div className="hero-details">
                        <h1>Master All Clinical Trials With <span className="blue-span">
                                {/* <motion.span initial={homeHeroAnimations.spanAnimationInitial} animate={homeHeroAnimations.spanAnimationAnimate} transition={{delay: 1,}} className="h1-span-agentic">Agentic</motion.span> <motion.span initial={homeHeroAnimations.spanAnimationInitial} animate={homeHeroAnimations.spanAnimationAnimate} transition={{delay: 1.5,}} className="h1-span-powered">Powered</motion.span> */}
                                <span className="h1-span-agentic">Agentic</span> <span className="h1-span-powered">Powered</span>
                            </span>DhatuAcademy
                        </h1>    
                    </div>
                </div>
            </section>
        </>
    );
};