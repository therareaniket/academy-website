"use client";
import { useEffect } from "react";
import Image from "next/image";


export default function SolutionTraningMatters() {

    useEffect(() => {
        const section = document.querySelector(".solution-training-wrapper");
        if (!section) return;

        const heading = section.querySelector("h2");
        const paragraph = section.querySelector(".solution-training-title");
        const cards = section.querySelectorAll(".solution-training-points");
        const image = section.querySelector(".solution-training-right");

        if (!heading || !paragraph || !image) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;


                setTimeout(() => {
                    heading.classList.add("animate-in");
                }, 0);

                setTimeout(() => {
                    paragraph.classList.add("animate-in");
                }, 200);


                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add("animate-in");
                    }, 400 + index * 200);
                });


                setTimeout(() => {
                    image.classList.add("animate-in");
                }, 400 + cards.length * 200 + 200);

                observer.disconnect();
            },
            { threshold: 0.3 }
        );

        observer.observe(section);
    }, []);


    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="solution-training-wrapper">
                        <div className="solution-tarining-left">
                            <h2 className="text-sb">Why Training Matters</h2>

                            <p className="h6 text-rg solution-training-title">Effective training transforms clinical teams from reactive operators into proactive experts, ensuring seamless SOP adherence, and trial success across diverse environments.</p>

                            <div className="solution-tarining-pointers">
                                <div className="solution-covers-financial solution-training-points">
                                    <Image src="/images/solutionpage/solution-training-matters/solution-training-financial-sop.svg" alt="solution-covers-financial" width={50} height={50} priority={false} className=""></Image>

                                    <p className="text-md h5">Accelerated Onboarding</p>
                                </div>

                                <div className="solution-approval-governance solution-training-points">
                                    <Image src="/images/solutionpage/solution-training-matters/solution-training-approval-governance.svg" alt="solution-covers-financial" width={50} height={50} priority={false} className=""></Image>

                                    <p className="text-md h5">Compliance Mastery</p>
                                </div>

                                <div className="solution-reporting-requirements solution-training-points">
                                    <Image src="/images/solutionpage/solution-training-matters/solution-training-regualtory-requirement.svg" alt="solution-covers-financial" width={50} height={50} priority={false} className=""></Image>

                                    <p className="text-md h5">Real-World Readiness</p>
                                </div>

                                <div className="solution-segregation-duties solution-training-points">
                                    <Image src="/images/solutionpage/solution-training-matters/solution-training-segregation-duties.svg" alt="solution-covers-financial" width={50} height={50} priority={false} className=""></Image>

                                    <p className="text-md h5">Scalable Performance</p>
                                </div>
                            </div>
                        </div>

                        <div className="solution-training-right">
                            <Image src="/images/solutionpage/solution-training-matters/solution-training-matters-img.png" alt="solution-training-right" width={750} height={438} priority={false}></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>);
}