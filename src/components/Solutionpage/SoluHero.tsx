"use client"

import Image from "next/image";

export default function SolutionHero() {
    return (
        <>
            <section className="section solutions-hero">
                <Image src="/images/general/site-hero-cube.svg" alt="site-hero-cube" width={733} height={574} className="inner-hero-cube"></Image>
                
                <div className="container">
                    <div className="hero-content">
                        <h1>Explore Dhatu Products with Expert Training</h1>
                    </div>
                </div>

                <Image src="/images/solutionpage/hero-elements/solu-hero-chart.svg" alt="solu-hero-chart" width={97} height={80} className="solu-hero-1"></Image>
                
                <Image src="/images/solutionpage/hero-elements/solu-hero-profile.png" alt="solu-hero-profile" width={140} height={88} className="solu-hero-2"></Image>
                
                <Image src="/images/solutionpage/hero-elements/solu-hero-scope.png" alt="solu-hero-scope" width={140} height={88} className="solu-hero-3"></Image>

                <Image src="/images/solutionpage/hero-elements/solu-hero-glob.svg" alt="solu-hero-glob" width={120} height={120} className="solu-hero-4"></Image>
            </section>
        </>
    );
}