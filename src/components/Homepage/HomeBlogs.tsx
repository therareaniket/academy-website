"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeBlogs() {

    const homeBlogsAnimations = (typeof window !== "undefined" && window.innerWidth >= 1200) ?  {
		title_ltr_initial: { x: "-50px", opacity: 0, },
		title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6  } },

		subTitle_ltr_initial: { x: "50px", opacity: 0, },
		subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1.5, duration: 0.6  } },

        blogItem_ttb_initial: { y: "-50px", opacity: 0 },
        blogItem_ttb_animate: { y: "0px", opacity: 1 }
    } : {

		title_ltr_initial: { x: "-50px", opacity: 0, },
		title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6  } },

		subTitle_ltr_initial: { x: "-50px", opacity: 0, },
		subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1.5, duration: 0.6  } },  
        
        blogItem_ttb_initial: { y: "-50px", opacity: 0 },
        blogItem_ttb_animate: { y: "0px", opacity: 1 }
    }

    return (
        <>
            <section className="section" style={{ paddingTop: 0, }}>
                <div className="container">
                    <div className="hm-blog-headings">
                        <motion.h2 initial={homeBlogsAnimations.title_ltr_initial} whileInView={homeBlogsAnimations.title_ltr_animate} viewport={{ once: true, amount: 0.8 }}>Discover. Advance. Excel.</motion.h2>

                        <motion.p initial={homeBlogsAnimations.subTitle_ltr_initial} whileInView={homeBlogsAnimations.subTitle_ltr_animate} viewport={{ once: true, amount: 0.8 }} className="h6 text-rg">Explore insightful articles bridging learning to real-world portal workflows and success.</motion.p>
                    </div>

                    <div className="blog-showcase-wrapper">
                        <div className="blog-showcase">
                            <div className="blog-row">
                                <div className="blog-list-lg">
                                    {/* <motion.span initial={homeBlogsAnimations.blogItem_ttb_initial} whileInView={homeBlogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 1 }} className="inline-block" > */}
                                        <Image src="/images/homepage/home-blog-1.webp" alt="home-blog-lg" width={705} height={377} className="site-radius-20"></Image>
                                    {/* </motion.span> */}

                                    <motion.h3 initial={homeBlogsAnimations.blogItem_ttb_initial} whileInView={homeBlogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.5 }} className="h4 text-md">Why Portal-Specific Training is the Future of Clinical Trials</motion.h3>
                                </div>

                                <div className="blog-list-sm">
                                    {/* <motion.span initial={homeBlogsAnimations.blogItem_ttb_initial} whileInView={homeBlogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 1 }} className="inline-block" > */}
                                        <Image src="/images/homepage/home-blog-2.webp" alt="home-blog-lg" width={705} height={377} className="site-radius-20"></Image>
                                    {/* </motion.span> */}

                                    <motion.h3 initial={homeBlogsAnimations.blogItem_ttb_initial} whileInView={homeBlogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.5 }} className="h4 text-md">Hands-On Learning vs. Theory: Why Practical Training Wins</motion.h3>
                                </div>
                            </div>

                            <div className="blog-row">
                                <div className="blog-list-lg">
                                    {/* <motion.span initial={homeBlogsAnimations.blogItem_ttb_initial} whileInView={homeBlogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} className="inline-block" > */}
                                        <Image src="/images/homepage/home-blog-3.webp" alt="home-blog-lg" width={705} height={377} className="site-radius-20"></Image>
                                    {/* </motion.span> */}

                                    <motion.h3 initial={homeBlogsAnimations.blogItem_ttb_initial} whileInView={homeBlogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.5 }} className="h4 text-md">The Role of Certifications in Clinical Research Careers</motion.h3>
                                </div>

                                <div className="blog-list-sm">
                                    {/* <motion.span initial={homeBlogsAnimations.blogItem_ttb_initial} whileInView={homeBlogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} className="inline-block" > */}
                                        <Image src="/images/homepage/home-blog-4.webp" alt="home-blog-lg" width={705} height={377} className="site-radius-20"></Image>
                                    {/* </motion.span> */}

                                    <motion.h3 initial={homeBlogsAnimations.blogItem_ttb_initial} whileInView={homeBlogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.5 }} className="h4 text-md">How Portal Expertise Improves Clinical Trials Accuracy</motion.h3>
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