"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

type HomePricingProps = {
    pricingTitle: string;
    pricingSubtitle: string;
    planList : {
        standardPlanIntro: string;
        standardInclude1: string;
        standardInclude2: string;
        standardInclude3: string;
        standardInclude4: string;
        standardInclude5: string;

        enterprisePlanIntro: string;
        enterpriseInclude1: string;
        enterpriseInclude2: string;
        enterpriseInclude3: string;
        enterpriseInclude4: string;
        enterpriseInclude5: string;
    };

}

export default function HomePricing( { pricingTitle, pricingSubtitle, planList } : HomePricingProps ){
    const [activePlan, setActivePlan] = useState<'standard' | 'enterprise'>('standard');

    const planDetails = {
        standard: {
            price: "$59",
            textColor: "text-[#FEAF06]",
            features: [
                planList.standardInclude1,
                planList.standardInclude2,
                planList.standardInclude3,
                planList.standardInclude4,
                planList.standardInclude5,
            ]
        },
        enterprise: {
            price: "$299",
            textColor: "text-[#8C67FB]",
            features: [
                planList.enterpriseInclude1,
                planList.enterpriseInclude2,
                planList.enterpriseInclude3,
                planList.enterpriseInclude4,
                planList.enterpriseInclude5,
            ]
        }
    };

    const handleCardClick = (plan: 'standard' | 'enterprise') => {
        setActivePlan(plan);
    };

    
    const homePricingAnimations = (typeof window !== "undefined" && window.innerWidth >= 1200) ? {
		title_ltr_initial: { x: "0px", opacity: 1, },
		title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6 } },

		subTitle_ltr_initial: { x: "0px", opacity: 1, },
		subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 2, duration: 0.6 } },

        list_btt_initial: { y: '10px', opacity: 0, },
        list_btt_animate: { y: '0px', opacity: 1, },
	} : {
        title_ltr_initial: { x: "-50px", opacity: 0, },
		title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6 } },

		subTitle_ltr_initial: { x: "-50px", opacity: 0, },
		subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1.5, duration: 0.6 } },

        list_btt_initial: { y: '10px', opacity: 0, },
        list_btt_animate: { y: '0px', opacity: 1, },
    }

    return (
        <>
            <section>
                <div className="container">
                    <div className="stats-headings">
                        <motion.h2 initial={homePricingAnimations.title_ltr_initial} whileInView={homePricingAnimations.title_ltr_animate} viewport={{ once: true, amount: 0.8 }}>{pricingTitle}</motion.h2>

                        <motion.p initial={homePricingAnimations.subTitle_ltr_initial} whileInView={homePricingAnimations.subTitle_ltr_animate} viewport={{ once: true, amount: 0.8 }} className="h6">{pricingSubtitle}</motion.p>
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

                                                <p className="h6 text-rg">{planList.standardPlanIntro}</p>

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

                                                <p className="h6 text-rg">{planList.enterprisePlanIntro}</p>

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
                                                // <li key={index} className="text-18" >
                                                //     <Image src="/images/homepage/listing-check.svg" alt="listing-check" width={15} height={11} priority={false} ></Image>
                                                //     {feature}
                                                // </li>

												 <motion.li key={`${activePlan}-${index}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut",}} className="text-18" >
												    <Image src="/images/homepage/listing-check.svg" alt="" width={15} height={11} />
												    {feature}
												</motion.li>
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
                                        <motion.li className="text-18" initial={homePricingAnimations.list_btt_initial} whileInView={homePricingAnimations.list_btt_animate} viewport={{ once: true, }} transition={{ delay: 1, duration: 0.2, ease: "easeOut", }}>
                                            <Image src="/images/homepage/listing-check.svg" alt="listing-check" width={15} height={11} priority={false}></Image>
                                            Clear pricing levels
                                        </motion.li>

                                        <motion.li className="text-18" initial={homePricingAnimations.list_btt_initial} whileInView={homePricingAnimations.list_btt_animate} viewport={{ once: true, }} transition={{ delay: 1.2, duration: 0.2, ease: "easeOut", }}>
                                            <Image src="/images/homepage/listing-check.svg" alt="listing-check" width={15} height={11} priority={false}></Image>
                                            Real trials alignment
                                        </motion.li>
                                    </ul>

                                    <ul>
                                        <motion.li className="text-18" initial={homePricingAnimations.list_btt_initial} whileInView={homePricingAnimations.list_btt_animate} viewport={{ once: true, }} transition={{ delay: 1.4, duration: 0.2, ease: "easeOut", }}>
                                            <Image src="/images/homepage/listing-check.svg" alt="listing-check" width={15} height={11} priority={false}></Image>
                                            Pro trainer learner fit
                                        </motion.li>

                                        <motion.li className="text-18" initial={homePricingAnimations.list_btt_initial} whileInView={homePricingAnimations.list_btt_animate} viewport={{ once: true, }} transition={{ delay: 1.6, duration: 0.2, ease: "easeOut", }}>
                                            <Image src="/images/homepage/listing-check.svg" alt="listing-check" width={15} height={11} priority={false}></Image>
                                            Scalable learning paths
                                        </motion.li>
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

