"use client";

import Image from "next/image";
import { motion } from "framer-motion"

export default function ContactForm() {

    const contactTitleAnimations = {
        title_ltr_initial: { x: "-50px", opacity: 0, },
		title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 1 } },

		subTitle_ltr_initial: { x: "-50px", opacity: 0, },
		subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 2, duration: 1 } },

        image_rtl_initial: { x: "50px", opacity: 0, },
		image_rtl_animate: { x: "0px", opacity: 1, },
    }

    return (
        <>
            <section className="section" id="academy-form">
                <div className="container">
                    <div className="contact-form-wrapper">
                        <div className="contact-form-left">
                            <div className="contact-heading">
                                <motion.h2 initial={contactTitleAnimations.title_ltr_initial} whileInView={contactTitleAnimations.title_ltr_animate} viewport={{ once: true, amount: 0.8 }}>Your Clinical Trials Path Begins Here</motion.h2>

                                <motion.p initial={contactTitleAnimations.subTitle_ltr_initial} whileInView={contactTitleAnimations.subTitle_ltr_animate} viewport={{ once: true, amount: 0.8 }} className="h6 text-rg">DhatuAcademy experts connect fast for seamless enrollment across products.</motion.p>
                            </div>

                            <div className="contact-form-fields">
                                <div className="contact-form-label"><label htmlFor="" className="text-18 text-rg">Name</label> <span>*</span> </div>
                                <input type="text" name="" id="" className="site-radius-10 text-18 text-rg" />

                                <div className="contact-form-label"><label htmlFor="" className="text-18 text-rg">Email</label> <span>*</span> </div>
                                <input type="email" name="" id="" className="site-radius-10 text-18 text-rg" />

                                <div className="contact-form-label"><label htmlFor="" className="text-18 text-rg">Phone</label> <span>*</span> </div>
                                <input type="tel" name="" id="" className="site-radius-10 text-18 text-rg" />

                                <div className="contact-form-label"><label htmlFor="" className="text-18 text-rg">Course Name</label> <span>*</span> </div>
                                <input type="text" className="site-radius-10 text-18 text-rg" />

                                <div className="contact-form-label"><label htmlFor="" className="text-18 text-rg">Message</label></div>
                                <textarea name="" id="" className="site-radius-10 text-18 text-rg" ></textarea>
                            </div>

                            <button className="link-padding site-radius-10 cnct-submit-btn text-18 text-rg" type="submit">Send message</button>
                        </div>

                        <div className="contact-form-right">
                            <motion.div className="contact-form-image site-radius-40" initial={contactTitleAnimations.image_rtl_initial} whileInView={contactTitleAnimations.image_rtl_animate} viewport={{ once: true, amount: 0.5 }} transition= {{delay: 3, duration: 1}} >
                                <Image src="/images/contactpage/form-men-image.webp" alt="solu-hero-chart" width={568} height={582} className="form-men-image inline-block"></Image>
                            </motion.div>

                            <div className="form-cards-main">
                                <motion.div className="form-cards email-card site-radius-20" initial={contactTitleAnimations.image_rtl_initial} whileInView={contactTitleAnimations.image_rtl_animate} viewport={{ once: true, }} transition= {{ delay: 3.5, duration: 0.5 }} >
                                    <Image src="/images/contactpage/contact-card-mail.svg" alt="solu-hero-chart" width={33} height={26} className="contact-form-mail"></Image>
                                    <p className="text-18 text-rg">Email</p>
                                    <p className="h5 text-rg text-grey">enquiry@dhatuacademy.com</p>
                                </motion.div>

                                <motion.div className="form-cards phone-card site-radius-20" initial={contactTitleAnimations.image_rtl_initial} whileInView={contactTitleAnimations.image_rtl_animate} viewport={{ once: true, }} transition= {{ delay: 4, duration: 0.5 }} >
                                    <Image src="/images/contactpage/contact-card-call.svg" alt="solu-hero-chart" width={28} height={28} className="contact-form-call"></Image>
                                    <p className="text-18 text-rg">Phone Number</p>
                                    <p className="h5 text-rg text-grey">+1 512 843 2002</p>

                                </motion.div>

                                <motion.div className="form-cards location-card site-radius-20" initial={contactTitleAnimations.image_rtl_initial} whileInView={contactTitleAnimations.image_rtl_animate} viewport={{ once: true, }} transition= {{ delay: 4.5, duration: 0.5 }} >
                                    <Image src="/images/contactpage/contact-card-location.svg" alt="solu-hero-chart" width={23} height={33} className="contact-form-location"></Image>
                                    <p className="text-18 text-rg">Location</p>
                                    <p className="h5 text-rg text-grey">240, Newark, DE 19702, USA</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}