"use client"

import { motion, useScroll } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function WhyChoose() {
    const sectionRef = useRef(null);
    const [activeWhyUs, setActiveWhyUs] = useState(0);

    const homeStatsAnimations = {
        title_ltr_initial: { x: "-50px", opacity: 0, },
        title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, } },

        subTitle_ltr_initial: { x: "50px", opacity: 0, },
        subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1.5, } },
    };

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    useEffect(() => {
        return scrollYProgress.on("change", (v) => {
            if (v < 0.25) setActiveWhyUs(0);
            else if (v < 0.5) setActiveWhyUs(1);
            else if (v < 0.75) setActiveWhyUs(2);
            else setActiveWhyUs(3);
        });
    }, [scrollYProgress]);
    return (
        <>
            <section className="section why-academy-section" style={{ paddingTop: 0, }}>
                <div className="container">
                    <div className="why-academy-headings">
                        <motion.h2 initial={homeStatsAnimations.title_ltr_initial} whileInView={homeStatsAnimations.title_ltr_animate} viewport={{ once: true, amount: 0.8 }}>What Sets DhatuAcademy Apart?</motion.h2>

                        <motion.p initial={homeStatsAnimations.subTitle_ltr_initial} whileInView={homeStatsAnimations.subTitle_ltr_animate} className="h6" viewport={{ once: true, amount: 0.8 }}>Hands-on learning, industry-aligned skills, and access to top portals equip you for clinical success.</motion.p>
                    </div>

                    <div ref={sectionRef} className="why-us-scroll-space">
                        <div className="why-us-lists" >
                            <div className={`why-us-list-item why-list-1 site-radius-20 ${activeWhyUs === 0 ? "active-why-us-list" : ""}`} onClick={() => setActiveWhyUs(0)}>
                                <span className="h1 text-sb">01</span>

                                <div className="item-list-details">
                                    <Image src="/images/aboutpage/hands-on-traing.svg" alt="hands-on-traing" width={34} height={34} priority={false}></Image>

                                    <p className="h4 text-md">Hands-On Practical Training</p>

                                    <p className="text-18 ">Real-world simulations using Dhatu products for skill mastery. Build confidence through interactive clinical scenarios.</p>
                                </div>
                            </div>

                            <div className={`why-us-list-item why-list-2 site-radius-20 ${activeWhyUs === 1 ? "active-why-us-list" : ""}`} onClick={() => setActiveWhyUs(1)}>
                                <span className="h1 text-sb">02</span>

                                <div className="item-list-details">
                                    <Image src="/images/aboutpage/expert-led-modules.svg" alt="expert-led-modules" width={40} height={20} priority={false}></Image>

                                    <p className="h4 text-md">Expert-Led Modules</p>

                                    <p className="text-18 ">Courses crafted by industry veterans aligned with global standards. Stay ahead with cutting-edge protocols and best practices.</p>
                                </div>
                            </div>

                            <div className={`why-us-list-item why-list-3 site-radius-20 ${activeWhyUs === 2 ? "active-why-us-list" : ""}`} onClick={() => setActiveWhyUs(2)}>
                                <span className="h1 text-sb">03</span>

                                <div className="item-list-details">
                                    <Image src="/images/aboutpage/real-world-projects.svg" alt="real-world-projects" width={37} height={27} priority={false}></Image>

                                    <p className="h4 text-md">Real-World Projects</p>

                                    <p className="text-18 ">Access to leading portals for live, impactful clinical experience. Apply skills directly to drive meaningful research outcomes.</p>
                                </div>
                            </div>

                            <div className={`why-us-list-item why-list-4 site-radius-20 ${activeWhyUs === 3 ? "active-why-us-list" : ""}`} onClick={() => setActiveWhyUs(3)}>
                                <span className="h1 text-sb">04</span>

                                <div className="item-list-details">
                                    <Image src="/images/aboutpage/career-support.svg" alt="career-support" width={27} height={35} priority={false}></Image>

                                    <p className="h4 text-md">Career Support</p>

                                    <p className="text-18 ">Personalized guidance, certifications, and job placement assistance. Launch your career with proven credentials and connections.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}