"use client"

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function HomeTestimonials(){

    const testimonialDetails = [
        {
            name: "Priya S.",
            nameInitial: "P",
            designation: "Clinical Trials Professional",
            message: "DhatuAcademy transformed my clinical trials workflow across products. The hands-on modules and certifications gave me real proficiency for pros level work."
        },
        {
            name: "Raj K.",
            nameInitial: "R",
            designation: "Training Lead",
            message: "Perfect for trainers like me. Structured paths and compliance training make teaching clinical trials standards seamless and effective."
        },
        {
            name: "Anika M.",
            nameInitial: "A",
            designation: "New Learner",
            message: "Low cost standard access unlocked core skills fast. Now premium AI paths boost my learning on multiple platforms."
        },
        {
            name: "Vikram R.",
            nameInitial: "V",
            designation: "Compliance Specialist",
            message: "Expert SOP modules across clinical trials products built my compliance skills quickly. Certifications now showcase my proficiency everywhere."
        },
    ];

    // State to track active testimonial index
    const [activeIndex, setActiveIndex] = useState(3);

    // Handler for swapping testimonials
    const handleTestimonialClick = (clickedIndex: number) => {
        if (clickedIndex !== activeIndex) { setActiveIndex(clickedIndex); }};

    // Get the list of non-active testimonials
    const getListTestimonials = () => { return testimonialDetails.filter((_, index) => index !== activeIndex);};

    const listTestimonials = getListTestimonials();
    const activeTestimonial = testimonialDetails[activeIndex];

    const homeTestimonialsAnimations = (typeof window !== "undefined" && window.innerWidth >= 1200) ? {
		title_ltr_initial: { x: "-50px", opacity: 0, },
		title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6, } },

		subTitle_ltr_initial: { x: "-50px", opacity: 0, },
		subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 2, duration: 0.6, } },
    } : {

        title_ltr_initial: { x: "-50px", opacity: 0, },
		title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6, } },

		subTitle_ltr_initial: { x: "-50px", opacity: 0, },
		subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1.5, duration: 0.6, } },
    }

    return (
        <>
            <section className="section home-testimonials">
                <div className="container">
                    <div className="testimonial-headings">
                        <motion.h2 initial={ homeTestimonialsAnimations.title_ltr_initial } whileInView={ homeTestimonialsAnimations.title_ltr_animate } viewport={{ once: true, amount: 0.8 }}>Voices from Clinical Trials Learners</motion.h2>

                        <motion.p initial={ homeTestimonialsAnimations.subTitle_ltr_initial } whileInView={ homeTestimonialsAnimations.subTitle_ltr_animate } viewport={{ once: true, amount: 0.8 } } className="h6 text-rg">Real insights before your DhatuAcademy journey begins</motion.p>
                    </div>

                    <div className="testimonial-wrapper">
                        <div className="testimonial-lists">
                            {listTestimonials.map((testimonial, idx) => {
                                const originalIndex = testimonialDetails.findIndex(t => t === testimonial);
                                const tiltClass = idx === 0 ? 'tilt-up' : idx === 2 ? 'tilt-down' : '';
                                
                                return (
                                    <div  key={originalIndex} className={`testi-list site-radius-20 ${tiltClass}`} onClick={() => handleTestimonialClick(originalIndex)} style={{ cursor: 'pointer' }}>
                                        <div className="testi-list-inner-box">
                                            <div className="name-desig">
                                                <span className="name-initial text-18">{testimonial.nameInitial}</span>

                                                <div className="">
                                                    <p className="name h5 text-md">{testimonial.name}</p>
            
                                                    <p className="designation text-18">{testimonial.designation}</p>
                                                </div>
                                            </div>

                                            <span className="ratings text-18 text-md">
                                                <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.32462 3.29915C10.7539 -1.09971 16.9771 -1.09971 18.4064 3.29915V3.29915C19.0456 5.26639 20.8788 6.5983 22.9473 6.5983V6.5983C27.5725 6.5983 29.4956 12.5169 25.7537 15.2356V15.2356C24.0803 16.4514 23.3801 18.6065 24.0193 20.5737V20.5737C25.4485 24.9726 20.4138 28.6305 16.6719 25.9119V25.9119C14.9985 24.696 12.7325 24.696 11.0591 25.9119V25.9119C7.31718 28.6305 2.28249 24.9726 3.71177 20.5737V20.5737C4.35096 18.6065 3.65073 16.4514 1.9773 15.2356V15.2356C-1.7646 12.5169 0.158484 6.5983 4.78373 6.5983V6.5983C6.8522 6.5983 8.68542 5.26639 9.32462 3.29915V3.29915Z" fill="var(--primary-yellow)"/>
                                                </svg>
                                                5.0
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="active-testimonial-list">
                            <div className="active-testi-user">
                                <div className="name">
                                    <p className="h5 text-md">{activeTestimonial.name}</p>

                                    <p className="text-18 text-rg">{activeTestimonial.designation}</p>
                                </div>
                                    
                                <span className="ratings text-18 text-md">
                                    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.32462 3.29915C10.7539 -1.09971 16.9771 -1.09971 18.4064 3.29915V3.29915C19.0456 5.26639 20.8788 6.5983 22.9473 6.5983V6.5983C27.5725 6.5983 29.4956 12.5169 25.7537 15.2356V15.2356C24.0803 16.4514 23.3801 18.6065 24.0193 20.5737V20.5737C25.4485 24.9726 20.4138 28.6305 16.6719 25.9119V25.9119C14.9985 24.696 12.7325 24.696 11.0591 25.9119V25.9119C7.31718 28.6305 2.28249 24.9726 3.71177 20.5737V20.5737C4.35096 18.6065 3.65073 16.4514 1.9773 15.2356V15.2356C-1.7646 12.5169 0.158484 6.5983 4.78373 6.5983V6.5983C6.8522 6.5983 8.68542 5.26639 9.32462 3.29915V3.29915Z" fill="white"/>
                                    </svg>
                                    5.0
                                </span>
                            </div>

                            <p className="h5 text-md">{activeTestimonial.message}</p>
                        </div>

                        <Image src="/images/homepage/quotation-bg.png" alt="quotation-bg" width={435} height={397} priority={false} draggable={false} className="quotation-bg"></Image>
                    </div>
                </div>
            </section>
        </>
    );
}
