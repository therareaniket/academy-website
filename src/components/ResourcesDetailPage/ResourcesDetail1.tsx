"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"

export default function ResourcesDetail() {

    const blogsAnimations = {
        blogItem_ttb_initial: { y: "-50px", opacity: 0 },
        blogItem_ttb_animate: { y: "0px", opacity: 1 }
    }

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="resources-detail-wrapper">
                        <Tabs defaultValue="clinicalresearch" className="resources-tabs">
                            <TabsList className="resources-tab-trigger resources-card-left resources-detail-tabs text-18">
                                <span className="h5 text-md">Categories</span>
                                <div className="res-category-buttons">
                                    <TabsTrigger className="text-18 text-rg categories-trigger-buttons" value="clinicalresearch">Learning Guides</TabsTrigger>
                                    <TabsTrigger className="text-18 text-rg categories-trigger-buttons" value="portaltraining">Best Practices</TabsTrigger>
                                    <TabsTrigger className="text-18 text-rg categories-trigger-buttons" value="handsonlearning">Updates & Insights</TabsTrigger>
                                </div>
                            </TabsList>
                        </Tabs>

                        <div className="resources-detail-left">
                            <Breadcrumb>
                                <BreadcrumbList className="resources-detail-breadcrumb text-18">
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/Resources" className="text-18 text-rg" >Resources</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage className="text-18 text-rg"> Why Portal-Specific Training is the Future of Clinical Trials</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>

                            <h2 className="text-sb resources-deatil-head">Why Portal-Specific Training is the Future of Clinical Trials</h2>

                            <p className="h6 text-rg resources-deatil-para">As clinical trials become more complex and increasingly dependent on digital systems, portal-specific training is emerging as a critical differentiator for study success. Traditional, one-size-fits-all training approaches no longer meet the needs of sites juggling multiple platforms, sponsors, and protocols.</p>

                            <Image src="/images/resourcesdetail/whyPortalImg.webp" alt="portaltraining" width="1200" height="640" className="resources-detail-img-1 site-radius-20"></Image>

                            <div className="sharedby-name">
                                <div className="sharedby-date">
                                    <span className="text-18 text-rg text-grey">Smit Shah</span>

                                    <span className="text-18 text-rg text-grey">December 10, 2025</span>
                                </div>

                                <div className="social-icons">

                                </div>
                            </div>

                            <div className="resources-detail-paragraphs">
                                <p className="h6 text-rg resources-deatil-sub-para">As clinical trials continue to evolve in a digital-first world, research teams are expected to navigate an increasing number of platforms—EDC systems, eTMFs, CTMS solutions, safety portals, and patient-facing apps. Each tool comes with its own workflows, terminology, and requirements, making it difficult for sites to stay efficient without proper guidance. Portal-specific training addresses this challenge by equipping teams with targeted, system-level knowledge that directly aligns with the technology they use daily.</p>

                                <p className="h6 text-rg resources-deatil-sub-para">Unlike broad, generic training programs, portal-specific training focuses on real user interactions—where to click, how to complete tasks, and how to avoid common mistakes. This hands-on approach not only boosts site confidence but also significantly reduces protocol deviations, data entry errors, and onboarding delays. When teams understand a portal deeply, they spend less time troubleshooting and more time executing quality work.</p>

                                <p className="h6 text-rg resources-deatil-sub-para">In an era where decentralized trials, remote monitoring, and digital documentation are becoming standard, streamlined technology adoption is no longer optional. Portal-specific training helps sites keep pace with rapid innovation while ensuring consistency across global study teams. It also supports sponsors and CROs by improving data accuracy, accelerating timelines, and reducing the need for repeated support requests.</p>

                                <p className="h6 text-rg resources-deatil-sub-para">Ultimately, the future of clinical trials depends on empowering users—not just with tools, but with the knowledge to use them effectively. Portal-specific training delivers exactly that: clarity, confidence, and operational excellence in an increasingly technology-driven landscape.</p>
                            </div>

                            <div className="detail-card-btn">
                                <h3 className="text-md">Further Reading</h3>

                                <Link href="/Resources" className="btn-link-padding site-radius-10 text-18 text-rg">View All</Link>
                            </div>

                            <div className="detail-cards-wrapper">
                                <Link href="" className="resources-cards card-4">
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}