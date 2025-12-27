"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function USPs(){
    const [activeUsp, setActiveUsp] = useState(0);

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="stats-headings">
                        <h2>Key Features Drive Clinical Trials Impact</h2>

                        <p className="h6">Targeted modules interactive tools and full product suite integration deliver practical skills for clinical trials pros trainers and learners to excel on leading platforms.</p>
                    </div>

                    <div className="usp-lists">
                        <div className={`usp-list site-radius-20 ${activeUsp === 0 ? "active-usp" : ""}`} onClick={() => setActiveUsp(0)}>
                            <div className="">
                                <p className="h4 text-md vertical-text">Guided Trials Courses</p>

                                <p className="text-18">Gain insights from clinical trials veterans delivering real world expertise in every module. These courses offer practical clinical trials knowledge hands on practice and proven strategies beyond basics. Guided by industry leaders build confidence to master our product platforms and advance your career.</p>
                            </div>

                            <span className="h4 text-md list-num">1</span>

                            <Link href="/About" title="Discover Now" className="usp-link text-18">Discover Now</Link>
                        </div>

                        <div className={`usp-list site-radius-20 ${activeUsp === 1 ? "active-usp" : ""}`} onClick={() => setActiveUsp(1)}>
                            <div className="">
                                <p className="h4 text-md vertical-text">Personalized Learning</p>

                                <p className="text-18">Learn on your schedule with formats that fit working professionals trainers and beginners in clinical trials. Self paced modules live sessions and guided practice let you progress at your own speed while still building strong real world skills on leading platforms.</p>
                            </div>

                            <span className="h4 text-md list-num">2</span>

                            <Link href="/About" title="Discover Now" className="usp-link text-18">Discover Now</Link>
                        </div>

                        <div className={`usp-list site-radius-20 ${activeUsp === 2 ? "active-usp" : ""}`} onClick={() => setActiveUsp(2)}>
                            <div className="">
                                <p className="h4 text-md vertical-text">Validated Certification</p>

                                <p className="text-18">Secure credentials that employers value. DhatuAcademy awards recognized certificates upon course completion proving your clinical trials proficiency. Trusted across the field these boost your profile for career growth role transitions or freelance success in our product ecosystem.</p>
                            </div>

                            <span className="h4 text-md list-num">3</span>

                            <Link href="/About" title="Discover Now" className="usp-link text-18">Discover Now</Link>
                        </div>

                        <div className={`usp-list site-radius-20 ${activeUsp === 3 ? "active-usp" : ""}`} onClick={() => setActiveUsp(3)}>
                            <div className="">
                                <p className="h4 text-md vertical-text">Career Pathways</p>

                                <p className="text-18">DhatuAcademy training builds skills for clinical trials roles across our products. Explore opportunities on multiple platforms in the evolving clinical trials field. Gain proficiency to contribute effectively in diverse professional settings.</p>
                            </div>

                            <span className="h4 text-md list-num">4</span>

                            <Link href="/About" title="Discover Now" className="usp-link text-18">Discover Now</Link>
                        </div>

                        <div className={`usp-list site-radius-20 ${activeUsp === 4 ? "active-usp" : ""}`} onClick={() => setActiveUsp(4)}>
                            <div className="">
                                <p className="h4 text-md vertical-text">Tailored Clinical Trials</p>

                                <p className="text-18">Adapt learning to your unique needs and pace on DhatuAcademy. Customized routes match your experience goals and clinical trials focus across our products. Progress tracking and smart recommendations guide pros trainers and learners to key skills efficiently.</p>
                            </div>

                            <span className="h4 text-md list-num">5</span>

                            <Link href="/About" title="Discover Now" className="usp-link text-18">Discover Now</Link>
                        </div>

                        <div className={`usp-list site-radius-20 ${activeUsp === 5 ? "active-usp" : ""}`} onClick={() => setActiveUsp(5)}>
                            <div className="">
                                <p className="h4 text-md vertical-text">Real World Projects</p>
        
                                <p className="text-18">Put skills into action with hands on simulations mirroring clinical trials standards. Tackle authentic challenges across our product platforms. Build practical expertise through live scenarios for pros trainers and learners.</p>
                            </div>

                            <span className="h4 text-md list-num">6</span>

                            <Link href="/About" title="Discover Now" className="usp-link text-18">Discover Now</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}