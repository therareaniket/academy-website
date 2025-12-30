// "use client"

// import Image from "next/image";
// import Link from "next/link";

// export default function HomePricing(){
//     return (
//         <>
//             <section>
//                 <div className="container">
//                     <div className="stats-headings">
//                         <h2>Simple Pricing. Full Clinical Trials Value</h2>

//                         <p className="h6">Straightforward plans unlock core access for existing subscribers and premium AI across our products. Tailored options fit clinical trials pros trainers and learners perfectly.</p>
//                     </div>

//                     <div className="pricing-detailed-wrapper">
//                         <div className="pricing-main-box site-radius-20">
//                             <div className="plan-card-detail-wrapper">
//                                 <div className="card-swipe site-radius-20">
//                                     <div className="pricing-cards-swipes">
//                                         <div className="sliding-card standard-card site-radius-20 active-pricing-card">
//                                             <div className="slide-card-title">
//                                                 <h3 className="h4 text-bd">Standard</h3>

//                                                 <p className="h6 text-rg">Low cost core access for existing clinical trials product subscribers</p>

//                                                 <Image src="/images/homepage/pricing-yellow-card-desktop.png" alt="pricing-yellow-card-desktop" width={172} height={175} priority={false}></Image>
//                                             </div>
//                                         </div>
                                        
//                                         <div className="sliding-card enterprise-card site-radius-20">
//                                             <div className="slide-card-title">
//                                                 <h3 className="h4 text-bd">Enterprise</h3>

//                                                 <p className="h6 text-rg">Full access with AI features for advanced clinical trials mastery</p>

//                                                 <Image src="/images/homepage/pricing-blue-card-desktop.png" alt="pricing-yellow-card-desktop" width={172} height={175} priority={false}></Image>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="card-swipe-text">
//                                         <p className="h4 text-md">Launch Your Career</p>

//                                         <p className="text-18">From learning to working on live portals.</p>
//                                     </div>
//                                 </div>

//                                 <div className="card-details site-radius-20">
//                                     <div className="plan-price">
//                                         <h3 className="h2 text-bd">$59</h3>

//                                         <span className="text-18" style={{ color: "#B8B8B8" }}>per user/month</span>
//                                     </div>

//                                     <hr className="block" />

//                                     <div className="plan-include-list">
//                                         <ul>
//                                             <li className="text-18">
//                                                 <Image src="/images/homepage/listing-check.svg" alt="listing-check" width={15} height={11} priority={false}></Image>
//                                                 Essential modules across all clinical trials products
//                                             </li>

//                                             <li className="text-18">
//                                                 <Image src="/images/homepage/listing-check.svg" alt="listing-check" width={15} height={11} priority={false}></Image>
//                                                 Interactive basics for pros trainers and learners
//                                             </li>

//                                             <li className="text-18">
//                                                 <Image src="/images/homepage/listing-check.svg" alt="listing-check" width={15} height={11} priority={false}></Image>
//                                                 Progress tracking for steady advancement
//                                             </li>

//                                             <li className="text-18">
//                                                 <Image src="/images/homepage/listing-check.svg" alt="listing-check" width={15} height={11} priority={false}></Image>
//                                                 Community forums for peer collaboration
//                                             </li>

//                                             <li className="text-18">
//                                                 <Image src="/images/homepage/listing-check.svg" alt="listing-check" width={15} height={11} priority={false}></Image>
//                                                 Core completion certificates
//                                             </li>
//                                         </ul>
//                                     </div>

//                                     <div className="flex justify-center plans-link-wrap">
//                                         <Link href="/ComingSoon" title="Start Now" className="planing-link text-18 site-radius-10">Start Now</Link>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="extra-benefits site-radius-20">
//                                 <div className="extra-benefe-title">
//                                     <h4 className="text-md">Smart Plans Every Journey</h4>

//                                     <p className="text-18">Pick your plan for DhatuAcademy across clinical trials products.</p>
//                                 </div>

//                                 <div className="benefe-list">
//                                     <ul>
//                                         <li className="text-18">
//                                             <Image src="/images/homepage/listing-check.svg" alt="listing-check" width={15} height={11} priority={false}></Image>
//                                             Clear pricing levels
//                                         </li>

//                                         <li className="text-18">
//                                             <Image src="/images/homepage/listing-check.svg" alt="listing-check" width={15} height={11} priority={false}></Image>
//                                             Real trials alignment
//                                         </li>
//                                     </ul>

//                                     <ul>
//                                         <li className="text-18">
//                                             <Image src="/images/homepage/listing-check.svg" alt="listing-check" width={15} height={11} priority={false}></Image>
//                                             Pro trainer learner fit
//                                         </li>

