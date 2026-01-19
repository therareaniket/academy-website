"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SoluTrainAcademy() {
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
        title_ltr_initial: { x: "-50px", opacity: 0, },
        title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6 } },

        subTitle_ltr_initial: { x: "50px", opacity: 0, },
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
        if (!cardsActive) return; // ⛔ wait for heading animation

        const cards = document.querySelectorAll(".animate-card");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target); // animate only once
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
                            Why Train on DhatuAcademy?
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
                            Dhatu Academy delivers customized, hands-on training beyond just Dhatu products covering any clinical workflows, SOPs, and trial platforms with expert guidance
                        </motion.p>
                    </div>
                </div>

                {/* CARDS */}
                <div className="solution-train-card-wrapper">
                    <div className="solution-train-card-1 solution-train-card site-radius-20 animate-card">
                        <h3 className="h4 text-white animate-title">Customized Learning Paths</h3>
                        <p className="text-white h5 animate-text">
                            Tailored training for Dhatu products plus any clinical workflows or platforms.
                        </p>
                    </div>

                    <div className="solution-train-card-2 solution-train-card site-radius-20 animate-card">
                        <h3 className="h4 text-white animate-title">Hands-On Simulations</h3>
                        <p className="text-white h5 animate-text">
                            Real-world practice without live data risks in secure sandbox environments.
                        </p>
                    </div>

                    <div className="solution-train-card-3 solution-train-card site-radius-20 animate-card">
                        <h3 className="h4 text-white animate-title">Expert SOP Alignment</h3>
                        <p className="text-white h5 animate-text">
                            GxP-compliant modules ensure regulatory readiness across all roles.
                        </p>
                    </div>

                    <div className="solution-train-card-4 solution-train-card site-radius-20 animate-card">
                        <h3 className="h4 text-white animate-title">Proven Results Tracking</h3>
                        <p className="text-white h5 animate-text">
                            Completion certificates, badges, and analytics for audit-proof compliance.
                        </p>
                    </div>
                </div>

                <div className="solution-train-mobile">
                    <div className="solution-train-row">
                        <div className="solution-train-card-1 solution-train-card site-radius-20 animate-card">
                            <h3 className="h4 text-white animate-title">Customized Learning Paths</h3>
                            <p className="text-white h5 animate-text">
                                Tailored training for Dhatu products plus any clinical workflows or platforms.
                            </p>
                        </div>

                        <div className="solution-train-card-2 solution-train-card site-radius-20 animate-card">
                            <h3 className="h4 text-white animate-title">Hands-On Simulations</h3>
                            <p className="text-white h5 animate-text">
                                Real-world practice without live data risks in secure sandbox environments.
                            </p>
                        </div>

                        <div className="solution-train-card-3 solution-train-card site-radius-20 animate-card">
                            <h3 className="h4 text-white animate-title">Expert SOP Alignment</h3>
                            <p className="text-white h5 animate-text">
                                GxP-compliant modules ensure regulatory readiness across all roles.
                            </p>
                        </div>

                        <div className="solution-train-card-4 solution-train-card site-radius-20 animate-card">
                            <h3 className="h4 text-white animate-title">Proven Results Tracking</h3>
                            <p className="text-white h5 animate-text">
                                Completion certificates, badges, and analytics for audit-proof compliance.
                            </p>
                        </div>

                        <div className="solution-train-card-1 solution-train-card site-radius-20 animate-card">
                            <h3 className="h4 text-white animate-title">Customized Learning Paths</h3>
                            <p className="text-white h5 animate-text">
                                Tailored training for Dhatu products plus any clinical workflows or platforms.
                            </p>
                        </div>

                        <div className="solution-train-card-2 solution-train-card site-radius-20 animate-card">
                            <h3 className="h4 text-white animate-title">Hands-On Simulations</h3>
                            <p className="text-white h5 animate-text">
                                Real-world practice without live data risks in secure sandbox environments.
                            </p>
                        </div>

                        <div className="solution-train-card-3 solution-train-card site-radius-20 animate-card">
                            <h3 className="h4 text-white animate-title">Expert SOP Alignment</h3>
                            <p className="text-white h5 animate-text">
                                GxP-compliant modules ensure regulatory readiness across all roles.
                            </p>
                        </div>

                        <div className="solution-train-card-4 solution-train-card site-radius-20 animate-card">
                            <h3 className="h4 text-white animate-title">Proven Results Tracking</h3>
                            <p className="text-white h5 animate-text">
                                Completion certificates, badges, and analytics for audit-proof compliance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
