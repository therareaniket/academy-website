"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type SoluTrainAcademyProps = {
    solutionWhyDaTitle: string;
    solutionWhyDaSubtitle: string;
    solutionWhyDaList1Title: string;
    solutionWhyDaList1Subtitle: string;
    solutionWhyDaList2Title: string;
    solutionWhyDaList2Subtitle: string;
    solutionWhyDaList3Title: string;
    solutionWhyDaList3Subtitle: string;
    solutionWhyDaList4Title: string;
    solutionWhyDaList4Subtitle: string;
}

export default function SoluTrainAcademy( { solutionWhyDaTitle, solutionWhyDaSubtitle, solutionWhyDaList1Title, solutionWhyDaList1Subtitle, solutionWhyDaList2Title, solutionWhyDaList2Subtitle, solutionWhyDaList3Title, solutionWhyDaList3Subtitle, solutionWhyDaList4Title, solutionWhyDaList4Subtitle }:SoluTrainAcademyProps ) {
    const [isMobile, setIsMobile] = useState(false);
    const [cardsActive, setCardsActive] = useState(false); // NEW: control card activation

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 639px)");
        const handleChange = () => setIsMobile(mediaQuery.matches);
        handleChange();
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const homeCertificatesAnimations = (typeof window !== "undefined" && window.innerWidth >= 1200) ? {
        title_ltr_initial: { x: "0px", opacity: 1, },
        title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6 } },

        subTitle_ltr_initial: { x: "0px", opacity: 1, },
        subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1.5, duration: 0.6 } },
    } : {
        title_ltr_initial: { x: "-50px", opacity: 0, },
        title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6 } },

        subTitle_ltr_initial: { x: "-50px", opacity: 0, },
        subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1.5, duration: 0.6 } },
    }

    // Trigger card animation after heading completes
    const handleHeadingComplete = () => {
        setCardsActive(true);
    };

    useEffect(() => {
        if (!cardsActive) return;

        const cards = document.querySelectorAll(".animate-card");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.4,
            }
        );

        cards.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, [cardsActive]);

    return (
        <section >
            <div className="container">

                {/* HEADING */}
                <div className="solution-train-academy-heading">
                    <div className="solution-train-academy-heading-left">
                        <motion.h2
                            initial={homeCertificatesAnimations.title_ltr_initial}
                            whileInView={homeCertificatesAnimations.title_ltr_animate}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            {solutionWhyDaTitle}
                        </motion.h2>
                    </div>

                    <div className="solution-train-academy-heading-right">
                        <motion.p
                            className="h6"
                            initial={homeCertificatesAnimations.subTitle_ltr_initial}
                            whileInView={homeCertificatesAnimations.subTitle_ltr_animate}
                            viewport={{ once: true, amount: isMobile ? 0.4 : 0.8 }}
                            onAnimationComplete={handleHeadingComplete}
                        >
                            {solutionWhyDaSubtitle}
                        </motion.p>
                    </div>
                </div>

                {/* CARDS */}
                <div className="solution-train-card-wrapper">
                    <div className="solution-train-card-1 solution-train-card site-radius-20 animate-card">
                        <h3 className="h4 text-white animate-title">{solutionWhyDaList1Title}</h3>
                        <p className="text-white h6 animate-text">{solutionWhyDaList1Subtitle}</p>
                    </div>

                    <div className="solution-train-card-2 solution-train-card site-radius-20 animate-card">
                        <h3 className="h4 text-white animate-title">{solutionWhyDaList2Title}</h3>
                        <p className="text-white h6 animate-text">{solutionWhyDaList2Subtitle}</p>
                    </div>

                    <div className="solution-train-card-3 solution-train-card site-radius-20 animate-card">
                        <h3 className="h4 text-white animate-title">{solutionWhyDaList3Title}</h3>
                        <p className="text-white h6 animate-text">{solutionWhyDaList3Subtitle}</p>
                    </div>

                    <div className="solution-train-card-4 solution-train-card site-radius-20 animate-card">
                        <h3 className="h4 text-white animate-title">{solutionWhyDaList4Title}</h3>
                        <p className="text-white h6 animate-text">{solutionWhyDaList4Subtitle}</p>
                    </div>
                </div>

                <div className="solution-train-mobile">
                    <div className="solution-train-row">
                        <div className="solution-train-card-1 solution-train-card site-radius-20 animate-card">
                            <h3 className="h4 text-white animate-title">{solutionWhyDaList1Title}</h3>
                            <p className="text-white h6 animate-text">
                                {solutionWhyDaList1Subtitle}
                            </p>
                        </div>

                        <div className="solution-train-card-2 solution-train-card site-radius-20 animate-card">
                            <h3 className="h4 text-white animate-title">{solutionWhyDaList2Title}</h3>
                            <p className="text-white h6 animate-text">
                                {solutionWhyDaList2Subtitle}
                            </p>
                        </div>

                        <div className="solution-train-card-3 solution-train-card site-radius-20 animate-card">
                            <h3 className="h4 text-white animate-title">{solutionWhyDaList3Title}</h3>
                            <p className="text-white h6 animate-text">
                                {solutionWhyDaList3Subtitle}
                            </p>
                        </div>

                        <div className="solution-train-card-4 solution-train-card site-radius-20 animate-card">
                            <h3 className="h4 text-white animate-title">{solutionWhyDaList4Title}</h3>
                            <p className="text-white h6 animate-text">
                                C{solutionWhyDaList4Subtitle}
                            </p>
                        </div>

                        <div className="solution-train-card-1 solution-train-card site-radius-20 animate-card">
                            <h3 className="h4 text-white animate-title">{solutionWhyDaList1Title}</h3>
                            <p className="text-white h6 animate-text">
                                {solutionWhyDaList1Subtitle}
                            </p>
                        </div>

                        <div className="solution-train-card-2 solution-train-card site-radius-20 animate-card">
                            <h3 className="h4 text-white animate-title">{solutionWhyDaList2Title}</h3>
                            <p className="text-white h6 animate-text">
                                {solutionWhyDaList2Subtitle}
                            </p>
                        </div>

                        <div className="solution-train-card-3 solution-train-card site-radius-20 animate-card">
                            <h3 className="h4 text-white animate-title">{solutionWhyDaList3Title}</h3>
                            <p className="text-white h6 animate-text">
                                {solutionWhyDaList3Subtitle}
                            </p>
                        </div>

                        <div className="solution-train-card-4 solution-train-card site-radius-20 animate-card">
                            <h3 className="h4 text-white animate-title">{solutionWhyDaList4Title}</h3>
                            <p className="text-white h6 animate-text">
                                C{solutionWhyDaList4Subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
