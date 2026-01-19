"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";8

type HomeBlogsProps = {
    blogsTitle: string;
    blogsSubtitle: string;
}

export default function HomeBlogs( { blogsTitle, blogsSubtitle } : HomeBlogsProps ) {

    const homeBlogsAnimations = (typeof window !== "undefined" && window.innerWidth >= 1200) ?  {
		title_ltr_initial: { x: "0px", opacity: 1, },
		title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6  } },

		subTitle_ltr_initial: { x: "0px", opacity: 1, },
		subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1.5, duration: 0.6  } },

        blogItem_ttb_initial: { y: "-50px", opacity: 0 },
        blogItem_ttb_animate: { y: "0px", opacity: 1, transition: { duration: 0.6  } }
    } : {
		title_ltr_initial: { x: "-50px", opacity: 0, },
		title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6  } },

		subTitle_ltr_initial: { x: "-50px", opacity: 0, },
		subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1.5, duration: 0.6  } },  
        
        blogItem_ttb_initial: { y: "-50px", opacity: 0 },
        blogItem_ttb_animate: { y: "0px", opacity: 1, transition: { duration: 0.6  } }
    }

    return (
        <>
            <section className="section" style={{ paddingTop: 0, }}>
                <div className="container">
                    <div className="hm-blog-headings">
                        <motion.h2 initial={homeBlogsAnimations.title_ltr_initial} whileInView={homeBlogsAnimations.title_ltr_animate} viewport={{ once: true, amount: 0.8 }}>{blogsTitle}</motion.h2>

                        <motion.p initial={homeBlogsAnimations.subTitle_ltr_initial} whileInView={homeBlogsAnimations.subTitle_ltr_animate} viewport={{ once: true, amount: 0.8 }} className="h6 text-rg">{blogsSubtitle}</motion.p>
                    </div>

                    <div className="blog-showcase-wrapper">
                        <div className="blog-showcase">
                            <div className="blog-row">
                                <Link href="/ResourcesDetail" className="blog-list-lg">
                                    {/* <motion.span initial={homeBlogsAnimations.blogItem_ttb_initial} whileInView={homeBlogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 1 }} className="inline-block" > */}
                                        <Image src="/images/homepage/home-blog-1.webp" alt="home-blog-lg" width={705} height={377} className="site-radius-20"></Image>
                                    {/* </motion.span> */}

                                    <motion.h3 initial={homeBlogsAnimations.blogItem_ttb_initial} whileInView={homeBlogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.5 }} className="h4 text-md">Why Portal-Specific Training is the Future of Clinical Trials</motion.h3>
                                </Link>

                                <Link href="/Blogs/best-practices-for-training-users-on-clinical-trial-platforms" className="blog-list-sm">
                                    {/* <motion.span initial={homeBlogsAnimations.blogItem_ttb_initial} whileInView={homeBlogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 1 }} className="inline-block" > */}
                                        <Image src="/images/resourcesdetail/best-practices-blog-1.webp" alt="home-blog-lg" width={705} height={377} className="site-radius-20"></Image>
                                    {/* </motion.span> */}

                                    <motion.h3 initial={homeBlogsAnimations.blogItem_ttb_initial} whileInView={homeBlogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.5 }} className="h4 text-md">Best Practices for Training Users on Clinical Trial Platforms</motion.h3>
                                </Link>
                            </div>

                            <div className="blog-row">
                                <Link href="/Blogs/why-continuous-training-is-essential-for-modern-clinical-trial" className="blog-list-lg">
                                    {/* <motion.span initial={homeBlogsAnimations.blogItem_ttb_initial} whileInView={homeBlogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} className="inline-block" > */}
                                        <Image src="/images/resourcesdetail/updates-and-insights-blog-1.webp" alt="home-blog-lg" width={705} height={377} className="site-radius-20"></Image>
                                    {/* </motion.span> */}

                                    <motion.h3 initial={homeBlogsAnimations.blogItem_ttb_initial} whileInView={homeBlogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.5 }} className="h4 text-md">Why Training Is Essential for Modern Clinical Trial Platforms</motion.h3>
                                </Link>

                                <Link href="/Blogs/how-training-portal-improve-compliance-readiness-during-audits-introduction" className="blog-list-sm">
                                    {/* <motion.span initial={homeBlogsAnimations.blogItem_ttb_initial} whileInView={homeBlogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} className="inline-block" > */}
                                        <Image src="/images/resourcesdetail/updates-and-insights-blog-2-updated.webp" alt="home-blog-lg" width={705} height={377} className="site-radius-20"></Image>
                                    {/* </motion.span> */}

                                    <motion.h3 initial={homeBlogsAnimations.blogItem_ttb_initial} whileInView={homeBlogsAnimations.blogItem_ttb_animate} viewport={{ once: true, amount: 0.8 }} transition={{ delay: 0.5 }} className="h4 text-md">How To Improve Compliance Readiness During Audits</motion.h3>
                                </Link>
                            </div>
                        </div>

                        <div className="blog-showcase blog-mobile" >
                            <div className="blog-row">
                                <Link href="/ResourcesDetail" className="blog-list-lg">
                                    <Image src="/images/homepage/home-blog-1.webp" alt="home-blog-lg" width={705} height={377} className="site-radius-20"></Image>

                                    <h3 className="h4 text-md">Why Portal-Specific Training is the Future of Clinical Trials</h3>
                                </Link>

                                <Link href="/Blogs/best-practices-for-training-users-on-clinical-trial-platforms" className="blog-list-sm">
                                    <Image src="/images/resourcesdetail/best-practices-blog-1.webp" alt="home-blog-lg" width={705} height={377} className="site-radius-20"></Image>

                                    <h3 className="h4 text-md">Best Practices for Training Users on Clinical Trial Platforms</h3>
                                </Link>

                                <Link href="/Blogs/why-continuous-training-is-essential-for-modern-clinical-trial" className="blog-list-lg">
                                    <Image src="/images/resourcesdetail/updates-and-insights-blog-1.webp" alt="home-blog-lg" width={705} height={377} className="site-radius-20"></Image>

                                    <h3 className="h4 text-md">Why Training Is Essential for Modern Clinical Trial Platforms</h3>
                                </Link>

                                <Link href="/Blogs/how-training-portal-improve-compliance-readiness-during-audits-introduction" className="blog-list-sm">
                                    <Image src="/images/resourcesdetail/updates-and-insights-blog-2-updated.webp" alt="home-blog-lg" width={705} height={377} className="site-radius-20"></Image>

                                    <h3 className="h4 text-md">How To Improve Compliance Readiness During Audits</h3>
                                </Link>
                            </div>
                        </div>
                    </div>  
                </div>
            </section>
        </>
    );
}