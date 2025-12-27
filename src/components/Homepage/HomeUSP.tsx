"use client";

import Link from "next/link";

export default function USPs(){
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="stats-headings">
                        <h2>Key Features Drive Clinical Trials Impact</h2>

                        <p className="h6">Targeted modules interactive tools and full product suite integration deliver practical skills for clinical trials pros trainers and learners to excel on leading platforms.</p>
                    </div>

                    <div className="usp-lists">
                        <div className="usp-list site-radius-20 active-usp">
                            <div className="">
                                <p className="h4 text-md vertical-text">Real World Projects</p>
        
                                <p className="text-18">Put skills into action with hands on simulations mirroring clinical trials standards. Tackle authentic challenges across our product platforms. Build practical expertise through live scenarios for pros trainers and learners.</p>
                            </div>

                            <span className="h4 text-md list-num">6</span>

                            <Link href="/About" title="Discover Now" className="usp-link text-18">Discover Now</Link>
                        </div>

                        <div className="usp-list site-radius-20">
                            <p className="h4 text-md vertical-text">Pro Guided Trials Courses</p>

                            <span className="h4 text-md list-num">1</span>
                        </div>

                        <div className="usp-list site-radius-20">
                            <p className="h4 text-md vertical-text">Personalized Learning</p>

                            <span className="h4 text-md list-num">2</span>
                        </div>

                        <div className="usp-list site-radius-20">
                            <p className="h4 text-md vertical-text">Validated Certification</p>

                            <span className="h4 text-md list-num">3</span>
                        </div>

                        <div className="usp-list site-radius-20">
                            <p className="h4 text-md vertical-text">Career Pathways</p>

                            <span className="h4 text-md list-num">4</span>
                        </div>

                        <div className="usp-list site-radius-20">
                            <p className="h4 text-md vertical-text">Tailored Clinical Trials</p>

                            <span className="h4 text-md list-num">5</span>
                        </div>

                        
                    </div>
                </div>
            </section>
        </>
    );
}