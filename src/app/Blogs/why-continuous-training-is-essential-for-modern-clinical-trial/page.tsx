"use client"

import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator,} from "@/components/ui/breadcrumb"

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
                                        <BreadcrumbPage className="text-18 text-rg">Why Continuous Training Is Essential for Modern Clinical Trial Platforms</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>

                            <h2 className="text-sb resources-deatil-head">Why Continuous Training Is Essential for Modern Clinical Trial Platforms</h2>

                            <p className="h6 text-rg resources-deatil-para">Clinical trial platforms are no longer static tools. They evolve continuously due to regulatory changes, technology upgrades, and operational improvements. In this dynamic environment, one-time training is insufficient.</p>

                            <Image src="/images/resourcesdetail/updates-and-insights-blog-1.webp" alt="portaltraining" width="1200" height="640" className="resources-detail-img-1 site-radius-20"></Image>

                            <div className="sharedby-name">
                                <div className="sharedby-date">
                                    <span className="text-18 text-rg text-grey">Smit Shah</span>

                                    <span className="text-18 text-rg text-grey">December 25, 2025</span>
                                </div>

                                <div className="social-icons">

                                </div>
                            </div>

                            <div className="resources-detail-paragraphs">
                                <p className="h6 text-rg resources-deatil-sub-para">Continuous training has become essential for maintaining compliance, ensuring data quality, and maximizing platform value across studies.</p>

                                <div className="blog-details-paragraph">
                                    <p className="h5 text-sb resources-deatil-sub-para">1. Clinical Systems Change Faster Than Ever</p>
                                    
                                    <p className="h6 text-rg">Modern platforms release frequent updates:</p>
                                    
                                    <ul>
                                        <li className="h6">New compliance checks</li>
                                        <li className="h6">Enhanced reporting</li>
                                        <li className="h6">Workflow optimizations</li>
                                        <li className="h6">Security improvements</li>
                                    </ul>

                                    <p className="h6 text-rg resources-deatil-sub-para">Without ongoing training, users may unknowingly misuse features or bypass controls.</p>
                                </div>

                                <div className="blog-details-paragraph">
                                    <p className="h5 text-sb resources-deatil-sub-para">2. Continuous Training Reduces Operational Risk</p>

                                    <p className="h6 text-rg">Untrained users are one of the biggest sources of: </p>
                                    
                                    <ul>
                                        <li className="h6">Data entry errors</li>
                                        <li className="h6">Protocol deviations</li>
                                        <li className="h6">Audit findings</li>
                                        <li className="h6">Payment discrepancies</li>
                                    </ul>

                                    <p className="h6 text-rg resources-deatil-sub-para">Regular training ensures users apply the latest best practices consistently.</p>
                                </div>
                                
                                <div className="blog-details-paragraph">
                                    <p className="h5 text-sb resources-deatil-sub-para">3. Supports Multi-Study and Multi-Role Environments</p>
                                    
                                    <p className="h6 text-rg">Many users work across multiple studies with different configurations. Continuous training helps: </p>
                                    
                                    <ul>
                                        <li className="h6">Reinforce study-specific workflows</li>
                                        <li className="h6">Reduce confusion between protocols</li>
                                        <li className="h6">Maintain consistency across trials</li>
                                    </ul>

                                </div>

                                <div className="blog-details-paragraph">
                                    <p className="h5 text-sb resources-deatil-sub-para">4. Improves Adoption of New Features</p>
                                    
                                    <p className="h6 text-rg">Organizations often underutilize platform capabilities due to lack of awareness. Training portals help drive adoption through:  </p>
                                    
                                    <ul>
                                        <li className="h6">Feature update modules</li>
                                        <li className="h6">Release-based learning paths</li>
                                        <li className="h6">Targeted role-specific updates</li>
                                    </ul>
                                </div>

                                <div className="blog-details-paragraph">
                                    <p className="h5 text-sb resources-deatil-sub-para">5. Strengthens Inspection Readiness</p>
                                    
                                    <p className="h6 text-rg">Auditors expect proof that users are trained on current systems. Continuous training provides: </p>
                                    
                                    <ul>
                                        <li className="h6">Up-to-date training records</li>
                                        <li className="h6">Evidence of regulatory awareness</li>
                                        <li className="h6">Reduced inspection stress</li>
                                    </ul>
                                </div>

                                <p className="h5 text-sb resources-deatil-sub-para">Conclusion</p>
                                
                                <p className="h6 text-rg resources-deatil-sub-para">Continuous training is no longer optional. It is a strategic requirement for modern clinical operations, ensuring compliance, efficiency, and long-term platform success.</p>
                            </div>

                            <div className="detail-card-btn">
                                <h3 className="text-md">Further Reading</h3>

                                <Link href="/Resources" className="btn-link-padding site-radius-10 text-18 text-rg">View All</Link>
                            </div>

                            <div className="detail-cards-wrapper">
                                <Link href="/Blogs/how-training-portal-improve-compliance-readiness-during-audits-introduction" className="resources-cards card-2">
                                    <Image src="/images/resourcesdetail/updates-and-insights-blog-2.webp" alt="portaltraining" width="585" height="312" className="portaltraining-1 site-radius-20"></Image>
                                    
                                    <div className="date-cate-span">
                                        <span className="text-16 text-rg text-grey">Smit Shah</span>

                                        <span className="text-16 text-rg text-grey">January 03, 2026</span>
                                    </div>

                                    <h3 className="h5 text-md">How Training Portals Improve Compliance Readiness During Audits</h3>

                                    <p className="h6 text-rg text-grey">Audits and inspections are inevitable in clinical research. One of the first areas inspectors examine is training documentation.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}