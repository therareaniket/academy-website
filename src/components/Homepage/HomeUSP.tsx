"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type KeyFeaturesProps = {
    keyFeaturesTitle: string;
    keyFeaturesSubtitle: string;

    keyFeature1Title: string;
    keyFeature1Subtitle: string;
    keyFeature2Title: string;
    keyFeature2Subtitle: string;
    keyFeature3Title: string;
    keyFeature3Subtitle: string;
    keyFeature4Title: string;
    keyFeature4Subtitle: string;
    keyFeature5Title: string;
    keyFeature5Subtitle: string;
    keyFeature6Title: string;
    keyFeature6Subtitle: string;
}

export default function USPs( {keyFeaturesTitle, keyFeaturesSubtitle, keyFeature1Title, keyFeature1Subtitle, keyFeature2Title, keyFeature2Subtitle, keyFeature3Title, keyFeature3Subtitle, keyFeature4Title, keyFeature4Subtitle, keyFeature5Title, keyFeature5Subtitle, keyFeature6Title, keyFeature6Subtitle} : KeyFeaturesProps ) {
    const [activeUsp, setActiveUsp] = useState(0);

    const homeUspAnimations = (typeof window !== "undefined" && window.innerWidth >= 1200) ? {
		title_ltr_initial: { x: "0px", opacity: 1, },
		title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6 } },

		subTitle_ltr_initial: { x: "0px", opacity: 1, },
		subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 2, duration: 0.6 } },
	
    } : {
        title_ltr_initial: { x: "-50px", opacity: 0, },
		title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6 } },

		subTitle_ltr_initial: { x: "-50px", opacity: 0, },
		subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1.5, duration: 0.6 } },
    }

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="stats-headings">
                        <motion.h2 initial={homeUspAnimations.title_ltr_initial} whileInView={homeUspAnimations.title_ltr_animate} viewport={{ once: true, amount: 0.8 }}>{keyFeaturesTitle}</motion.h2>

                        <motion.p initial={homeUspAnimations.subTitle_ltr_initial} whileInView={homeUspAnimations.subTitle_ltr_animate} viewport={{ once: true, amount: 0.8 }} className="h6">{keyFeaturesSubtitle}</motion.p>
                    </div>

                    <div className="usp-lists">
                        <div className={`usp-list site-radius-20 ${activeUsp === 0 ? "active-usp" : ""}`} onClick={() => setActiveUsp(0)}>
                            <div className="">
                                <p className="h4 text-md vertical-text">{keyFeature1Title}</p>

                                <p className="text-18">{keyFeature1Subtitle}</p>
                            </div>

                            <span className="h4 text-md list-num">1</span>

                            <Link href="/About" title="Discover Now" className="usp-link text-18">Discover Now</Link>
                        </div>

                        <div className={`usp-list site-radius-20 ${activeUsp === 1 ? "active-usp" : ""}`} onClick={() => setActiveUsp(1)}>
                            <div className="">
                                <p className="h4 text-md vertical-text">{keyFeature2Title}</p>

                                <p className="text-18">{keyFeature2Subtitle}</p>    
                            </div>

                            <span className="h4 text-md list-num">2</span>

                            <Link href="/About" title="Discover Now" className="usp-link text-18">Discover Now</Link>
                        </div>

                        <div className={`usp-list site-radius-20 ${activeUsp === 2 ? "active-usp" : ""}`} onClick={() => setActiveUsp(2)}>
                            <div className="">
                                <p className="h4 text-md vertical-text">{keyFeature3Title}</p>

                                <p className="text-18">{keyFeature3Subtitle}</p>
                            </div>

                            <span className="h4 text-md list-num">3</span>

                            <Link href="/About" title="Discover Now" className="usp-link text-18">Discover Now</Link>
                        </div>

                        <div className={`usp-list site-radius-20 ${activeUsp === 3 ? "active-usp" : ""}`} onClick={() => setActiveUsp(3)}>
                            <div className="">
                                <p className="h4 text-md vertical-text">{keyFeature4Title}</p>

                                <p className="text-18">{keyFeature4Subtitle}</p>
                            </div>

                            <span className="h4 text-md list-num">4</span>

                            <Link href="/About" title="Discover Now" className="usp-link text-18">Discover Now</Link>
                        </div>

                        <div className={`usp-list site-radius-20 ${activeUsp === 4 ? "active-usp" : ""}`} onClick={() => setActiveUsp(4)}>
                            <div className="">
                                <p className="h4 text-md vertical-text">{keyFeature5Title}</p>

                                <p className="text-18">{keyFeature5Subtitle}</p>
                            </div>

                            <span className="h4 text-md list-num">5</span>

                            <Link href="/About" title="Discover Now" className="usp-link text-18">Discover Now</Link>
                        </div>

                        <div className={`usp-list site-radius-20 ${activeUsp === 5 ? "active-usp" : ""}`} onClick={() => setActiveUsp(5)}>
                            <div className="">
                                <p className="h4 text-md vertical-text">{keyFeature6Title}</p>
        
                                <p className="text-18">{keyFeature6Subtitle}</p>
                            </div>

                            <span className="h4 text-md list-num">6</span>

                            <Link href="/About" title="Discover Now" className="usp-link text-18">Discover Now</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}