"use client";

import Image from "next/image";
import Link from "next/link";
import { delay, motion, scale } from "framer-motion";

export default function HomeHero() {

    const homeHeroAnimations = {
        spanAnimationInitial: { opacity: 0, scale: 1.3 },
        spanAnimationAnimate: { opacity: 1, scale: 1 },
    }

    return (
        <>
            <section className="section home-hero">
                <Image src="/images/general/site-hero-cube.svg" alt="site-hero-cube" width={1070} height={837} className="site-hero-cube"></Image>
                
                <Image src="/images/homepage/home-hero-bulb.webp" alt="home-hero-bulb" width={381} height={490} className="home-hero-bulb"></Image>
                
                <Image src="/images/homepage/home-hero-cap.webp" alt="home-hero-cap" width={224} height={217} className="home-hero-cap"></Image>
                
                <Image src="/images/homepage/home-hero-player.webp" alt="home-hero-player" width={242} height={171} className="home-hero-player"></Image>

                <Link href="/ComingSoon" title="Get Started" className="get-started-btn">
                    <div className="arrow-link">
                        <Image src="/images/homepage/hero-home-btn-arrow.svg" alt="hero-home-btn-arrow" width={100} height={35}></Image>
                    </div>
                    
                    <span className="h5">Get Started</span>
                </Link>

                <div className="container">
                    <div className="hero-details">
                        <h1>
                            <p className="inline">Master All Clinical Trials with </p>
                            {/* Master All Clinical Trials with  */}
                            <span>
                                <motion.span initial={homeHeroAnimations.spanAnimationInitial} animate={homeHeroAnimations.spanAnimationAnimate} transition={{delay: 0.5}}>Agentic </motion.span> <motion.span initial={homeHeroAnimations.spanAnimationInitial} animate={homeHeroAnimations.spanAnimationAnimate} transition={{delay: 1}}>Powered</motion.span>
                            </span>
                            DhatuAcademy</h1>
                        
                        {/* <h1>Master All Clinical Trials with <span>Agentic Powered</span> DhatuAcademy</h1> */}
                    </div>
                </div>
            </section>
        </>
    );
};