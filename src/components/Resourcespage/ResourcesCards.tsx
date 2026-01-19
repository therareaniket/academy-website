"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image";
import Link from "next/link";
import { delay, motion } from "framer-motion"

export default function ResourcesCards() {

    const blogsAnimations = {
        blogItem_ttb_initial: { y: "-50px", opacity: 0 },
        blogItem_ttb_animate: { y: "0px", opacity: 1, transition: { duration: 0.6  } },

        slow_blogItem_ttb_initial: { y: "-50px", opacity: 0 },
        slow_blogItem_ttb_animate: { y: "0px", opacity: 1, transition: { delay: 0.6, duration: 0.6  } }
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

                                            {/* <motion.div initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }}> */}
                                                <motion.h3 className="h5 text-md" initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }}>Why Portal-Specific Training is the Future of Clinical Trials</motion.h3>

                                                <motion.p className="h6 text-rg text-grey" initial={blogsAnimations.slow_blogItem_ttb_initial} whileInView={blogsAnimations.slow_blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} >Portal-specific training is transforming clinical trials by empowering sites to confidently use the exact digital tools needed for fast, error-free study execution.</motion.p>
                                            {/* </motion.div> */}
                                        </Link>

                                        <Link href="/Blogs/role-of-certifications-in-clinical-research-careers" className="resources-cards card-4">
                                            {/* <motion.div initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.5 }} > */}
                                                <Image src="/images/resources/learning-guides-blog-2.webp" alt="portaltraining" width="585" height="312" className="portaltraining-1 site-radius-20"></Image>
                                                
                                                <div className="date-cate-span">
                                                    <span className="text-16 text-rg text-grey">Smit Shah</span>

                                                    <span className="text-16 text-rg text-grey">December 12, 2025</span>
                                                </div>
                                            {/* </motion.div> */}

                                            {/* <motion.div initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 1 }} > */}
                                                <motion.h3 className="h5 text-md" initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }}>The Role of Certifications in Clinical Research Careers</motion.h3>

                                                <motion.p className="h6 text-rg text-grey" initial={blogsAnimations.slow_blogItem_ttb_initial} whileInView={blogsAnimations.slow_blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} >Industry-recognized certifications validate skills, improve employability, and open doors to advanced roles in clinical research.</motion.p>
                                            {/* </motion.div> */}
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

                                            {/* <motion.div initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 1 }} > */}
                                                <motion.h3 className="h5 text-md" initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }}>Best Practices for Training Users on Clinical Trial Platforms</motion.h3>

                                                <motion.p className="h6 text-rg text-grey" initial={blogsAnimations.slow_blogItem_ttb_initial} whileInView={blogsAnimations.slow_blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} >From data capture and compliance validation to payments and reporting, these systems are used daily by sponsors, CROs, sites, labs, and finance teams.</motion.p>
                                            {/* </motion.div> */}
                                        </Link>

                                        <Link href="/Blogs/best-practices-for-compliance-training-in-regulated-clinical-systems" className="resources-cards card-2">
                                            {/* <motion.div initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.5 }} > */}
                                                <Image src="/images/resourcesdetail/best-practices-blog-2.webp" alt="portaltraining" width="585" height="312" className="portaltraining-2 site-radius-20"></Image>

                                                <div className="date-cate-span">
                                                    <span className="text-16 text-rg text-grey">Smit Shah</span>

                                                    <span className="text-16 text-rg text-grey">January 01, 2026</span>
                                                </div>
                                            {/* </motion.div> */}

                                            {/* <motion.div initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 1 }} > */}
                                                <motion.h3 className="h5 text-md" initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }}>Best Practices for Compliance Training in Regulated Clinical Systems</motion.h3>

                                                <motion.p className="h6 text-rg text-grey" initial={blogsAnimations.slow_blogItem_ttb_initial} whileInView={blogsAnimations.slow_blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} >Regulations such as ICH-GCP, 21 CFR Part 11, GDPR that every user interacting with clinical systems is adequately trained and accountable.</motion.p>
                                            {/* </motion.div> */}
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

                                            {/* <motion.div initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 1 }} > */}
                                                <motion.h3 className="h5 text-md" initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }}>Why Continuous Training Is Essential for Modern Clinical Trial Platforms</motion.h3>

                                                <motion.p className="h6 text-rg text-grey" initial={blogsAnimations.slow_blogItem_ttb_initial} whileInView={blogsAnimations.slow_blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} >Clinical trial platforms evolve continuously due to regulatory changes, technology upgrades, and operational improvements.</motion.p>
                                            {/* </motion.div> */}
                                        </Link>

                                        <Link href="/Blogs/how-training-portal-improve-compliance-readiness-during-audits-introduction" className="resources-cards card-2">
                                            {/* <motion.div initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.5 }} > */}
                                                <Image src="/images/resourcesdetail/updates-and-insights-blog-2-updated.webp" alt="portaltraining" width="585" height="312" className="portaltraining-1 site-radius-20"></Image>
                                                
                                                <div className="date-cate-span">
                                                    <span className="text-16 text-rg text-grey">Smit Shah</span>

                                                    <span className="text-16 text-rg text-grey">January 03, 2026</span>
                                                </div>
                                            {/* </motion.div> */}

                                            {/* <motion.div initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 1 }} > */}
                                                <motion.h3 className="h5 text-md" initial={blogsAnimations.blogItem_ttb_initial} whileInView={blogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }}>How Training Portals Improve Compliance Readiness During Audits</motion.h3>

                                                <motion.p className="h6 text-rg text-grey" initial={blogsAnimations.slow_blogItem_ttb_initial} whileInView={blogsAnimations.slow_blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} >Audits and inspections are inevitable in clinical research. One of the first areas inspectors examine is training documentation.</motion.p>
                                            {/* </motion.div> */}
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