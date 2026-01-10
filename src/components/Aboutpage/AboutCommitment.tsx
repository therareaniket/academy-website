"use client"

import Image from "next/image";
import { useEffect } from "react";

export default function AboutCommitment() {

 useEffect(() => {
    const cards = document.querySelectorAll(
      ".cmtmnt-headings, .mission, .learner-satisfaction, .proff-trained, .vision, .full-stats"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="cmtmnt-headings">
                        <h2>Our Clinical Trials Commitments</h2>

                        <p className="h6 text-rg">Practical training aligned with Dhatu products and global SOP standards.</p>
                    </div>

                    <div className="cmtmnt-content">
                        <div className="mission site-radius-20">
                            <Image src="/images/aboutpage/mission-icon.png" alt="mission-icon" width={42} height={42} priority={false} className="mission-icon"></Image>

                            <div className="mission-details">
                                <h3 className="h4 text-md">Our Mission</h3>

                                <p className="text-18 text-rg">Empower clinical trials teams with structured compliant training across Dhatu products and global standards for precise execution and regulatory mastery.</p>
                            </div>

                            <Image src="/images/aboutpage/mission-laptop.png" alt="mission-laptop" width={108} height={125} priority={false} className="mission-laptop"></Image>
                            
                            <Image src="/images/homepage/stats-section-elements/step-2-blue-2-line.png" alt="mission-laptop" width={50} height={30} priority={false} className="mission-line"></Image>
                        </div>

                        <div className="number-vision">
                            <div className="stats-vision">
                                <div className="small-stats">
                                    <div className="learner-satisfaction site-radius-20">
                                        <h4 className="h3">95% <span className="h6 text-rg">Learner Satisfaction Score</span></h4>
                                    </div>

                                    <div className="proff-trained site-radius-20">
                                        <h4 className="h1">12,000+ <span className="h6 text-rg">Professionals Trained</span></h4>
                                    </div>
                                </div>

                                <div className="vision site-radius-20">
                                    <Image src="/images/aboutpage/vision-icon.png" alt="vision-icon" width={46} height={32} priority={false} className="vision-icon"></Image>

                                    <div className="vision-details">
                                        <h3 className="h4 text-md">Our Vision</h3>

                                        <p className="text-18 text-rg">Become the premier training partner for confident, compliant, future-ready clinical teams in the global clinical research landscape.</p>
                                    </div>

                                    <Image src="/images/homepage/stats-section-elements/step-2-blue-1-pencil.png" alt="abt-pencil" width={47} height={60} priority={false} className="abt-pencil"></Image>

                                    <Image src="/images/homepage/stats-section-elements/step-2-blue-1-bulb.png" alt="abt-bulb" width={121} height={120} priority={false} className="abt-bulb"></Image>
                                </div>
                            </div>

                            <div className="full-stats site-radius-20">
                                <div className="training-modules-info">
                                    <h4 className="h3 text-sb">60+ <span className="h6 text-md">Specialized Training Modules</span></h4>
                                </div>

                                <div className="modules-list">
                                    <Image src="/images/aboutpage/module-dp.png" alt="modules-dp" width={80} height={80} className="modules-dp"></Image>
                                    <Image src="/images/aboutpage/module-dv.png" alt="modules-dv" width={80} height={80} className="modules-dv"></Image>
                                    <Image src="/images/aboutpage/module-dc.png" alt="modules-dc" width={80} height={80} className="modules-dc"></Image>
                                    <Image src="/images/aboutpage/module-dm.png" alt="modules-dm" width={80} height={80} className="modules-dm"></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}