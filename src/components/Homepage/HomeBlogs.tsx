"use client"

import Image from "next/image";

export default function HomeBlogs() {
    return (
        <>
            <section className="section" style={{ paddingTop: 0, }}>
                <div className="container">
                    <div className="hm-blog-headings">
                        <h2>Discover. Advance. Excel.</h2>

                        <p className="h6 text-rg">Explore insightful articles bridging learning to real-world portal workflows and success.</p>
                    </div>

                    <div className="blog-showcase-wrapper">
                        <div className="blog-showcase">
                            <div className="blog-row">
                                <div className="blog-list-lg">
                                    <Image src="/images/homepage/home-blog-1.webp" alt="home-blog-lg" width={705} height={377} className="site-radius-20"></Image>

                                    <h3 className="h4 text-md">Why Portal-Specific Training is the Future of Clinical Trials</h3>
                                </div>

                                <div className="blog-list-sm">
                                    <Image src="/images/homepage/home-blog-2.webp" alt="home-blog-lg" width={705} height={377} className="site-radius-20"></Image>

                                    <h3 className="h4 text-md">Hands-On Learning vs. Theory: Why Practical Training Wins</h3>
                                </div>
                            </div>

                            <div className="blog-row">
                                <div className="blog-list-lg">
                                    <Image src="/images/homepage/home-blog-3.webp" alt="home-blog-lg" width={705} height={377} className="site-radius-20"></Image>

                                    <h3 className="h4 text-md">The Role of Certifications in Clinical Research Careers</h3>
                                </div>

                                <div className="blog-list-sm">
                                    <Image src="/images/homepage/home-blog-4.webp" alt="home-blog-lg" width={705} height={377} className="site-radius-20"></Image>

                                    <h3 className="h4 text-md">How Portal Expertise Improves Clinical Trials Accuracy</h3>
                                </div>
                            </div>
                        </div>

                        <div className="blog-showcase blog-mobile" >
                            <div className="blog-row">
                                <div className="blog-list-lg">
                                    <Image src="/images/homepage/home-blog-1.webp" alt="home-blog-lg" width={705} height={377} className="site-radius-20"></Image>

                                    <h3 className="h4 text-md">Why Portal-Specific Training is the Future of Clinical Trials</h3>
                                </div>

                                <div className="blog-list-sm">
                                    <Image src="/images/homepage/home-blog-2.webp" alt="home-blog-lg" width={705} height={377} className="site-radius-20"></Image>

                                    <h3 className="h4 text-md">Hands-On Learning vs. Theory: Why Practical Training Wins</h3>
                                </div>

                                <div className="blog-list-lg">
                                    <Image src="/images/homepage/home-blog-3.webp" alt="home-blog-lg" width={705} height={377} className="site-radius-20"></Image>

                                    <h3 className="h4 text-md">The Role of Certifications in Clinical Research Careers</h3>
                                </div>

                                <div className="blog-list-sm">
                                    <Image src="/images/homepage/home-blog-4.webp" alt="home-blog-lg" width={705} height={377} className="site-radius-20"></Image>

                                    <h3 className="h4 text-md">How Portal Expertise Improves Clinical Trials Accuracy</h3>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </section>
        </>
    );
}