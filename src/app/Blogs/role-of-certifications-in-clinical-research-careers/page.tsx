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
                                    <TabsTrigger className="text-18 text-rg categories-trigger-buttons" value="clinicalresearch"> <Link href="/Resources">Learning Guides</Link></TabsTrigger>
                                    <TabsTrigger className="text-18 text-rg categories-trigger-buttons" value="portaltraining"> <Link href="/Resources">Best Practices</Link></TabsTrigger>
                                    <TabsTrigger className="text-18 text-rg categories-trigger-buttons" value="handsonlearning"> <Link href="/Resources">Updates & Insights</Link></TabsTrigger>
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
                                        <BreadcrumbPage className="text-18 text-rg">The Role of Clinical Research Certification in Advancing Healthcare</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>

                            <h2 className="text-sb resources-deatil-head">The Role of Clinical Research Certification in Advancing Healthcare</h2>

                            <p className="h6 text-rg resources-deatil-para">As clinical trials become more complex and increasingly dependent on digital systems, portal-specific training is emerging as a critical differentiator for study success. Traditional, one-size-fits-all training approaches no longer meet the needs of sites juggling multiple platforms, sponsors, and protocols.</p>

                            <Image src="/images/resources/learning-guides-blog-2.webp" alt="portaltraining" width="1200" height="640" className="resources-detail-img-1 site-radius-20"></Image>

                            <div className="sharedby-name">
                                <div className="sharedby-date">
                                    <span className="text-18 text-rg text-grey">Smit Shah</span>

                                    <span className="text-18 text-rg text-grey">December 10, 2025</span>
                                </div>

                                <div className="social-icons">

                                </div>
                            </div>

                            <div className="resources-detail-paragraphs">
                                <p className="h6 text-rg resources-deatil-sub-para">One of the primary roles of clinical research certification is to standardize knowledge and skills across the industry. Certified professionals are trained to understand clinical trial protocols, regulatory guidelines, informed consent processes, and adverse event reporting. This ensures that research is conducted consistently, accurately, and ethically, regardless of geographic location or organization.</p>

                                <p className="h6 text-rg resources-deatil-sub-para">Certification also encourages continuous learning. Many programs require ongoing education to maintain credentials, keeping professionals updated with evolving regulations, technologies, and best practices.</p>
                                
                                <p className="h6 text-rg resources-deatil-sub-para"></p>
                            </div>

                            <div className="resources-detail-paragraphs text-block">
                                <h3 className="text-md">Ensuring Ethical and Regulatory Compliance</h3>

                                <p className="h6 text-rg resources-deatil-sub-para">Clinical trials are governed by strict ethical and regulatory frameworks to protect human subjects. Certification programs emphasize compliance with international standards such as ICH-GCP and local regulatory requirements.</p>
                                <p className="h6 text-rg resources-deatil-sub-para">By holding certification, professionals demonstrate their ability to:</p>

                                <ul>
                                    <li>Protect participant rights, safety, and confidentiality</li>
                                    <li>Maintain accurate and transparent documentation</li>
                                    <li>Adhere to regulatory and institutional guidelines</li>
                                </ul>

                                <p className="h6 text-rg resources-deatil-sub-para">This reduces the risk of protocol deviations, data integrity issues, and regulatory violations.</p>
                                <p className="h6 text-rg resources-deatil-sub-para"></p>
                            </div>

                            <div className="resources-detail-paragraphs text-block">
                                <h3 className="text-md">Improving Research Quality and Credibility</h3>
                            
                                <p className="h6 text-rg resources-deatil-sub-para">Certified clinical research professionals contribute directly to <b>higher-quality research outcomes.</b> Their training helps ensure that data collected during trials is accurate, reliable, and reproducible. High-quality data increases the likelihood of regulatory approval and strengthens confidence among sponsors, regulators, and the scientific community.</p>
                                
                                <p className="h6 text-rg resources-deatil-sub-para">From an organizational perspective, employing certified staff enhances institutional credibility and can improve success rates in audits and inspections.</p>
                            </div>

                            <div className="resources-detail-paragraphs text-block">
                                <h3 className="text-md">Advancing Career Opportunities</h3>
                            
                                <p className="h6 text-rg resources-deatil-sub-para">Clinical research certification is also a powerful tool for <b>career advancement</b>. Employers increasingly prefer or require certification when hiring or promoting research staff. Certification can lead to:</p>
                                
                                <ul>
                                    <li>Increased job opportunities</li>
                                    <li>Higher earning potential</li>
                                    <li>Professional recognition and leadership roles</li>
                                </ul>

                                <p className="h6 text-rg resources-deatil-sub-para">For early-career professionals, certification provides a competitive edge, while experienced professionals benefit from validation of their expertise.</p>
                            </div>

                            <div className="resources-detail-paragraphs text-block">
                                <h3 className="text-md">Supporting Global Clinical Research Standards</h3>

                                <p className="h6 text-rg resources-deatil-sub-para">As clinical trials expand globally, certification helps harmonize research standards across countries and regions. Certified professionals share a common understanding of ethical conduct and regulatory expectations, facilitating collaboration in multinational studies and accelerating the development of innovative therapies.</p>
                            </div>

                            <div className="resources-detail-paragraphs text-block">
                                <h3 className="text-md">Conclusion</h3>

                                <p className="h6 text-rg resources-deatil-sub-para">Clinical research certification plays a crucial role in strengthening the clinical research workforce and safeguarding the integrity of clinical trials. By promoting competence, ethical conduct, regulatory compliance, and professional growth, certification contributes significantly to advancing healthcare and improving patient outcomes. As the demand for high-quality clinical research continues to grow, certification will remain a cornerstone of excellence.</p>
                            </div>

                            <div className="detail-card-btn">
                                <h3 className="text-md">Further Reading</h3>

                                <Link href="/Resources" className="btn-link-padding site-radius-10 text-18 text-rg">View All</Link>
                            </div>

                            <div className="detail-cards-wrapper">
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}