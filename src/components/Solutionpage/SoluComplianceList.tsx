"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function SoluComplianceList() {

    const solutionListAnimations = (typeof window !== "undefined" && window.innerWidth >= 1200) ? {
        title_ltr_initial: { x: "-50px", opacity: 0, },
        title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6 } },

        subTitle_ltr_initial: { x: "50px", opacity: 0, },
        subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 2, duration: 0.6 } },

    } : {
        title_ltr_initial: { x: "-50px", opacity: 0, },
        title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6 } },

        subTitle_ltr_initial: { x: "-50px", opacity: 0, },
        subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1.5, duration: 0.6 } },
    }

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="compliance-list-headings">
                        <motion.h2 initial={solutionListAnimations.title_ltr_initial} whileInView={solutionListAnimations.title_ltr_animate} viewport={{ once: true, amount: 0.8 }}>Empowering Learning with Compliance Focus</motion.h2>

                        <motion.p initial={solutionListAnimations.subTitle_ltr_initial} whileInView={solutionListAnimations.subTitle_ltr_animate} viewport={{ once: true }} className="h6 text-rg">Tailored programs build expertise in any clinical training alongside Dhatu products, SOP workflows, and real-trial confidence.</motion.p>
                    </div>

                    <div className="compliance-lists">
                        <div className="compliance-row">
                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuMesh.svg" alt="solu-compliance-list-1" className="dhatu-mesh dhatu-logos" width={150} height={40}></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg">DhatuMesh enables secure, accurate capture of clinical trial data across sites and studies.</p>
                            </div>

                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuPay.svg" alt="solu-compliance-list-1" width={125} height={40} className="dhatu-pay dhatu-logos"></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg">DhatuPay simplifies secure payments with compliant, streamlined transaction workflows.</p>
                            </div>

                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuMatch.svg" alt="solu-compliance-list-1" width={155} height={40} className="dhatu-match dhatu-logos"></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg">DhatuMatch supports compliant, recruitment across sponsors, campaigns, and sites.</p>
                            </div>
                        </div>

                        <div className="compliance-row">
                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuComply.svg" alt="solu-compliance-list-1" width={175} height={40} className="dhatu-comply dhatu-logos"></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg">DhatuComply helps teams manage compliance through structured, audit-ready workflows.</p>
                            </div>

                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuMind.svg" alt="solu-compliance-list-1" width={140} height={40} className="dhatu-mind dhatu-logos"></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg">DhatuMind is a centralized platform for managing clinical trial data with integrity.</p>
                            </div>
                        </div>

                        <div className="compliance-row">
                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuSafety.svg" alt="solu-compliance-list-1" width={175} height={40} className="dhatu-safety dhatu-logos"></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg">DhatuSafety is a centralized platform for managing clinical trial data with integrity.</p>
                            </div>

                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuVault.svg" alt="solu-compliance-list-1" width={160} height={40} className="dhatu-vault dhatu-logos"></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg">DhatuVault is a centralized platform for managing clinical trial data with integrity.</p>
                            </div>

                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuControl.svg" alt="solu-compliance-list-1" width={170} height={40} className="dhatu-control dhatu-logos"></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg">DhatuControl enables secure, accurate capture of clinical trial data across sites and studies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}