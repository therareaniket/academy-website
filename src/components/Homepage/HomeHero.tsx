"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
    return (
        <>
            <section className="section home-hero">
                <Image src="/images/general/site-hero-cube.svg" alt="site-hero-cube" width={1070} height={837} className="site-hero-cube"></Image>
                
                <Image src="/images/homepage/home-hero-bulb.webp" alt="home-hero-bulb" width={381} height={490} className="home-hero-bulb"></Image>
                
                <Image src="/images/homepage/home-hero-cap.webp" alt="home-hero-cap" width={224} height={217} className="home-hero-cap"></Image>
                
                <Image src="/images/homepage/home-hero-player.webp" alt="home-hero-player" width={242} height={171} className="home-hero-player"></Image>

                <Link href="/ComingSoon" title="Get Started" className="get-started-btn">
                    <div className="arrow-link">
                        <Image src="/images/homepage/hero-home-btn-arrow.svg" alt="hero-home-btn-arrow" width={100} height={35}></Image>
                    </div>
                    
                    <span className="h5">Get Started</span>
                </Link>

                <div className="container">
                    <div className="hero-details">
                        <h1>Master All Clinical Trials Products with <span>AI-Powered</span> DhatuAcademy</h1>
                    </div>
                </div>
            </section>
        </>
    );
};