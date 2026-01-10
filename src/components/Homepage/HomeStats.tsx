"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomeStats() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
    	const mediaQuery = window.matchMedia("(max-width: 639px)");
    	const handleChange = () => setIsMobile(mediaQuery.matches);

    	handleChange(); // initial check
    	mediaQuery.addEventListener("change", handleChange);

    	return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);


	const homeStatsAnimations = {
		title_ltr_initial: { x: "-50px", opacity: 0, },
		title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 0.5, duration: 1 } },

		subTitle_ltr_initial: { x: "50px", opacity: 0, },
		subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 1 } },

		stats_female_initial: { x: "-100px", opacity: 0, },
		stats_female_animate: { x: "0px", opacity: 1, transition: { delay: 2, duration: 1 } },

		box_initial: { x: "50px", opacity: 0, },
		box_animate: { x:"0px", opacity: 1, },
	}

    return (
        <>
            <section className="section home-statistics">
                <div className="container">
                    <div className="stats-headings">
                        <motion.h2 initial={homeStatsAnimations.title_ltr_initial} whileInView={homeStatsAnimations.title_ltr_animate} viewport={{ once: true, amount: 0.8 }}>Advance Excel Clinical Trials Success Awaits</motion.h2>

                        <motion.p initial={homeStatsAnimations.subTitle_ltr_initial} whileInView={homeStatsAnimations.subTitle_ltr_animate} className="h6" viewport={{ once: true, amount: 0.8 }}>DhatuAcademy transforms clinical trials knowledge into career breakthroughs. Existing subscribers access core training perks. Premium AI unlocks job ready mastery across our digital products for pros trainers and learners.</motion.p>
                    </div>

                    <div className="stats-wrapper">
                        <div className="steps-wrapper">
							<div className="stats-step1">
								<div className="blue-box site-radius-20">
									<Image src="/images/homepage/stats-section-elements/step1-globe.png" alt="step1-globe" width={36} height={36}></Image>
								</div>

								<motion.div className="yellow-box site-radius-20" initial={ homeStatsAnimations.box_initial } whileInView={ homeStatsAnimations.box_animate } viewport={{ once: true }} transition={{ delay: isMobile ? 1 : 3 }}>
									<h3 className="h2">98%</h3>

									<p className="h6 text-sb">Premium Users Achieve Mastery</p>
								</motion.div>
							</div>

							<div className="stats-step2">
								<div className="blue-box site-radius-20">
									<Image src="/images/homepage/stats-section-elements/step-2-blue-1-pencil.png" alt="step2-pencil" width={47} height={60}></Image>

									<Image src="/images/homepage/stats-section-elements/step-2-blue-1-bulb.png" alt="step2-bulb" width={121} height={120}></Image>
								</div>

								<motion.div className="yellow-box site-radius-20" initial={ homeStatsAnimations.box_initial } whileInView={ homeStatsAnimations.box_animate } viewport={{ once: true }} transition={{ delay: isMobile ? 1 : 3.5 }}>
									<h3 className="h2">10K+</h3>

									<p className="h6 text-sb">Clinical Trials Experts Empowered</p>
								</motion.div>

								<motion.div className="blue-box-2 site-radius-20" initial={ homeStatsAnimations.box_initial } whileInView={ homeStatsAnimations.box_animate } viewport={{ once: true }} transition={{ delay: 4.5 }}>
									<Image src="/images/homepage/stats-section-elements/step-2-blue-2-line.png" alt="step2-curve-line" width={55} height={40}></Image>
								</motion.div>
							</div>

							<div className="stats-step3">
								<div className="blue-box site-radius-20">
									<Image src="/images/homepage/stats-section-elements/step-3-blue-1-desktop.png" alt="step3-desktop" width={101} height={206}></Image>
								</div>

								<motion.div className="yellow-box site-radius-20" initial={ homeStatsAnimations.box_initial } whileInView={ homeStatsAnimations.box_animate } viewport={{ once: true }} transition={{ delay: isMobile ? 1 : 4 }}>
									<h3 className="h2">300+</h3>

									<p className="h6 text-sb">Core Modules for Subscribers</p>
								</motion.div>

								<motion.div className="blue-box-2 site-radius-20" initial={ homeStatsAnimations.box_initial } whileInView={ homeStatsAnimations.box_animate } viewport={{ once: true }} transition={{ delay: 5 }}>
									<Image src="/images/homepage/stats-section-elements/step-3-blue-2-laptop.png" alt="step3-laptop" width={92} height={111}></Image>
								</motion.div>
							</div>
                        </div>

						<motion.div className="stat-female-wrapper" initial={homeStatsAnimations.stats_female_initial} whileInView={homeStatsAnimations.stats_female_animate} viewport={{ once: true }}>
	                        <Image src="/images/homepage/stats-female.webp" alt="stats-female" width={751} height={746}></Image>   
						</motion.div>
                    </div>
					
					<Image src="/images/homepage/stats-line-grp.png" alt="stats-lines" width={331} height={264} className="three-lines"></Image>
                </div>
            </section>
        </>
    );
}