"use client"

import { motion, useScroll } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type WhyChooseProps = {
    whatSetDhatuacademyTitle: string;
    whatSetDhatuacademySubtitle: string;
    whatSetDaList: {
        item1Title: string;
        item2Title: string;
        item3Title: string;
        item4Title: string;
        item1Subtitle: string;
        item2Subtitle: string;
        item3Subtitle: string;
        item4Subtitle: string;
    };
}

export default function WhyChoose( { whatSetDhatuacademyTitle, whatSetDhatuacademySubtitle, whatSetDaList } : WhyChooseProps) {
    const sectionRef = useRef(null);
    const [activeWhyUs, setActiveWhyUs] = useState(0);

    const homeStatsAnimations = (typeof window !== "undefined" && window.innerWidth >= 1200) ? {
        title_ltr_initial: { x: "0px", opacity: 1, },
        title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 0.5, duration: 0.6 } },

        subTitle_ltr_initial: { x: "0px", opacity: 1, },
        subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6 } },
    } : {

        title_ltr_initial: { x: "-50px", opacity: 0, },
        title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 0.5, duration: 0.6 } },

        subTitle_ltr_initial: { x: "-50px", opacity: 0, },
        subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6 } },   

    };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"], // smoother progress
  });

  // Update active card based on scroll progress
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const index = Math.min(3, Math.floor(v * 4)); // divide progress evenly for 4 cards
      setActiveWhyUs(index);
    });
  }, [scrollYProgress]);

    
    return (
        <>
            <section className="section why-academy-section" style={{ paddingTop: 0, }}>
                <div className="container">
                    <div className="why-academy-headings">
                        <motion.h2 initial={homeStatsAnimations.title_ltr_initial} whileInView={homeStatsAnimations.title_ltr_animate} viewport={{ once: true, amount: 0.8 }}>{whatSetDhatuacademyTitle}</motion.h2>

                        <motion.p initial={homeStatsAnimations.subTitle_ltr_initial} whileInView={homeStatsAnimations.subTitle_ltr_animate} className="h6" viewport={{ once: true, amount: 0.8 }}>{whatSetDhatuacademySubtitle}</motion.p>
                    </div>

                    <div ref={sectionRef} className="why-us-scroll-space">
                        <div className="why-us-lists" >
                            <div className={`why-us-list-item why-list-1 site-radius-20 ${activeWhyUs === 0 ? "active-why-us-list" : ""}`} onClick={() => setActiveWhyUs(0)}>
                                <span className="h1 text-sb">01</span>

                                <div className="item-list-details">
                                    <Image src="/images/aboutpage/hands-on-traing.svg" alt="hands-on-traing" width={34} height={34} priority={false}></Image>

                                    <p className="h4 text-md">{whatSetDaList.item1Title}</p>

                                    <p className="text-18 ">{whatSetDaList.item1Subtitle}</p>
                                </div>
                            </div>

                            <div className={`why-us-list-item why-list-2 site-radius-20 ${activeWhyUs === 1 ? "active-why-us-list" : ""}`} onClick={() => setActiveWhyUs(1)}>
                                <span className="h1 text-sb">02</span>

                                <div className="item-list-details">
                                    <Image src="/images/aboutpage/expert-led-modules.svg" alt="expert-led-modules" width={40} height={20} priority={false}></Image>

                                    <p className="h4 text-md">{whatSetDaList.item2Title}</p>

                                    <p className="text-18 ">{whatSetDaList.item2Subtitle}</p>
                                </div>
                            </div>

                            <div className={`why-us-list-item why-list-3 site-radius-20 ${activeWhyUs === 2 ? "active-why-us-list" : ""}`} onClick={() => setActiveWhyUs(2)}>
                                <span className="h1 text-sb">03</span>

                                <div className="item-list-details">
                                    <Image src="/images/aboutpage/real-world-projects.svg" alt="real-world-projects" width={37} height={27} priority={false}></Image>

                                    <p className="h4 text-md">{whatSetDaList.item3Title}</p>

                                    <p className="text-18 ">{whatSetDaList.item3Subtitle}</p>
                                </div>
                            </div>

                            <div className={`why-us-list-item why-list-4 site-radius-20 ${activeWhyUs === 3 ? "active-why-us-list" : ""}`} onClick={() => setActiveWhyUs(3)}>
                                <span className="h1 text-sb">04</span>

                                <div className="item-list-details">
                                    <Image src="/images/aboutpage/career-support.svg" alt="career-support" width={27} height={35} priority={false}></Image>

                                    <p className="h4 text-md">{whatSetDaList.item4Title}</p>

                                    <p className="text-18 ">{whatSetDaList.item4Subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}