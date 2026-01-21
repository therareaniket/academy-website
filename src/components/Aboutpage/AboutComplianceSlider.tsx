"use client"

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import type { Swiper as SwiperType } from "swiper";

type ComplianceSliderProps = {
    complianceAssuranceTitle: string;
    complianceAssuranceSubtitle: string;
    complianceAssuranceSliders: {
        slider1Title: string;
        slider1Subtitle: string;
        slider2Title: string;
        slider2Subtitle: string;
        slider3Title: string;
        slider3Subtitle: string;
    }
}

export default function ComplianceSlider( {complianceAssuranceTitle, complianceAssuranceSubtitle, complianceAssuranceSliders} : ComplianceSliderProps ) {

    // useEffect(() => {
    //     const heading = document.querySelector(".compli-slider-headings");

    //     if (!heading) return;

    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add("show");
    //             }
    //         },
    //         { threshold: 0.3 }
    //     );

    //     observer.observe(heading);

    //     return () => observer.unobserve(heading);
    // }, []);

    const animateSlideImages = (swiper: SwiperType) => {
        // remove animation from all images
        document
            .querySelectorAll(".masked-images img")
            .forEach((img) => img.classList.remove("show"));

        // active slide
        const activeSlide = swiper.slides[swiper.activeIndex];
        if (!activeSlide) return;

        const images = activeSlide.querySelectorAll<HTMLImageElement>(
            ".masked-images img"
        );

        images.forEach((img, index) => {
            setTimeout(() => {
                img.classList.add("show");
            }, index * 150);
        });
    };


    return (
        <>
            <section className="section compliance-slider">
                <div className="container">
                    <div className="compli-slider-headings">
                        <h2>{complianceAssuranceTitle}</h2>

                        <p className="h6 text-rg">{complianceAssuranceSubtitle}</p>
                    </div>

                    <div className="abt-swiper-slider">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            className="abt-compliance-slider"
                            onSwiper={(swiper) => animateSlideImages(swiper)}
                            onSlideChange={(swiper) => animateSlideImages(swiper)}
                        >

                            <SwiperSlide className="abt-slider-item">
                                <div className="abt-slide-item-wrapper">
                                    <div className="slide-details">
                                        <h3 className="h4 text-md">{complianceAssuranceSliders.slider1Title}</h3>

                                        <p className="text-18 text-rg">{complianceAssuranceSliders.slider1Subtitle}</p>
                                    </div>

                                    <div className="masked-images">
                                        <div className="img-col img-col-1">
                                            <Image src="/images/aboutpage/slider-maskings/mask-1-img-1.webp" alt="mask-1-img-1" width={240} height={159} priority={false} className="slider-mask-img-small"></Image>

                                            <Image src="/images/aboutpage/slider-maskings/mask-1-img-2.webp" alt="mask-1-img-2" width={300} height={233} priority={false} className="slider-mask-img-big"></Image>
                                        </div>

                                        <div className="img-col img-col-2">
                                            <Image src="/images/aboutpage/slider-maskings/mask-1-img-3.webp" alt="mask-1-img-3" width={300} height={233} priority={false} className="slider-mask-img-big"></Image>

                                            <Image src="/images/aboutpage/slider-maskings/mask-1-img-4.webp" alt="mask-1-img-4" width={240} height={159} priority={false} className="slider-mask-img-small"></Image>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="abt-slider-item">
                                <div className="abt-slide-item-wrapper">
                                    <div className="slide-details">
                                        <h3 className="h4 text-md">{complianceAssuranceSliders.slider2Title}</h3>

                                        <p className="text-18 text-rg">{complianceAssuranceSliders.slider2Subtitle}</p>
                                    </div>

                                    <div className="masked-images">
                                        <div className="img-col img-col-1">
                                            <Image src="/images/aboutpage/slider-maskings/mask-2-img-1.webp" alt="mask-1-img-1" width={240} height={159} priority={false} className="slider-mask-img-small"></Image>

                                            <Image src="/images/aboutpage/slider-maskings/mask-2-img-2.webp" alt="mask-1-img-2" width={300} height={233} priority={false} className="slider-mask-img-big"></Image>
                                        </div>

                                        <div className="img-col img-col-2">
                                            <Image src="/images/aboutpage/slider-maskings/mask-2-img-3.webp" alt="mask-1-img-3" width={300} height={233} priority={false} className="slider-mask-img-big"></Image>

                                            <Image src="/images/aboutpage/slider-maskings/mask-2-img-4.webp" alt="mask-1-img-4" width={240} height={159} priority={false} className="slider-mask-img-small"></Image>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="abt-slider-item">
                                <div className="abt-slide-item-wrapper">
                                    <div className="slide-details">
                                        <h3 className="h4 text-md">{complianceAssuranceSliders.slider3Title}</h3>

                                        <p className="text-18 text-rg">{complianceAssuranceSliders.slider3Subtitle}</p>
                                    </div>

                                    <div className="masked-images">
                                        <div className="img-col img-col-1">
                                            <Image src="/images/aboutpage/slider-maskings/mask-3-img-1.webp" alt="mask-3-img-1" width={240} height={159} priority={false} className="slider-mask-img-small"></Image>

                                            <Image src="/images/aboutpage/slider-maskings/mask-3-img-2.webp" alt="mask-3-img-2" width={300} height={233} priority={false} className="slider-mask-img-big"></Image>
                                        </div>

                                        <div className="img-col img-col-2">
                                            <Image src="/images/aboutpage/slider-maskings/mask-3-img-3.webp" alt="mask-3-img-3" width={300} height={233} priority={false} className="slider-mask-img-big"></Image>

                                            <Image src="/images/aboutpage/slider-maskings/mask-3-img-4.webp" alt="mask-3-img-4" width={240} height={159} priority={false} className="slider-mask-img-small"></Image>
                                        </div>
                                    </div>
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