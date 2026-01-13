"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"

export default function ResourcesCards() {

    const blogsAnimations = {
        blogItem_ttb_initial: { y: "-50px", opacity: 0 },
        blogItem_ttb_animate: { y: "0px", opacity: 1 }
    }

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="resources-cards-tabs">
                        <Tabs defaultValue="clinicalresearch" className="resources-tabs">
                            <TabsList className="resources-tab-trigger resources-card-left">
                                <span className="h5 text-md">Categories</span>
                                <div className="res-category-buttons">
                                <TabsTrigger className="text-18 text-rg categories-trigger-buttons" value="clinicalresearch">Learning Guides</TabsTrigger>
                                <TabsTrigger className="text-18 text-rg categories-trigger-buttons" value="portaltraining">Best Practices</TabsTrigger>
                                <TabsTrigger className="text-18 text-rg categories-trigger-buttons" value="handsonlearning">Updates & Insights</TabsTrigger>
                                </div>
                            </TabsList>

                            <div className="resorces-card-right">
                                <TabsContent value="clinicalresearch">
                                    <div className="resources-card-wrapper">
                                        <Link href="/ResourcesDetail" className="resources-cards card-1">
                                            {/* <motion.div initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.5 }} > */}
                                                <Image src="/images/resources/resources-card-1-img.webp" alt="portaltraining" width="585" height="312" className="portaltraining-1"></Image>

                                                <div className="date-cate-span">
                                                    <span className="text-16 text-rg text-grey">Smit Shah</span>

                                                    <span className="text-16 text-rg text-grey">December 10, 2025</span>
                                                </div>
                                            {/* </motion.div> */}

                                            <motion.div initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 1 }} >
                                                <h3 className="h5 text-md">Why Portal-Specific Training is the Future of Clinical Trials</h3>

                                                <p className="h6 text-rg text-grey">Portal-specific training is transforming clinical trials by empowering sites to confidently use the exact digital tools needed for fast, error-free study execution.</p>
                                            </motion.div>
                                        </Link>

                                        <Link href="/Blogs/role-of-certifications-in-clinical-research-careers" className="resources-cards card-4">
                                            {/* <motion.div initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.5 }} > */}
                                                <Image src="/images/resources/learning-guides-blog-2.webp" alt="portaltraining" width="585" height="312" className="portaltraining-1 site-radius-20"></Image>
                                                
                                                <div className="date-cate-span">
                                                    <span className="text-16 text-rg text-grey">Smit Shah</span>

                                                    <span className="text-16 text-rg text-grey">December 12, 2025</span>
                                                </div>
                                            {/* </motion.div> */}

                                            <motion.div   initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 1 }} >
                                                <h3 className="h5 text-md">The Role of Certifications in Clinical Research Careers</h3>

                                                <p className="h6 text-rg text-grey">Industry-recognized certifications validate skills, improve employability, and open doors to advanced roles in clinical research.</p>
                                            </motion.div>
                                        </Link>
                                    </div>
                                </TabsContent>

                                <TabsContent value="portaltraining">
                                    <div className="resources-card-wrapper">
                                        <Link href="/Blogs/best-practices-for-training-users-on-clinical-trial-platforms" className="resources-cards card-1">
                                            {/* <motion.div initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.5 }} > */}
                                                <Image src="/images/resourcesdetail/best-practices-blog-1.webp" alt="portaltraining" width="585" height="312" className="portaltraining-1 site-radius-20"></Image>

                                                <div className="date-cate-span">
                                                    <span className="text-16 text-rg text-grey">Smit Shah</span>

                                                    <span className="text-16 text-rg text-grey">January 03, 2026</span>
                                                </div>
                                            {/* </motion.div> */}

                                            <motion.div initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 1 }} >
                                                <h3 className="h5 text-md">Best Practices for Training Users on Clinical Trial Platforms</h3>

                                                <p className="h6 text-rg text-grey">From data capture and compliance validation to payments and reporting, these systems are used daily by sponsors, CROs, sites, labs, and finance teams.</p>
                                            </motion.div>
                                        </Link>

                                        <Link href="/Blogs/best-practices-for-compliance-training-in-regulated-clinical-systems" className="resources-cards card-2">
                                            {/* <motion.div initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.5 }} > */}
                                                <Image src="/images/resourcesdetail/best-practices-blog-2.webp" alt="portaltraining" width="585" height="312" className="portaltraining-2 site-radius-20"></Image>

                                                <div className="date-cate-span">
                                                    <span className="text-16 text-rg text-grey">Smit Shah</span>

                                                    <span className="text-16 text-rg text-grey">January 01, 2026</span>
                                                </div>
                                            {/* </motion.div> */}

                                            <motion.div initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 1 }} >
                                                <h3 className="h5 text-md">Best Practices for Compliance Training in Regulated Clinical Systems</h3>

                                                <p className="h6 text-rg text-grey">Regulations such as ICH-GCP, 21 CFR Part 11, GDPR that every user interacting with clinical systems is adequately trained and accountable.</p>
                                            </motion.div>
                                        </Link>
                                    </div>
                                </TabsContent>

                                <TabsContent value="handsonlearning">
                                    <div className="resources-card-wrapper">
                                        <Link href="/Blogs/why-continuous-training-is-essential-for-modern-clinical-trial" className="resources-cards card-1">                                       
                                            {/* <motion.div initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.5 }} > */}
                                                <Image src="/images/resourcesdetail/updates-and-insights-blog-1.webp" alt="portaltraining" width="585" height="312" className="portaltraining-1 site-radius-20"></Image>
                                                
                                                <div className="date-cate-span">
                                                    <span className="text-16 text-rg text-grey">Smit Shah</span>

                                                    <span className="text-16 text-rg text-grey">December 25, 2025</span>
                                                </div>
                                            {/* </motion.div> */}

                                            <motion.div initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 1 }} >
                                                <h3 className="h5 text-md">Why Continuous Training Is Essential for Modern Clinical Trial Platforms</h3>

                                                <p className="h6 text-rg text-grey">Clinical trial platforms evolve continuously due to regulatory changes, technology upgrades, and operational improvements.</p>
                                            </motion.div>
                                        </Link>

                                        <Link href="/Blogs/how-training-portal-improve-compliance-readiness-during-audits-introduction" className="resources-cards card-2">
                                            {/* <motion.div initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.5 }} > */}
                                                <Image src="/images/resourcesdetail/updates-and-insights-blog-2-updated.webp" alt="portaltraining" width="585" height="312" className="portaltraining-1 site-radius-20"></Image>
                                                
                                                <div className="date-cate-span">
                                                    <span className="text-16 text-rg text-grey">Smit Shah</span>

                                                    <span className="text-16 text-rg text-grey">January 03, 2026</span>
                                                </div>
                                            {/* </motion.div> */}

                                            <motion.div initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 1 }} >
                                                <h3 className="h5 text-md">How Training Portals Improve Compliance Readiness During Audits</h3>

                                                <p className="h6 text-rg text-grey">Audits and inspections are inevitable in clinical research. One of the first areas inspectors examine is training documentation.</p>
                                            </motion.div>
                                        </Link>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    );
}