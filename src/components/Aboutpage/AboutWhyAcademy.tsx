"use client"

import Image from "next/image";
import { useState } from "react";

export default function WhyChoose() {
    const [activeWhyUs, setActiveWhyUs] = useState(0);

    return (
        <>
            <section className="section" style={{ paddingTop: 0, }}>
                <div className="container">
                    <div className="why-academy-headings">
                        <h2>What Sets DhatuAcademy Apart?</h2>

                        <p className="h6 text-rg">Hands-on learning, industry-aligned skills, and access to top portals equip you for clinical success.</p>
                    </div>

                    <div className="why-us-lists">
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
            </section>
        </>
    );
}