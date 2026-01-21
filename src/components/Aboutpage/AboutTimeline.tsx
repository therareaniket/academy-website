"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

type TimelineProps = {
    lifecycleTitle: string;
    lifecycleSubtitle: string;
    lifecycleSteps: {
        step1Title: string;
        step1Subtitle: string;
        step2Title: string;
        step2Subtitle: string;
        step3Title: string;
        step3Subtitle: string;
        step4Title: string;
        step4Subtitle: string;
        step5Title: string;
        step5Subtitle: string;
        step6Title: string;
        step6Subtitle: string;
    }
}

export default function AboutTimeline( { lifecycleTitle, lifecycleSubtitle, lifecycleSteps } : TimelineProps ) {



    useEffect(() => {
        const currentIndexRef = { value: 0 }; // Use const since we mutate the object, not the reference
        let observer: IntersectionObserver | null = null;

        const initObserver = () => {
            // Select steps
            const leftSteps = document.querySelectorAll<HTMLElement>(".timeline-odd-steps .tl-step-wrapper");
            const rightSteps = document.querySelectorAll<HTMLElement>(".timeline-even-steps .tl-step-wrapper");

            // Merge steps
            const allSteps: HTMLElement[] = [];
            for (let i = 0; i < Math.max(leftSteps.length, rightSteps.length); i++) {
                if (leftSteps[i]) allSteps.push(leftSteps[i]);
                if (rightSteps[i]) allSteps.push(rightSteps[i]);
            }

            if (allSteps.length === 0) return; // No steps found

            observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && currentIndexRef.value < allSteps.length) {
                        const currentStep = allSteps[currentIndexRef.value];
                        if (currentStep) {
                            currentStep.classList.add("show");
                            currentIndexRef.value++;

                            if (currentIndexRef.value < allSteps.length && observer) {
                                observer.observe(allSteps[currentIndexRef.value]);
                            }
                        }
                    }
                },
                { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
            );

            observer.observe(allSteps[0]);
        };

        // Wait for DOM
        const timeoutId = setTimeout(initObserver, 100);

        return () => {
            clearTimeout(timeoutId);
            if (observer) observer.disconnect();
        };
    }, []);


    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="timeline-headings">
                        <h2>{lifecycleTitle}</h2>

                        <p className="h6 text-rg">{lifecycleSubtitle}</p>
                    </div>

                    <div className="timeline-steps-container">
                        <div className="timeline-odd-steps">
                            <div className="tl-step-wrapper left">
                                <div className="tl-step step-1 site-radius-20">
                                    <div className="step-count site-radius-40">
                                        <span className="h6 text-md vertical-text">Step 1</span>
                                    </div>

                                    <div className="step-details">
                                        <h3 className="h4 text-md">{lifecycleSteps.step1Title}</h3>

                                        <p className="text-18">{lifecycleSteps.step1Subtitle}</p>
                                    </div>

                                    <Image src="/images/aboutpage/timeline-arrow-right.svg" alt="timeline-arrow-right" width={471} height={75} priority={false} className="timeline-arrow-right"></Image>
                                </div>
                            </div>

                            <div className="tl-step-wrapper left">
                                <div className="tl-step step-3 site-radius-20">
                                    <div className="step-count site-radius-40">
                                        <span className="h6 text-md vertical-text">Step 3</span>
                                    </div>

                                    <div className="step-details">
                                        <h3 className="h4 text-md">{lifecycleSteps.step3Title}</h3>

                                        <p className="text-18">{lifecycleSteps.step3Subtitle}</p>
                                    </div>

                                    <Image src="/images/aboutpage/timeline-arrow-right.svg" alt="timeline-arrow-right" width={471} height={75} priority={false} className="timeline-arrow-right"></Image>
                                </div>
                            </div>

                            <div className="tl-step-wrapper left">
                                <div className="tl-step step-5 site-radius-20">
                                    <div className="step-count site-radius-40">
                                        <span className="h6 text-md vertical-text">Step 5</span>
                                    </div>

                                    <div className="step-details">
                                        <h3 className="h4 text-md">{lifecycleSteps.step5Title}</h3>

                                        <p className="text-18">{lifecycleSteps.step5Subtitle}</p>
                                    </div>

                                    <Image src="/images/aboutpage/timeline-arrow-right.svg" alt="timeline-arrow-right" width={471} height={75} priority={false} className="timeline-arrow-right"></Image>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-even-steps">
                            <div className="tl-step-wrapper right">
                                <div className="tl-step step-2 site-radius-20">
                                    <div className="step-count site-radius-40">
                                        <span className="h6 text-md vertical-text">Step 2</span>
                                    </div>

                                    <div className="step-details">
                                        <h3 className="h4 text-md">{lifecycleSteps.step2Title}</h3>

                                        <p className="text-18">{lifecycleSteps.step2Subtitle}</p>
                                    </div>

                                    <Image src="/images/aboutpage/timeline-arrow-left.svg" alt="timeline-arrow-left" width={471} height={75} priority={false} className="timeline-arrow-left"></Image>
                                </div>
                            </div>

                            <div className="tl-step-wrapper right">
                                <div className="tl-step step-4 site-radius-20">
                                    <div className="step-count site-radius-40">
                                        <span className="h6 text-md vertical-text">Step 4</span>
                                    </div>

                                    <div className="step-details">
                                        <h3 className="h4 text-md">{lifecycleSteps.step4Title}</h3>

                                        <p className="text-18">{lifecycleSteps.step4Subtitle}</p>
                                    </div>

                                    <Image src="/images/aboutpage/timeline-arrow-left.svg" alt="timeline-arrow-left" width={471} height={75} priority={false} className="timeline-arrow-left"></Image>
                                </div>
                            </div>

                            <div className="tl-step-wrapper right">
                                <div className="tl-step step-6 site-radius-20">
                                    <div className="step-count site-radius-40">
                                        <span className="h6 text-md vertical-text">Step 6</span>
                                    </div>

                                    <div className="step-details">
                                        <h3 className="h4 text-md">{lifecycleSteps.step6Title}</h3>

                                        <p className="text-18">{lifecycleSteps.step6Subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-steps-container mobile-timeline-steps">
                        <motion.div className="tl-step step-1 site-radius-20" initial={{ x: "-30px", opacity: 0 }} whileInView={{ x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6, ease: "easeOut" } }} viewport={{ once: true, amount: 0.7 }}>
                            <div className="step-count site-radius-40">
                                <span className="h6 text-md vertical-text">Step 1</span>
                            </div>

                            <div className="step-details">
                                <h3 className="h4 text-md">{lifecycleSteps.step1Title}</h3>

                                <p className="text-18">{lifecycleSteps.step1Subtitle}</p>
                            </div>

                            <Image src="/images/aboutpage/timeline-arrow-right.png" alt="timeline-arrow-right" width={471} height={75} priority={false} className="timeline-arrow-right"></Image>
                        </motion.div>

                        <motion.div className="tl-step step-2 site-radius-20" initial={{ x: "30px", opacity: 0 }} whileInView={{ x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6, ease: "easeOut" } }} viewport={{ once: true, amount: 0.7 }}>
                            <div className="step-count site-radius-40">
                                <span className="h6 text-md vertical-text">Step 2</span>
                            </div>

                            <div className="step-details">
                                <h3 className="h4 text-md">{lifecycleSteps.step2Title}</h3>

                                <p className="text-18">{lifecycleSteps.step2Subtitle}</p>
                            </div>

                            <Image src="/images/aboutpage/timeline-arrow-left.png" alt="timeline-arrow-left" width={471} height={75} priority={false} className="timeline-arrow-left"></Image>
                        </motion.div>

                        <motion.div className="tl-step step-3 site-radius-20" initial={{ x: "-30px", opacity: 0 }} whileInView={{ x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6, ease: "easeOut" } }} viewport={{ once: true, amount: 0.7 }}>
                            <div className="step-count site-radius-40">
                                <span className="h6 text-md vertical-text">Step 3</span>
                            </div>

                            <div className="step-details">
                                <h3 className="h4 text-md">{lifecycleSteps.step3Title}</h3>

                                <p className="text-18">{lifecycleSteps.step3Subtitle}</p>
                            </div>

                            <Image src="/images/aboutpage/timeline-arrow-right.png" alt="timeline-arrow-right" width={471} height={75} priority={false} className="timeline-arrow-right"></Image>
                        </motion.div>

                        <motion.div className="tl-step step-4 site-radius-20" initial={{ x: "30px", opacity: 0 }} whileInView={{ x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6, ease: "easeOut" } }} viewport={{ once: true, amount: 0.7 }}>
                            <div className="step-count site-radius-40">
                                <span className="h6 text-md vertical-text">Step 4</span>
                            </div>

                            <div className="step-details">
                                <h3 className="h4 text-md">{lifecycleSteps.step4Title}</h3>

                                <p className="text-18">{lifecycleSteps.step4Subtitle}</p>
                            </div>

                            <Image src="/images/aboutpage/timeline-arrow-left.png" alt="timeline-arrow-left" width={471} height={75} priority={false} className="timeline-arrow-left"></Image>
                        </motion.div>

                        <motion.div className="tl-step step-5 site-radius-20" initial={{ x: "-30px", opacity: 0 }} whileInView={{ x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6, ease: "easeOut" } }} viewport={{ once: true, amount: 0.7 }}>
                            <div className="step-count site-radius-40">
                                <span className="h6 text-md vertical-text">Step 5</span>
                            </div>

                            <div className="step-details">
                                <h3 className="h4 text-md">{lifecycleSteps.step5Title}</h3>

                                <p className="text-18">{lifecycleSteps.step5Subtitle}</p>
                            </div>

                            <Image src="/images/aboutpage/timeline-arrow-right.png" alt="timeline-arrow-right" width={471} height={75} priority={false} className="timeline-arrow-right"></Image>
                        </motion.div>

                        <motion.div className="tl-step step-6 site-radius-20" initial={{ x: "30px", opacity: 0 }} whileInView={{ x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6, ease: "easeOut" } }} viewport={{ once: true, amount: 0.7 }}>
                            <div className="step-count site-radius-40">
                                <span className="h6 text-md vertical-text">Step 6</span>
                            </div>

                            <div className="step-details">
                                <h3 className="h4 text-md">{lifecycleSteps.step6Title}</h3>

                                <p className="text-18">{lifecycleSteps.step6Subtitle}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}