"use client"

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ComplianceSlider() {
    return (
        <>
            <section className="section compliance-slider">
                <div className="container">
                    <div className="compli-slider-headings">
                        <h2> Engineered for Compliance Assurance</h2>

                        <p className="h6 text-rg">Comprehensive training with audit-ready records guarantees ongoing adherence across all roles, trials, and international regulations.</p>
                    </div>

                    <div className="abt-swiper-slider">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={10}
                            slidesPerView={1}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            loop={true}
                            className="abt-compliance-slider">
                                <SwiperSlide  className="abt-slider-item">
                                    <div className="slide-details">
                                        <h3 className="h4 text-md">Compliance Embedded in Every Module</h3>

                                        <p className="text-18 text-rg">DhatuAcademy drives regulatory excellence with GxP-compliant training, SOP mastery, and worldwide standards for seamless operations.</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide  className="abt-slider-item">
                                    <div className="slide-details">
                                        <h3 className="h4 text-md">Inspection-Proof Documentation</h3>

                                        <p className="text-18 text-rg">Automated certificates, digital badges, and immutable logs accelerate audits with zero compliance gaps.</p>
                                    </div>
                                </SwiperSlide>
                                
                                <SwiperSlide  className="abt-slider-item">
                                    <div className="slide-details">
                                        <h3 className="h4 text-md">Risk-Free Practice Labs</h3>

                                        <p className="text-18 text-rg">Isolated sandboxes replicate production environments for safe, compliant hands-on training without live data risks.</p>
                                    </div>
                                </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <Image src="/images/aboutpage/slider-uparrow.png" alt="slider-uparrow" width={200} height={118} className="slider-uparrow"></Image>
                <Image src="/images/aboutpage/slider-notes.png" alt="slider-notes" width={188} height={203} className="slider-notes"></Image>
            </section>
        </>
    );
}