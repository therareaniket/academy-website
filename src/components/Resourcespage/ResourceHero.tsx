"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ResourceHero() {
    
    return (
        <>
            <section className="section solutions-hero resources-hero">
                <div className="inner-hero-cube">
                    <Image src="/images/general/site-hero-cube.svg" alt="site-hero-cube" width={733} height={574} className=""></Image>
                </div>

                <div className="container">
                    <div className="hero-content">
                        <motion.h1 initial={{ y: '50px', opacity: 0 }} animate={{ y: '0px', opacity: 1, }} transition={{ delay: 0.5, duration: 1 }} >Master Clinical Trials with Guided Learning Resources</motion.h1>                        
                    </div>
                </div>

                <Image src="/images/resources/resourcesherolaptop.webp" alt="solu-hero-chart" width={177} height={99} className="solu-hero-1 resources-hero-1 animate-ltr"></Image>

                <Image src="/images/resources/resourcesherocard.webp" alt="solu-hero-profile" width={108} height={137} className="solu-hero-2 resources-hero-2 "></Image>

                <Image src="/images/resources/resourcesheroblog.webp" alt="solu-hero-scope" width={208} height={118} className="solu-hero-3 resources-hero-3 animate-scaleup"></Image>

                <Image src="/images/resources/resourcesheroemail.webp" alt="solu-hero-glob" width={135} height={144} className="solu-hero-4 resources-hero-4"></Image>
            </section>
        </>
    );
}