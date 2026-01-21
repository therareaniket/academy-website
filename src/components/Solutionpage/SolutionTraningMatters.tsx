"use client";
import Image from "next/image";
import { useEffect } from "react";

type SoluTrainingMattersProps = {
    whyTrainingMattersTitle: string;
    whyTrainingMattersSubtitle: string;
    whyTrainingMattersUsp1: string;
    whyTrainingMattersUsp2: string;
    whyTrainingMattersUsp3: string;
    whyTrainingMattersUsp4: string;
}

export default function SolutionTraningMatters( { whyTrainingMattersTitle, whyTrainingMattersSubtitle, whyTrainingMattersUsp1, whyTrainingMattersUsp2, whyTrainingMattersUsp3, whyTrainingMattersUsp4 }:SoluTrainingMattersProps ) {

useEffect(() => {
    const section = document.querySelector(".solution-training-wrapper");
    if (!section) return;

    // const h2 = section.querySelector("h2") as HTMLElement | null;
    // const p = section.querySelector("p") as HTMLElement | null;
    const points = section.querySelectorAll<HTMLElement>(".solution-training-points");
    const image = section.querySelector(".solution-training-right") as HTMLElement | null;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) return;

            section.classList.add("active");

            // h2
            // if (h2) h2.style.transitionDelay = "0s";

            // p
            // if (p) p.style.transitionDelay = "0.3s";

            // points stagger
            points.forEach((point, index) => {
                point.style.transitionDelay = `${0.6 + index * 0.2}s`;
            });

            // image
            if (image) {
                image.style.transitionDelay = `${0.6 + points.length * 0.2}s`;
            }

            observer.disconnect();
        },
        { threshold: 0.4 }
    );

    observer.observe(section);
}, []);

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="solution-training-wrapper">
                        <div className="solution-tarining-left">
                            <h2 className="text-sb">{whyTrainingMattersTitle}</h2>

                            <p className="h6 text-rg solution-training-title">{whyTrainingMattersSubtitle}</p>

                            <div className="solution-tarining-pointers">
                                <div className="solution-covers-financial solution-training-points">
                                    <Image src="/images/solutionpage/solution-training-matters/solution-training-financial-sop.svg" alt="solution-covers-financial" width={50} height={50} priority={false} className=""></Image>

                                    <p className="text-md h5">{whyTrainingMattersUsp1}</p>
                                </div>

                                <div className="solution-approval-governance solution-training-points">
                                    <Image src="/images/solutionpage/solution-training-matters/solution-training-approval-governance.svg" alt="solution-covers-financial" width={50} height={50} priority={false} className=""></Image>

                                    <p className="text-md h5">{whyTrainingMattersUsp2}</p>
                                </div>

                                <div className="solution-reporting-requirements solution-training-points">
                                    <Image src="/images/solutionpage/solution-training-matters/solution-training-regualtory-requirement.svg" alt="solution-covers-financial" width={50} height={50} priority={false} className=""></Image>

                                    <p className="text-md h5">{whyTrainingMattersUsp3}</p>
                                </div>

                                <div className="solution-segregation-duties solution-training-points">
                                    <Image src="/images/solutionpage/solution-training-matters/solution-training-segregation-duties.svg" alt="solution-covers-financial" width={50} height={50} priority={false} className=""></Image>

                                    <p className="text-md h5">{whyTrainingMattersUsp4}</p>
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