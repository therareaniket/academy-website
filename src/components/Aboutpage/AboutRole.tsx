"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

export default function AboutRole() {
    const images = [
        "/images/aboutpage/CRA.webp",
        "/images/aboutpage/investigator.webp",
        "/images/aboutpage/site-efficiency-new.webp",
        "/images/aboutpage/sponsor-tools-new.webp",
        "/images/aboutpage/universal-access.webp",
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setActiveIndex((i) => (i + 1) % images.length);
        }, 2000);

        return () => clearInterval(id);
    }, [images.length]);

    return (
        <>
            <section className="section training-steps academy-roles">
                <div className="container">
                    <div className="steps-headings">
                        <h2>Tailored for Every Role</h2>

                        <p className="h6">DhatuAcademy provides role-specific training customized to clinical workflows, compliance requirements, and system operations—equipping every team member with vital skills precisely when needed.</p>
                    </div>

                    <div className="steps-listings">
                        <div className="step-img">
                            <Image src={images[activeIndex]} alt={`step-${activeIndex + 1}`} width={752} height={620} priority={false} className="site-radius-20" />
                        </div>

                        <div className="step-lists">
                            <div className={`step-list ${activeIndex === 0 ? "active-step" : ""}`}>
                                {/* <span className="h6">Step 1</span> */}

                                <h3 className="h4 text-md">CRA Training</h3>

                                <p className="text-18">Speedy onboarding, study-tailored content.</p>
                            </div>

                            <div className={`step-list ${activeIndex === 1 ? "active-step" : ""}`}>
                                {/* <span className="h6">Step 2</span> */}

                                <h3 className="h4 text-md">Investigator Focus</h3>

                                <p className="text-18">Compliance mastery, product deep dives.</p>
                            </div>

                            <div className={`step-list ${activeIndex === 2 ? "active-step" : ""}`}>
                                {/* <span className="h6">Step 3</span> */}

                                <h3 className="h4 text-md">Site Efficiency</h3>

                                <p className="text-18">SOP workflows, real-time skill checks.</p>
                            </div>

                            <div className={`step-list ${activeIndex === 3 ? "active-step" : ""}`}>
                                {/* <span className="h6">Step 3</span> */}

                                <h3 className="h4 text-md">Sponsor Tools</h3>

                                <p className="text-18">Bulk deployment, analytics dashboards.</p>
                            </div>

                            <div className={`step-list ${activeIndex === 4 ? "active-step" : ""}`}>
                                {/* <span className="h6">Step 3</span> */}

                                <h3 className="h4 text-md">Universal Access</h3>

                                <p className="text-18">Adaptive learning for all roles.</p>
                            </div>
                        </div>
                    </div>

                    <div className="steps-listings steps-listing-mobile">
                        <Accordion defaultValue="item-1" type="single" collapsible className="steps-mob-accord">
                            <AccordionItem value="item-1" className="steps-mob-item">
                                <AccordionTrigger className="steps-mob-trigger">
                                    <h3 className="h4 text-md">CRA Training</h3>
                                </AccordionTrigger>

                                <AccordionContent className="step-img">
                                    <p className="text-18 text-[gray]">Speedy onboarding, study-tailored content.</p>

                                    <Image src="/images/aboutpage/CRA.webp" alt="CRA" width={752} height={620} priority={false} className="site-radius-20" />
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="steps-mob-item">
                                <AccordionTrigger className="steps-mob-trigger">
                                    <h3 className="h4 text-md">Investigator Focus</h3>
                                </AccordionTrigger>

                                <AccordionContent className="step-img">
                                    <p className="text-18 text-[gray]">Compliance mastery, product deep dives.</p>

                                    <Image src="/images/aboutpage/investigator.webp" alt="investigator" width={752} height={620} priority={false} className="site-radius-20" />
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="steps-mob-item">
                                <AccordionTrigger className="steps-mob-trigger">
                                    <h3 className="h4 text-md">Site Efficiency</h3>
                                </AccordionTrigger>

                                <AccordionContent className="step-img">
                                    <p className="text-18 text-[gray]">SOP workflows, real-time skill checks.</p>

                                    <Image src="/images/aboutpage/site-efficiency.webp" alt="site-efficiency" width={752} height={620} priority={false} className="site-radius-20" />
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="steps-mob-item">
                                <AccordionTrigger className="steps-mob-trigger">
                                    <h3 className="h4 text-md">Sponsor Tools</h3>
                                </AccordionTrigger>

                                <AccordionContent className="step-img">
                                    <p className="text-18 text-[gray]">Bulk deployment, analytics dashboards.</p>

                                    <Image src="/images/aboutpage/sponsor-tools.webp" alt="sponsor-tools" width={752} height={620} priority={false} className="site-radius-20" />
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5" className="steps-mob-item">
                                <AccordionTrigger className="steps-mob-trigger">
                                    <h3 className="h4 text-md">Universal Access</h3>
                                </AccordionTrigger>

                                <AccordionContent className="step-img">
                                    <p className="text-18 text-[gray]">Adaptive learning for all roles.</p>

                                    <Image src="/images/aboutpage/universal-access.webp" alt="site-efficiency" width={752} height={620} priority={false} className="site-radius-20" />
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    );
}