"use client"

import Image from "next/image";
import Link from "next/link";

export default function TrialGrowth(){
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="trial-grwth-wrapper">
                        <div className="trial-grwth-details">
                            <h2>Certifications Unlock Clinical Trials Growth</h2>

                            <p className="h6">DhatuAcademy certifications validate skills across our clinical trials products for pros trainers and learners. Programs blend structured modules practical projects and expert input for real world proficiency that aligns with industry standards. Earn industry recognized certificates and digital badges to highlight on profiles boosting your standing in clinical trials workflows. Access tailored paths from standard to premium levels for maximum impact.</p>
                            
                            <p className="h6"></p>

                            <div className="certification-links">
                                <Link href="/Courses" className="link-padding line-white site-radius-10 text-18 text-md">Explore Courses</Link>

                                <Link href="/ComingSoon" className="link-padding link-blue site-radius-10 text-18 text-md">Get Certified</Link>
                            </div>
                        </div>

                        <Image src="/images/homepage/certifications-banner.webp" alt="certifications-banner" width={750} height={546} priority={false} className="certifications-banner site-radius-20"></Image>
                    </div>
                </div>
            </section>
        </>
    );
}