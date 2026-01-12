"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function AboutTimeline() {

    useEffect(() => {
        const heading = document.querySelector(".timeline-headings");

        if (!heading) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(heading);

        return () => observer.unobserve(heading);
    }, []);

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
                { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
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
                        <h2>Training Lifecycle </h2>

                        <p className="h6 text-rg">Structured pathway aligned with Dhatu products and global compliance standards.</p>
                    </div>

                    <div className="timeline-steps-container">
                        <div className="timeline-odd-steps">
                            <div className="tl-step-wrapper left">
                                <div className="tl-step step-1 site-radius-20">
                                    <div className="step-count site-radius-40">
                                        <span className="h6 text-md vertical-text">1st Step</span>
                                    </div>

                                    <div className="step-details">
                                        <h3 className="h4 text-md">Assess</h3>

                                        <p className="text-18">Evaluate role-specific skills and compliance gaps.</p>
                                    </div>

                                    <Image src="/images/aboutpage/timeline-arrow-right.svg" alt="timeline-arrow-right" width={471} height={75} priority={false} className="timeline-arrow-right"></Image>
                                </div>
                            </div>

                            <div className="tl-step-wrapper left">
                                <div className="tl-step step-3 site-radius-20">
                                    <div className="step-count site-radius-40">
                                        <span className="h6 text-md vertical-text">3rd Step</span>
                                    </div>

                                    <div className="step-details">
                                        <h3 className="h4 text-md">Deliver</h3>

                                        <p className="text-18">Provide interactive modules and hands-on simulations.</p>
                                    </div>

                                    <Image src="/images/aboutpage/timeline-arrow-right.svg" alt="timeline-arrow-right" width={471} height={75} priority={false} className="timeline-arrow-right"></Image>
                                </div>
                            </div>

                            <div className="tl-step-wrapper left">
                                <div className="tl-step step-5 site-radius-20">
                                    <div className="step-count site-radius-40">
                                        <span className="h6 text-md vertical-text">5th Step</span>
                                    </div>

                                    <div className="step-details">
                                        <h3 className="h4 text-md">Track</h3>

                                        <p className="text-18">Monitor progress with real-time dashboards and analytics.</p>
                                    </div>

                                    <Image src="/images/aboutpage/timeline-arrow-right.svg" alt="timeline-arrow-right" width={471} height={75} priority={false} className="timeline-arrow-right"></Image>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-even-steps">

                            <div className="tl-step-wrapper right">
                                <div className="tl-step step-2 site-radius-20">
                                    <div className="step-count site-radius-40">
                                        <span className="h6 text-md vertical-text">2nd Step</span>
                                    </div>

                                    <div className="step-details">
                                        <h3 className="h4 text-md">Plan</h3>

                                        <p className="text-18">Design personalized learning paths aligned with Dhatu workflows.</p>
                                    </div>

                                    <Image src="/images/aboutpage/timeline-arrow-left.svg" alt="timeline-arrow-left" width={471} height={75} priority={false} className="timeline-arrow-left"></Image>
                                </div>
                            </div>

                            <div className="tl-step-wrapper right">
                                <div className="tl-step step-4 site-radius-20">
                                    <div className="step-count site-radius-40">
                                        <span className="h6 text-md vertical-text">4th Step</span>
                                    </div>

                                    <div className="step-details">
                                        <h3 className="h4 text-md">Practice</h3>

                                        <p className="text-18">Apply knowledge through real-world portal projects.</p>
                                    </div>

                                    <Image src="/images/aboutpage/timeline-arrow-left.svg" alt="timeline-arrow-left" width={471} height={75} priority={false} className="timeline-arrow-left"></Image>
                                </div>
                            </div>

                            <div className="tl-step-wrapper right">
                                <div className="tl-step step-6 site-radius-20">
                                    <div className="step-count site-radius-40">
                                        <span className="h6 text-md vertical-text">6th Step</span>
                                    </div>

                                    <div className="step-details">
                                        <h3 className="h4 text-md">Certify</h3>

                                        <p className="text-18">Issue credentials for regulatory confidence and career growth.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-steps-container mobile-timeline-steps">
                        <div className="tl-step step-1 site-radius-20">
                            <div className="step-count site-radius-40">
                                <span className="h6 text-md vertical-text">1st Step</span>
                            </div>

                            <div className="step-details">
                                <h3 className="h4 text-md">Assess</h3>

                                <p className="text-18">Evaluate role-specific skills and compliance gaps.</p>
                            </div>

                            <Image src="/images/aboutpage/timeline-arrow-right.png" alt="timeline-arrow-right" width={471} height={75} priority={false} className="timeline-arrow-right"></Image>
                        </div>

                        <div className="tl-step step-2 site-radius-20">
                            <div className="step-count site-radius-40">
                                <span className="h6 text-md vertical-text">2nd Step</span>
                            </div>

                            <div className="step-details">
                                <h3 className="h4 text-md">Plan</h3>

                                <p className="text-18">Design personalized learning paths aligned with Dhatu workflows.</p>
                            </div>

                            <Image src="/images/aboutpage/timeline-arrow-left.png" alt="timeline-arrow-left" width={471} height={75} priority={false} className="timeline-arrow-left"></Image>
                        </div>

                        <div className="tl-step step-3 site-radius-20">
                            <div className="step-count site-radius-40">
                                <span className="h6 text-md vertical-text">3rd Step</span>
                            </div>

                            <div className="step-details">
                                <h3 className="h4 text-md">Deliver</h3>

                                <p className="text-18">Provide interactive modules and hands-on simulations.</p>
                            </div>

                            <Image src="/images/aboutpage/timeline-arrow-right.png" alt="timeline-arrow-right" width={471} height={75} priority={false} className="timeline-arrow-right"></Image>
                        </div>

                        <div className="tl-step step-4 site-radius-20">
                            <div className="step-count site-radius-40">
                                <span className="h6 text-md vertical-text">4th Step</span>
                            </div>

                            <div className="step-details">
                                <h3 className="h4 text-md">Practice</h3>

                                <p className="text-18">Apply knowledge through real-world portal projects.</p>
                            </div>

                            <Image src="/images/aboutpage/timeline-arrow-left.png" alt="timeline-arrow-left" width={471} height={75} priority={false} className="timeline-arrow-left"></Image>
                        </div>

                        <div className="tl-step step-5 site-radius-20">
                            <div className="step-count site-radius-40">
                                <span className="h6 text-md vertical-text">5th Step</span>
                            </div>

                            <div className="step-details">
                                <h3 className="h4 text-md">Track</h3>

                                <p className="text-18">Monitor progress with real-time dashboards and analytics.</p>
                            </div>

                            <Image src="/images/aboutpage/timeline-arrow-right.png" alt="timeline-arrow-right" width={471} height={75} priority={false} className="timeline-arrow-right"></Image>
                        </div>

                        <div className="tl-step step-6 site-radius-20">
                            <div className="step-count site-radius-40">
                                <span className="h6 text-md vertical-text">6th Step</span>
                            </div>

                            <div className="step-details">
                                <h3 className="h4 text-md">Certify</h3>

                                <p className="text-18">Issue credentials for regulatory confidence and career growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}