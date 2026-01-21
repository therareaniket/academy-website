"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

type AboutRoleProps = {
    roleTitle: string;
    roleSubtitle: string;
    aboutRolesList: {
        roleList1Title: string;
        roleList2Title: string;
        roleList3Title: string;
        roleList4Title: string;
        roleList5Title: string;
        roleList1Subtitle: string;
        roleList2Subtitle: string;
        roleList3Subtitle: string;
        roleList4Subtitle: string;
        roleList5Subtitle: string;
    };
}

export default function AboutRole( {roleTitle, roleSubtitle, aboutRolesList} : AboutRoleProps ) {
    const images = [
        "/images/aboutpage/cra-training.webp",
        "/images/aboutpage/investigator-focus.webp",
        "/images/aboutpage/site-efficiency-new.webp",
        "/images/aboutpage/sponsor-tools-new.webp",
        "/images/aboutpage/universal-access-updated.webp",
    ];

    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         setActiveIndex((i) => (i + 1) % images.length);
    //     }, 2000);

    //     return () => clearInterval(id);
    // }, [images.length]);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
            const onScroll = () => {
            const sectionTop = section.offsetTop;
            const scrollY = window.scrollY;
            const progress = scrollY - sectionTop;

            if (progress >= 0) {
                const step = Math.floor(progress / 200);
                setActiveIndex(Math.min(Math.max(step, 0), 4));
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    const homeStatsAnimations = (typeof window !== "undefined" && window.innerWidth >= 1200) ? {
        title_ltr_initial: { x: "0px", opacity: 1, },
        title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 0.5, duration: 0.6 } },

        subTitle_ltr_initial: { x: "0px", opacity: 1, },
        subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6 } },
    }:{

        title_ltr_initial: { x: "-50px", opacity: 0, },
        title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 0.5, duration: 0.6 } },

        subTitle_ltr_initial: { x: "-50px", opacity: 0, },
        subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6 } },  
    };

    return (
        <>
            <section className="section training-steps academy-roles" ref={sectionRef}>
                <div className="container sticky-wrapper">
                    <div className="steps-headings ">
                        <motion.h2 initial={homeStatsAnimations.title_ltr_initial} whileInView={homeStatsAnimations.title_ltr_animate} viewport={{ once: true, amount: 0.8 }}>{roleTitle}</motion.h2>

                        <motion.p initial={homeStatsAnimations.subTitle_ltr_initial} whileInView={homeStatsAnimations.subTitle_ltr_animate} className="h6" viewport={{ once: true, amount: 0.8 }}>{roleSubtitle}</motion.p>
                    </div>

                    <div className="steps-listings">
                        <div className="step-img">
                            <Image src={images[activeIndex]} alt={`step-${activeIndex + 1}`} width={752} height={620} priority={false} className="site-radius-20" />
                        </div>

                        <div className="step-lists">
                            <div className={`step-list ${activeIndex === 0 ? "active-step" : ""}`}>
                                {/* <span className="h6">Step 1</span> */}

                                <h3 className="h4 text-md">{aboutRolesList.roleList1Title}</h3>

                                <p className="text-18">{aboutRolesList.roleList1Subtitle}</p>
                            </div>

                            <div className={`step-list ${activeIndex === 1 ? "active-step" : ""}`}>
                                {/* <span className="h6">Step 2</span> */}

                                <h3 className="h4 text-md">{aboutRolesList.roleList2Title}</h3>

                                <p className="text-18">{aboutRolesList.roleList2Subtitle}</p>
                            </div>

                            <div className={`step-list ${activeIndex === 2 ? "active-step" : ""}`}>
                                {/* <span className="h6">Step 3</span> */}

                                <h3 className="h4 text-md">{aboutRolesList.roleList3Title}</h3>

                                <p className="text-18">{aboutRolesList.roleList3Subtitle}</p>
                            </div>

                            <div className={`step-list ${activeIndex === 3 ? "active-step" : ""}`}>
                                {/* <span className="h6">Step 3</span> */}

                                <h3 className="h4 text-md">{aboutRolesList.roleList4Title}</h3>

                                <p className="text-18">{aboutRolesList.roleList4Subtitle}</p>
                            </div>

                            <div className={`step-list ${activeIndex === 4 ? "active-step" : ""}`}>
                                {/* <span className="h6">Step 3</span> */}

                                <h3 className="h4 text-md">{aboutRolesList.roleList5Title}</h3>

                                <p className="text-18">{aboutRolesList.roleList5Subtitle}</p>
                            </div>
                        </div>
                    </div>

                    <div className="steps-listings steps-listing-mobile">
                        <Accordion defaultValue="item-1" type="single" collapsible className="steps-mob-accord">
                            <AccordionItem value="item-1" className="steps-mob-item">
                                <AccordionTrigger className="steps-mob-trigger">
                                    <h3 className="h4 text-md">{aboutRolesList.roleList1Title}</h3>
                                </AccordionTrigger>

                                <AccordionContent className="step-img">
                                    <p className="text-18 text-[gray]">{aboutRolesList.roleList1Subtitle}</p>

                                    <Image src="/images/aboutpage/cra-training.webp" alt="CRA" width={752} height={620} priority={false} className="site-radius-20" />
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="steps-mob-item">
                                <AccordionTrigger className="steps-mob-trigger">
                                    <h3 className="h4 text-md">{aboutRolesList.roleList2Title}</h3>
                                </AccordionTrigger>

                                <AccordionContent className="step-img">
                                    <p className="text-18 text-[gray]">{aboutRolesList.roleList2Subtitle}</p>

                                    <Image src="/images/aboutpage/investigator-focus.webp" alt="investigator" width={752} height={620} priority={false} className="site-radius-20" />
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="steps-mob-item">
                                <AccordionTrigger className="steps-mob-trigger">
                                    <h3 className="h4 text-md">{aboutRolesList.roleList3Title}</h3>
                                </AccordionTrigger>

                                <AccordionContent className="step-img">
                                    <p className="text-18 text-[gray]">{aboutRolesList.roleList3Subtitle}</p>

                                    <Image src="/images/aboutpage/site-efficiency-new.webp" alt="site-efficiency" width={752} height={620} priority={false} className="site-radius-20" />
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="steps-mob-item">
                                <AccordionTrigger className="steps-mob-trigger">
                                    <h3 className="h4 text-md">{aboutRolesList.roleList4Title}</h3>
                                </AccordionTrigger>

                                <AccordionContent className="step-img">
                                    <p className="text-18 text-[gray]">{aboutRolesList.roleList4Subtitle}</p>

                                    <Image src="/images/aboutpage/sponsor-tools-new.webp" alt="sponsor-tools" width={752} height={620} priority={false} className="site-radius-20" />
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5" className="steps-mob-item">
                                <AccordionTrigger className="steps-mob-trigger">
                                    <h3 className="h4 text-md">{aboutRolesList.roleList5Title}</h3>
                                </AccordionTrigger>

                                <AccordionContent className="step-img">
                                    <p className="text-18 text-[gray]">{aboutRolesList.roleList5Subtitle}</p>

                                    <Image src="/images/aboutpage/universal-access-updated.webp" alt="site-efficiency" width={752} height={620} priority={false} className="site-radius-20" />
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    );
}