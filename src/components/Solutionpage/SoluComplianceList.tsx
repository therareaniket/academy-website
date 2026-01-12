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
                        <motion.h2 initial={ solutionListAnimations.title_ltr_initial } whileInView={ solutionListAnimations.title_ltr_animate } viewport={{ once: true, amount: 0.8 }}>Training Built for Accuracy and Compliance</motion.h2>

                        <motion.p initial={ solutionListAnimations.subTitle_ltr_initial } whileInView={ solutionListAnimations.subTitle_ltr_animate } className="h6 text-rg">Comprehensive, role-based learning programs designed to help teams understand Dhatu products, follow SOP-driven workflows, and work confidently in real-world environments.</motion.p>
                    </div>

                    <div className="compliance-lists">
                        <div className="compliance-row">
                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuMesh.svg" alt="solu-compliance-list-1" width={150} height={40}></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg">DhatuMesh enables secure, accurate capture of clinical trial data across sites and studies.</p>
                            </div>

                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuPay.svg" alt="solu-compliance-list-1" width={125} height={40} className="dhatu-pay"></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg">DhatuMesh enables secure, accurate capture of clinical trial data across sites and studies.</p>
                            </div>

                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuMatch.svg" alt="solu-compliance-list-1" width={155} height={40} className="dhatu-match"></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg">DhatuMesh enables secure, accurate capture of clinical trial data across sites and studies.</p>
                            </div>
                        </div>

                        <div className="compliance-row">
                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuComply.svg" alt="solu-compliance-list-1" width={175} height={40} className="dhatu-comply"></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg">DhatuMesh enables secure, accurate capture of clinical trial data across sites and studies.</p>
                            </div>

                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuMind.svg" alt="solu-compliance-list-1" width={140} height={40} className="dhatu-mind"></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg">DhatuMesh enables secure, accurate capture of clinical trial data across sites and studies.</p>
                            </div>
                        </div>

                        <div className="compliance-row">
                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuSafety.svg" alt="solu-compliance-list-1" width={175} height={40} className="dhatu-safety"></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg">DhatuMesh enables secure, accurate capture of clinical trial data across sites and studies.</p>
                            </div>

                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuVault.svg" alt="solu-compliance-list-1" width={160} height={40} className="dhatu-vault"></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg">DhatuMesh enables secure, accurate capture of clinical trial data across sites and studies.</p>
                            </div>

                            <div className="compliance-list site-radius-30">
                                <div className="compli-name">
                                    <Image src="/images/solutionpage/compliance-solutions/DhatuControl.svg" alt="solu-compliance-list-1" width={170} height={40} className="dhatu-control"></Image>

                                    <div className="compliance-link-arrow">
                                        <Image src="/images/solutionpage/compliance-solutions/compli-link-arrow.svg" alt="compli-link-arrow" width={14} height={14} priority={false}></Image>
                                    </div>
                                </div>

                                <p className="text-18 text-rg">DhatuMesh enables secure, accurate capture of clinical trial data across sites and studies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}