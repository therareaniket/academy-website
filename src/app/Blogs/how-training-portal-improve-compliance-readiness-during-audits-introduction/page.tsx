"use client"

import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,} from "@/components/ui/breadcrumb"
import { motion } from "framer-motion"

    const blogsAnimations = {
        blogItem_ttb_initial: { y: "-50px", opacity: 0 },
        blogItem_ttb_animate: { y: "0px", opacity: 1 }
    }

export default function TrainingUsersOnClinicalPlatform() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="resources-detail-wrapper">
                        <Tabs defaultValue="handsonlearning" className="resources-tabs">
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
                                        <BreadcrumbPage className="text-18 text-rg">How Training Portals Improve Compliance Readiness During Audits</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>

                            <h2 className="text-sb resources-deatil-head">How Training Portals Improve Compliance Readiness During Audits</h2>

                            <p className="h6 text-rg resources-deatil-para">Audits and inspections are inevitable in clinical research. One of the first areas inspectors examine is training documentation. Organizations with fragmented or manual training processes often struggle to demonstrate compliance.</p>

                            <Image src="/images/resourcesdetail/updates-and-insights-blog-2-updated.webp" alt="portaltraining" width="1200" height="640" className="resources-detail-img-1 site-radius-20"></Image>

                            <div className="sharedby-name">
                                <div className="sharedby-date">
                                    <span className="text-18 text-rg text-grey">Smit Shah</span>

                                    <span className="text-18 text-rg text-grey">January 03, 2026</span>
                                </div>

                                <div className="social-icons">

                                </div>
                            </div>

                            <div className="resources-detail-paragraphs">
                                <p className="h6 text-rg resources-deatil-sub-para">Centralized training portals play a critical role in inspection readiness.</p>

                                <div className="blog-details-paragraph">
                                    <p className="h5 text-sb resources-deatil-sub-para">1. Centralized Visibility of Training Status</p>
                                    
                                    <p className="h6 text-rg">Training portals provide real-time insight into: </p>
                                    
                                    <ul>
                                        <li className="h6">Who is trained</li>
                                        <li className="h6">On what system</li>
                                        <li className="h6">For which version</li>
                                        <li className="h6">At what time</li>
                                    </ul>

                                    <p className="h6 text-rg resources-deatil-sub-para">This visibility eliminates last-minute audit scrambling.</p>
                                </div>

                                <div className="blog-details-paragraph">
                                    <p className="h5 text-sb resources-deatil-sub-para">2. Electronic Records and Signatures</p>

                                    <p className="h6 text-rg">Modern portals support: </p>
                                    
                                    <ul>
                                        <li className="h6">Electronic acknowledgments</li>
                                        <li className="h6">Timestamped completions</li>
                                        <li className="h6">Secure, traceable records</li>
                                    </ul>

                                    <p className="h6 text-rg resources-deatil-sub-para">These features align directly with 21 CFR Part 11 expectations.</p>
                                </div>
                                
                                <div className="blog-details-paragraph">
                                    <p className="h5 text-sb resources-deatil-sub-para">3. Version Control and Training Traceability</p>
                                    
                                    <p className="h6 text-rg">When systems or SOPs change, training portals maintain:: </p>
                                    
                                    <ul>
                                        <li className="h6">Historical training records</li>
                                        <li className="h6">Updated content assignments</li>
                                        <li className="h6">Clear traceability</li>
                                    </ul>

                                    <p className="h5 text-sb resources-deatil-sub-para">This ensures inspectors can verify that users were trained on the correct versions.</p>

                                </div>

                                <div className="blog-details-paragraph">
                                    <p className="h5 text-sb resources-deatil-sub-para">4. Faster Audit Responses</p>
                                    
                                    <p className="h6 text-rg">Instead of manually compiling spreadsheets, teams can instantly: </p>
                                    
                                    <ul>
                                        <li className="h6">Generate training reports</li>
                                        <li className="h6">Filter by role or study</li>
                                        <li className="h6">Export inspection-ready documentation</li>
                                    </ul>
                                </div>

                                <div className="blog-details-paragraph">
                                    <p className="h5 text-sb resources-deatil-sub-para">5. Reduced Compliance Risk</p>
                                    
                                    <p className="h6 text-rg">Well-trained users make fewer mistakes, leading to: </p>
                                    
                                    <ul>
                                        <li className="h6">Fewer deviations</li>
                                        <li className="h6">Stronger data integrity</li>
                                        <li className="h6">Improved inspection outcomes</li>
                                    </ul>
                                </div>

                                <p className="h5 text-sb resources-deatil-sub-para">Conclusion</p>
                                
                                <p className="h6 text-rg resources-deatil-sub-para">Training portals are no longer just learning tools—they are compliance enablers. By centralizing, tracking, and validating training, organizations significantly improve audit readiness and regulatory confidence.</p>
                            </div>

                            <div className="detail-card-btn">
                                <h3 className="text-md">Further Reading</h3>

                                <Link href="/Resources" className="btn-link-padding site-radius-10 text-18 text-rg">View All</Link>
                            </div>

                            <div className="detail-cards-wrapper">
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}