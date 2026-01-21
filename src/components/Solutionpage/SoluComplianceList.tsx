"use client"

import Image from "next/image";
import { motion } from "framer-motion";

type SoluComplianaceProps = {
    empoweringComplianceTitle: string;
    empoweringComplianceSubtitle: string;
}

export default function SoluComplianceList( { empoweringComplianceTitle, empoweringComplianceSubtitle } : SoluComplianaceProps ) {

    const solutionListAnimations = (typeof window !== "undefined" && window.innerWidth >= 1200) ? {
        title_ltr_initial: { x: "0px", opacity: 1, },
        title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6 } },

        subTitle_ltr_initial: { x: "0px", opacity: 1, },
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
                        <motion.h2 initial={solutionListAnimations.title_ltr_initial} whileInView={solutionListAnimations.title_ltr_animate} viewport={{ once: true, amount: 0.8 }}>{empoweringComplianceTitle}</motion.h2>

                        <motion.p initial={solutionListAnimations.subTitle_ltr_initial} whileInView={solutionListAnimations.subTitle_ltr_animate} viewport={{ once: true }} className="h6 text-rg">{empoweringComplianceSubtitle}</motion.p>
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

                                <p className="text-18 text-rg">Accurate Clinical Data Capture Across Sites</p>
                            </div>

                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuPay.svg" alt="solu-compliance-list-1" width={125} height={40} className="dhatu-pay dhatu-logos"></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg">Compliant and Transparent Clinical Trial Payments</p>
                            </div>

                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuMatch.svg" alt="solu-compliance-list-1" width={155} height={40} className="dhatu-match dhatu-logos"></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg">Ethical and Compliant Trial Recruitment</p>
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

                                <p className="text-18 text-rg">Audit-Ready Compliance Management</p>
                            </div>

                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuMind.svg" alt="solu-compliance-list-1" width={140} height={40} className="dhatu-mind dhatu-logos"></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg">Centralized Oversight with Data Integrity</p>
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

                                <p className="text-18 text-rg">Consistent and Compliant Safety Reporting</p>
                            </div>

                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuVault.svg" alt="solu-compliance-list-1" width={160} height={40} className="dhatu-vault dhatu-logos"></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg"> Secure and Controlled Trial Documentation</p>
                            </div>

                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuControl.svg" alt="solu-compliance-list-1" width={170} height={40} className="dhatu-control dhatu-logos"></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg">Operational Control and Study Governance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}