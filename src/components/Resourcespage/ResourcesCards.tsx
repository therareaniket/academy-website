import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image";
import Link from "next/link";

export default function ResourcesCards() {
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
                                        <Link href="./ResourcesDetail" className="resources-cards card-1">
                                            <Image src="/images/resources/resources-card-1-img.webp" alt="portaltraining" width="585" height="312" className="portaltraining-1"></Image>
                                            <div className="date-cate-span">
                                                <span className="text-16 text-rg text-grey">Siddharth Shah</span>

                                                <span className="text-16 text-rg text-grey">September 10, 2025</span>
                                            </div>

                                            <h3 className="h5 text-md">Why Portal-Specific Training is the Future of Clinical Trials</h3>

                                            <p className="h6 text-rg text-grey">Portal-specific training is transforming clinical trials by empowering sites to confidently use the exact digital tools needed for fast, error-free study execution.</p>
                                        </Link>

                                        <Link href="./ResourcesDetail" className="resources-cards card-2">
                                            <Image src="/images/resources/resources-card-2-img.webp" alt="portaltraining" width="585" height="312" className="portaltraining-1"></Image>
                                            <div className="date-cate-span">
                                                <span className="text-16 text-rg text-grey">Somya Patel</span>

                                                <span className="text-16 text-rg text-grey">October 12, 2025  </span>
                                            </div>

                                            <h3 className="h5 text-md">Hands-On Learning vs. Theory: Why Practical Training Wins Every Time</h3>

                                            <p className="h6 text-rg text-grey">Practical exposure enables learners to apply knowledge in real-world scenarios, making hands-on training more effective than traditional theoretical learning.</p>
                                        </Link>

                                        <Link href="./ResourcesDetail" className="resources-cards card-3">
                                            <Image src="/images/resources/resources-card-3-img.webp" alt="portaltraining" width="585" height="312" className="portaltraining-1"></Image>
                                            <div className="date-cate-span">
                                                <span className="text-16 text-rg text-grey">Khushi Soni</span>

                                                <span className="text-16 text-rg text-grey">October 14, 2025 </span>
                                            </div>

                                            <h3 className="h5 text-md">How Portal Expertise Improves Clinical Trial Accuracy</h3>

                                            <p className="h6 text-rg text-grey">Mastering clinical trial portals reduces errors, improves compliance, and enhances overall trial efficiency across research teams.</p>
                                        </Link>

                                        <Link href="./ResourcesDetail" className="resources-cards card-4">
                                            <Image src="/images/resources/resources-card-4-img.webp" alt="portaltraining" width="585" height="312" className="portaltraining-1"></Image>
                                            <div className="date-cate-span">
                                                <span className="text-16 text-rg text-grey">Arjun Malhotra</span>

                                                <span className="text-16 text-rg text-grey">September 10, 2025 </span>
                                            </div>

                                            <h3 className="h5 text-md">The Role of Certifications in Clinical Research Careers</h3>

                                            <p className="h6 text-rg text-grey">Industry-recognized certifications validate skills, improve employability, and open doors to advanced roles in clinical research.</p>
                                        </Link>

                                        <Link href="./ResourcesDetail" className="resources-cards card-5">
                                            <Image src="/images/resources/resources-card-5-img.webp" alt="portaltraining" width="585" height="312" className="portaltraining-1"></Image>
                                            <div className="date-cate-span">
                                                <span className="text-16 text-rg text-grey">Kavita Rao</span>

                                                <span className="text-16 text-rg text-grey">September 10, 2025</span>
                                            </div>

                                            <h3 className="h5 text-md">Building Industry-Ready Skills Through Portal Based Training</h3>

                                            <p className="h6 text-rg text-grey">Portal-based training equips learners with hands-on experience using real industry platforms, bridging the gap between academic learning and workplace expectations.</p>
                                        </Link>

                                        <Link href="./ResourcesDetail" className="resources-cards card-6">
                                            <Image src="/images/resources/resources-card-6-img.webp" alt="portaltraining" width="585" height="312" className="portaltraining-1"></Image>
                                            <div className="date-cate-span">
                                                <span className="text-16 text-rg text-grey">Suresh Nambiar</span>

                                                <span className="text-16 text-rg text-grey">October 12, 2025</span>
                                            </div>

                                            <h3 className="h5 text-md">Why Real-World Project Experience Matters in Clinical Research Education</h3>

                                            <p className="h6 text-rg text-grey">Working on real-world clinical research projects enhances critical thinking, practical skills, and job readiness for aspiring professionals.</p>
                                        </Link>
                                    </div>
                                </TabsContent>

                                <TabsContent value="portaltraining">
                                    <div className="resources-card-wrapper">
                                        <div className="resources-cards card-1">
                                            <Image src="/images/resources/resources-card-1-img.webp" alt="portaltraining" width="585" height="312" className="portaltraining-1"></Image>
                                            <div className="date-cate-span">
                                                <span className="text-16 text-rg text-grey">Siddharth Shah</span>

                                                <span className="text-16 text-rg text-grey">September 10, 2025</span>
                                            </div>

                                            <h3 className="h5 text-md">Why Portal-Specific Training is the Future of Clinical Trials</h3>

                                            <p className="h6 text-rg text-grey">Portal-specific training is transforming clinical trials by empowering sites to confidently use the exact digital tools needed for fast, error-free study execution.</p>
                                        </div>

                                        <div className="resources-cards card-2">
                                            <Image src="/images/resources/resources-card-2-img.webp" alt="portaltraining" width="585" height="312" className="portaltraining-1"></Image>
                                            <div className="date-cate-span">
                                                <span className="text-16 text-rg text-grey">Somya Patel</span>

                                                <span className="text-16 text-rg text-grey">October 12, 2025 </span>
                                            </div>

                                            <h3 className="h5 text-md">Hands-On Learning vs. Theory: Why Practical Training Wins Every Time</h3>

                                            <p className="h6 text-rg text-grey">Practical exposure enables learners to apply knowledge in real-world scenarios, making hands-on training more effective than traditional theoretical learning.</p>
                                        </div>

                                        <div className="resources-cards card-3">
                                            <Image src="/images/resources/resources-card-3-img.webp" alt="portaltraining" width="585" height="312" className="portaltraining-1"></Image>
                                            <div className="date-cate-span">
                                                <span className="text-16 text-rg text-grey">Khushi Soni</span>

                                                <span className="text-16 text-rg text-grey">October 14, 2025</span>
                                            </div>

                                            <h3 className="h5 text-md">How Portal Expertise Improves Clinical Trial Accuracy</h3>

                                            <p className="h6 text-rg text-grey">Mastering clinical trial portals reduces errors, improves compliance, and enhances overall trial efficiency across research teams.</p>
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="handsonlearning">
                                    <div className="resources-card-wrapper">
                                        <div className="resources-cards card-1">
                                            <Image src="/images/resources/resources-card-1-img.webp" alt="portaltraining" width="585" height="312" className="portaltraining-1"></Image>
                                            <div className="date-cate-span">
                                                <span className="text-16 text-rg text-grey">Siddharth Shah</span>

                                                <span className="text-16 text-rg text-grey">September 10, 2025</span>
                                            </div>

                                            <h3 className="h5 text-md">Why Portal-Specific Training is the Future of Clinical Trials</h3>

                                            <p className="h6 text-rg text-grey">Portal-specific training is transforming clinical trials by empowering sites to confidently use the exact digital tools needed for fast, error-free study execution.</p>
                                        </div>

                                        <div className="resources-cards card-2">
                                            <Image src="/images/resources/resources-card-2-img.webp" alt="portaltraining" width="585" height="312" className="portaltraining-1"></Image>
                                            <div className="date-cate-span">
                                                <span className="text-16 text-rg text-grey">Somya Patel</span>

                                                <span className="text-16 text-rg text-grey">October 12, 2025</span>
                                            </div>

                                            <h3 className="h5 text-md">Hands-On Learning vs. Theory: Why Practical Training Wins Every Time</h3>

                                            <p className="h6 text-rg text-grey">Practical exposure enables learners to apply knowledge in real-world scenarios, making hands-on training more effective than traditional theoretical learning.</p>
                                        </div>

                                        <div className="resources-cards card-5">
                                            <Image src="/images/resources/resources-card-5-img.webp" alt="portaltraining" width="585" height="312" className="portaltraining-1"></Image>
                                            <div className="date-cate-span">
                                                <span className="text-16 text-rg text-grey">Kavita Rao</span>

                                                <span className="text-16 text-rg text-grey">September 10, 2025</span>
                                            </div>

                                            <h3 className="h5 text-md">Building Industry-Ready Skills Through Portal Based Training</h3>

                                            <p className="h6 text-rg text-grey">Portal-based training equips learners with hands-on experience using real industry platforms, bridging the gap between academic learning and workplace expectations.</p>
                                        </div>
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