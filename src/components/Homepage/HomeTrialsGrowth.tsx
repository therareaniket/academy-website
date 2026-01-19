"use client"

import Image from "next/image";
import Link from "next/link";
import { delay, motion, scale } from "framer-motion"
import { useEffect, useState } from "react";

type TrialGrowthProps = {
    certificationTitle: string;
    certificationSubtitle: string;
    certificationUsp1: string;
    certificationUsp2: string;
    certificationUsp3: string;
}

export default function TrialGrowth( { certificationTitle, certificationSubtitle, certificationUsp1, certificationUsp2, certificationUsp3 } : TrialGrowthProps ){

        const [isMobile, setIsMobile] = useState(false);
    
        useEffect(() => {
            const mediaQuery = window.matchMedia("(max-width: 639px)");
            const handleChange = () => setIsMobile(mediaQuery.matches);
    
            handleChange(); // initial check
            mediaQuery.addEventListener("change", handleChange);
    
            return () => mediaQuery.removeEventListener("change", handleChange);
        }, []);

    const homeCertificatesAnimations = (typeof window !== "undefined" && window.innerWidth >= 1200) ? {
		title_ltr_initial: { x: "0px", opacity: 1, },
		title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6 } },

		subTitle_ltr_initial: { x: "0px", opacity: 1, },
		subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1.5, duration: 0.6 } },

        img_rtl_initial: { x: "50px", opacity: 0, },
        img_rtl_animate: { x: "0px", opacity: 1, transition: { delay: 2, duration: 0.6 } },

        usp_list_initial: { y: "50px", opacity: 0, },
        usp_list_animate: { y: "0px", opacity: 1, },

        btn_popup_initial: { scale: 0, opacity: 0, },
        btn_popup_animate: { scale: 1, opacity: 1, }, 
	} : {

        title_ltr_initial: { x: "-50px", opacity: 0, },
		title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6 } },

		subTitle_ltr_initial: { x: "-50px", opacity: 0, },
		subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1.5, duration: 0.6 } },

        img_rtl_initial: { x: "-50px", opacity: 0, },
        img_rtl_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6 } },

        usp_list_initial: { y: "50px", opacity: 0, },
        usp_list_animate: { y: "0px", opacity: 1, },

        btn_popup_initial: { scale: 0, opacity: 0, },
        btn_popup_animate: { scale: 1, opacity: 1, }, 
    }

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="trial-grwth-wrapper">
                        <div className="trial-grwth-details">
                            <motion.h2 initial={homeCertificatesAnimations.title_ltr_initial} whileInView={homeCertificatesAnimations.title_ltr_animate} viewport={{ once: true, amount: 0.8 }}>{certificationTitle}</motion.h2>

                            <motion.p className="h6" initial={homeCertificatesAnimations.subTitle_ltr_initial} whileInView={homeCertificatesAnimations.subTitle_ltr_animate} viewport={{ once: true, amount: isMobile ? 0.4 : 0.8 }}>{certificationSubtitle}</motion.p>
                            
                            <p className="h6"></p>

                            {/* <div className="certification-links">
                                <Link href="/Courses" className="link-padding line-white site-radius-10 text-18 text-md">Explore Courses</Link>

                                <Link href="/ComingSoon" className="link-padding link-blue site-radius-10 text-18 text-md">Get Certified</Link>
                            </div> */}
                        </div>
                        
                        <motion.div className="certifi-img-wrapper" initial={homeCertificatesAnimations.img_rtl_initial} whileInView={homeCertificatesAnimations.img_rtl_animate} viewport={{ once: true, amount: isMobile ? 0.4 : 0.8 }}>
                            <Image src="/images/homepage/certifications-banner-new.webp" alt="certifications-banner" width={750} height={546} priority={false} className="certifications-banner site-radius-20"></Image>
                        </motion.div>
                    </div>

                    <div className="certificate-usp">
                        <motion.div className="certifi-usp" initial={homeCertificatesAnimations.usp_list_initial} whileInView={homeCertificatesAnimations.usp_list_animate} viewport={{ once: true }} transition={{delay: isMobile ? 1 : 2.5, duration: 0.6 }}>
                            <span>
                                <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.32462 3.29915C10.7539 -1.09971 16.9771 -1.09971 18.4064 3.29915V3.29915C19.0456 5.26639 20.8788 6.5983 22.9473 6.5983V6.5983C27.5725 6.5983 29.4956 12.5169 25.7537 15.2356V15.2356C24.0803 16.4514 23.3801 18.6065 24.0193 20.5737V20.5737C25.4485 24.9726 20.4138 28.6305 16.6719 25.9119V25.9119C14.9985 24.696 12.7325 24.696 11.0591 25.9119V25.9119C7.31718 28.6305 2.28249 24.9726 3.71177 20.5737V20.5737C4.35096 18.6065 3.65073 16.4514 1.9773 15.2356V15.2356C-1.7646 12.5169 0.158484 6.5983 4.78373 6.5983V6.5983C6.8522 6.5983 8.68542 5.26639 9.32462 3.29915V3.29915Z" fill="black"/>
                                </svg>
                            </span>

                            <p className="h5 text-md">{certificationUsp1}</p>
                        </motion.div>

                        <motion.div className="certifi-usp" initial={homeCertificatesAnimations.usp_list_initial} whileInView={homeCertificatesAnimations.usp_list_animate} viewport={{ once: true }} transition={{delay: isMobile ? 1 : 2.5, duration: 0.6 }}>
                            <span>
                                <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5625 20.8H15.4375L14.5031 15.64C15.0448 15.3733 15.4714 14.9867 15.7828 14.48C16.0943 13.9733 16.25 13.4133 16.25 12.8C16.25 11.92 15.9318 11.1667 15.2953 10.54C14.6589 9.91333 13.8938 9.6 13 9.6C12.1062 9.6 11.3411 9.91333 10.7047 10.54C10.0682 11.1667 9.75 11.92 9.75 12.8C9.75 13.4133 9.90573 13.9733 10.2172 14.48C10.5286 14.9867 10.9552 15.3733 11.4969 15.64L10.5625 20.8ZM13 32C9.23542 31.0667 6.1276 28.94 3.67656 25.62C1.22552 22.3 0 18.6133 0 14.56V4.8L13 0L26 4.8V14.56C26 18.6133 24.7745 22.3 22.3234 25.62C19.8724 28.94 16.7646 31.0667 13 32ZM13 28.64C15.8167 27.76 18.1458 26 19.9875 23.36C21.8292 20.72 22.75 17.7867 22.75 14.56V7L13 3.4L3.25 7V14.56C3.25 17.7867 4.17083 20.72 6.0125 23.36C7.85417 26 10.1833 27.76 13 28.64Z" fill="#1C1B1F"/>
                                </svg>
                            </span>

                            <p className="h5 text-md">{certificationUsp2}</p>
                        </motion.div>

                        <motion.div className="certifi-usp" initial={homeCertificatesAnimations.usp_list_initial} whileInView={homeCertificatesAnimations.usp_list_animate} viewport={{ once: true }} transition={{delay: isMobile ? 1 : 2.5, duration: 0.6 }}>
                            <Image src="/images/general/meter.png" alt="meter" width={40} height={40} priority={false}></Image>

                            <p className="h5 text-md">{certificationUsp3}</p>
                        </motion.div>
                    </div>

                    <div className="certification-links certi-link-mobile">
                        {/* <Link href="/Courses" className="link-padding line-white site-radius-10 text-18 text-md">Explore Courses</Link> */}
                        
                        {/* <motion.span initial={homeCertificatesAnimations.btn_popup_initial} whileInView={homeCertificatesAnimations.btn_popup_animate} viewport={{ once: true }} transition={{delay: 3, duration: 0.5 }}> */}
                            <Link href="/ComingSoon" className="link-padding link-blue site-radius-10 text-18 text-md">Get Certified</Link>
                        {/* </motion.span> */}
                    </div>
                </div>
            </section>
        </>
    );
}