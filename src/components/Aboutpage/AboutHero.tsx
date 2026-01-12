"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <>
            <section className="section solutions-hero">
                <Image src="/images/general/site-hero-cube.svg" alt="site-hero-cube" width={733} height={574} className="inner-hero-cube"></Image>
                
                <div className="container">
                    <div className="hero-content">
                        <motion.h1 initial={{ y: '50px', opacity: 0 }} animate={{ y: '0px', opacity: 1, }} transition={{ delay: 0.5, duration: 1 }} >Empowering Clinical Trials Mastery at DhatuAcademy</motion.h1>  
                    </div>
                </div>

                <Image src="/images/aboutpage/abt-hero-notes.png" alt="abt-hero-notes" width={183} height={226} className="solu-hero-1"></Image>
                
                <Image src="/images/aboutpage/abt-hero-megnify.png" alt="abt-hero-megnify" width={143} height={146} className="solu-hero-2"></Image>
                
                <Image src="/images/aboutpage/abt-hero-atomic.png" alt="abt-hero-atomic" width={167} height={160} className="solu-hero-3"></Image>

                <Image src="/images/aboutpage/abt-hero-cap.png" alt="abt-hero-cap" width={177} height={132} className="solu-hero-4"></Image>
            </section>
        </>
    );
}