//                                         <li className="text-18">
//                                             <Image src="/images/homepage/listing-check.svg" alt="listing-check" width={15} height={11} priority={false}></Image>
//                                             Scalable learning paths
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomePricing(){
    const [activePlan, setActivePlan] = useState<'standard' | 'enterprise'>('standard');

    const planDetails = {
        standard: {
            price: "$59",
            textColor: "text-[#FEAF06]",
            features: [
                "Essential modules across all clinical trials products",
                "Interactive basics for pros trainers and learners",
                "Progress tracking for steady advancement",
                "Community forums for peer collaboration",
                "Core completion certificates"
            ]
        },
        enterprise: {
            price: "$299",
            textColor: "text-[#8C67FB]",
            features: [
                "Unlimited modules across all clinical trials products",
                "AI powered personalized learning paths",
                "Advanced simulations and hands on projects",
                "Advanced simulations and hands on projects",
                "Premium certificates with industry recognition",
            ]
        }
    };

    const handleCardClick = (plan: 'standard' | 'enterprise') => {
        setActivePlan(plan);
    };

    return (
        <>
            <section>
                <div className="container">
                    <div className="stats-headings">
                        <h2>Simple Pricing. Full Clinical Trials Value</h2>

                        <p className="h6">Straightforward plans unlock core access for existing subscribers and premium AI across our products. Tailored options fit clinical trials pros trainers and learners perfectly.</p>
                    </div>

                    <div className="pricing-detailed-wrapper">
                        <div className="pricing-main-box site-radius-20">
                            <div className="plan-card-detail-wrapper">
                                <div className="card-swipe site-radius-20">
                                    <div className="pricing-cards-swipes">
                                        <div className={`sliding-card standard-card site-radius-20 ${activePlan === 'standard' ? 'active-pricing-card' : ''}`}
                                            onClick={() => handleCardClick('standard')}
                                            style={{ cursor: 'pointer' }}>
                                            <div className="slide-card-title">
                                                <h3 className="h4 text-bd">Standard</h3>

                                                <p className="h6 text-rg">Low cost core access for existing clinical trials product subscribers</p>

                                                <Image src="/images/homepage/pricing-yellow-card-desktop.png" alt="pricing-yellow-card-desktop" width={172} height={175} priority={false}></Image>
                                            </div>
                                        </div>
                                        
                                        <div 
                                            className={`sliding-card enterprise-card site-radius-20 ${activePlan === 'enterprise' ? 'active-pricing-card' : ''}`}
                                            onClick={() => handleCardClick('enterprise')}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <div className="slide-card-title">
                                                <h3 className="h4 text-bd">Enterprise</h3>

                                                <p className="h6 text-rg">Full access with AI features for advanced clinical trials mastery</p>

                                                <Image src="/images/homepage/pricing-blue-card-desktop.png" alt="pricing-yellow-card-desktop" width={172} height={175} priority={false}></Image>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-swipe-text">
                                        <p className="h4 text-md">Launch Your Career</p>

                                        <p className="text-18">From learning to working on live portals.</p>
                                    </div>
                                </div>

                                <div className="card-details site-radius-20">
                                    <div className="plan-price">
                                        <h3 className={`h2 text-bd ${planDetails[activePlan].textColor}`}>{planDetails[activePlan].price}</h3>

                                        <span className="text-18" style={{ color: "#B8B8B8" }}>per user/month</span>
                                    </div>

                                    <hr className="block" />

                                    <div className="plan-include-list">
                                        <ul>
                                            {planDetails[activePlan].features.map((feature, index) => (
                                                <li key={index} className="text-18">
                                                    <Image src="/images/homepage/listing-check.svg" alt="listing-check" width={15} height={11} priority={false}></Image>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex justify-center plans-link-wrap">
                                        <Link href="/ComingSoon" title="Start Now" className="planing-link text-18 site-radius-10">Start Now</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="extra-benefits site-radius-20">
                                <div className="extra-benefe-title">
                                    <h4 className="text-md">Smart Plans Every Journey</h4>

                                    <p className="text-18">Pick your plan for DhatuAcademy across clinical trials products.</p>
                                </div>

                                <div className="benefe-list">
                                    <ul>
                                        <li className="text-18">
                                            <Image src="/images/homepage/listing-check.svg" alt="listing-check" width={15} height={11} priority={false}></Image>
                                            Clear pricing levels
                                        </li>

                                        <li className="text-18">
                                            <Image src="/images/homepage/listing-check.svg" alt="listing-check" width={15} height={11} priority={false}></Image>
                                            Real trials alignment
                                        </li>
                                    </ul>

                                    <ul>
                                        <li className="text-18">
                                            <Image src="/images/homepage/listing-check.svg" alt="listing-check" width={15} height={11} priority={false}></Image>
                                            Pro trainer learner fit
                                        </li>

                                        <li className="text-18">
                                            <Image src="/images/homepage/listing-check.svg" alt="listing-check" width={15} height={11} priority={false}></Image>
                                            Scalable learning paths
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
