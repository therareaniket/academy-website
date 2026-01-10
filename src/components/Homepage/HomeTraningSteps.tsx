"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function HomeTraningSteps() {
    const images = [
        "/images/homepage/step-1-enroll.webp",
        "/images/homepage/step-2-experience.webp",
        "/images/homepage/step-3-complt-training.webp",
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
                setActiveIndex(Math.min(Math.max(step, 0), 2));
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    
	const homeStepsAnimations = {
		title_ltr_initial: { x: "-50px", opacity: 0, },
		title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 1 }},

		subTitle_ltr_initial: { x: "50px", opacity: 0, },
		subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 2, duration: 1 }},
	}

    return (
        <>
            <section className="section training-steps" ref={sectionRef}>
                <div className="container sticky-wrapper">
                    {/* <div className=""> */}
                        <div className="steps-headings">
                            <motion.h2 initial={homeStepsAnimations.title_ltr_initial} whileInView={homeStepsAnimations.title_ltr_animate} viewport={{ once: true, amount: 0.8 }}>Launch Clinical Trials Mastery Here Convert Skills to Careers</motion.h2>

                            <motion.p className="h6" initial={homeStepsAnimations.subTitle_ltr_initial} whileInView={homeStepsAnimations.subTitle_ltr_animate} viewport={{ once: true, amount: 0.8 }}>Follow these simple steps to master all our clinical trials products on DhatuAcademy. Existing subscribers enjoy complimentary core access. Upgrade to premium AI for complete platform proficiency.</motion.p>
                        </div>

                        <div className="steps-listings">
                            <div className="step-img">
                                <Image src={images[activeIndex]} alt={`step-${activeIndex + 1}`} width={752} height={620} priority={false} className="site-radius-20" />
                            </div>

                            <div className="step-lists">
                                <div className={`step-list ${activeIndex === 0 ? "active-step" : ""}`}>
                                    <span className="h6">Step 1</span>

                                    <h3 className="h4 text-md">Enroll in Clinical Trials Courses</h3>

                                    <p className="text-18">Select expert crafted modules across our clinical trials products and begin your learning journey today.</p>
                                </div>

                                <div className={`step-list ${activeIndex === 1 ? "active-step" : ""}`}>
                                    <span className="h6">Step 2</span>

                                    <h3 className="h4 text-md">Hands On Clinical Trials Practice</h3>

                                    <p className="text-18">Build real world skills via interactive simulations and projects tailored for clinical trials platforms.</p>
                                </div>

                                <div className={`step-list ${activeIndex === 2 ? "active-step" : ""}`}>
                                    <span className="h6">Step 3</span>

                                    <h3 className="h4 text-md">Earn Your Mastery Certificate</h3>

                                    <p className="text-18">Complete training to receive expert validated certification boosting your clinical trials career profile.</p>
                                </div>
                            </div>
                        </div>

                        <div className="steps-listings steps-listing-mobile">
                            <Accordion defaultValue="item-1" type="single" collapsible className="steps-mob-accord">
                                <AccordionItem value="item-1" className="steps-mob-item">
                                    <AccordionTrigger className="steps-mob-trigger">
                                        <h3 className="h4 text-md"><span className="h6 block text-rg text-[gray]">Step 1</span>Enroll in Clinical Trials Courses</h3>
                                    </AccordionTrigger>

                                    <AccordionContent className="step-img">
                                        <p className="text-18 text-[gray]">Select expert crafted modules across our clinical trials products and begin your learning journey today.</p>

                                        <Image src="/images/homepage/step-1-enroll.webp" alt="enroll" width={752} height={620} priority={false} className="site-radius-20" />
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2" className="steps-mob-item">
                                    <AccordionTrigger className="steps-mob-trigger">
                                        <h3 className="h4 text-md"><span className="h6 block text-rg text-[gray]">Step 2</span>Hands On Clinical Trials Practice</h3>
                                    </AccordionTrigger>

                                    <AccordionContent className="step-img">
                                        <p className="text-18 text-[gray]">Build real world skills via interactive simulations and projects tailored for clinical trials platforms.</p>

                                        <Image src="/images/homepage/step-2-experience.webp" alt="experience" width={752} height={620} priority={false} className="site-radius-20" />
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3" className="steps-mob-item">
                                    <AccordionTrigger className="steps-mob-trigger">
                                        <h3 className="h4 text-md"><span className="h6 block text-rg text-[gray]">Step 3</span>Earn Your Mastery Certificate</h3>
                                    </AccordionTrigger>

                                    <AccordionContent className="step-img">
                                        <p className="text-18 text-[gray]">Complete training to receive expert validated certification boosting your clinical trials career profile.</p>

                                        <Image src="/images/homepage/step-3-complt-training.webp" alt="complt-training" width={752} height={620} priority={false} className="site-radius-20" />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    {/* </div> */}
                </div>
            </section>
        </>
    );
}