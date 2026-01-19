"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

type HomeStatsProps = {
	statisticsTitle: string;
	statisticsSubtitle: string;

	statistics1Number: string;
	statistics1Description: string;
	statistics2Number: string;
	statistics2Description: string;
	statistics3Number: string;
	statistics3Description: string;
}

export default function HomeStats( { statisticsTitle, statisticsSubtitle, statistics1Number, statistics1Description, statistics2Number, statistics2Description, statistics3Number, statistics3Description } : HomeStatsProps ) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
    	const mediaQuery = window.matchMedia("(max-width: 639px)");
    	const handleChange = () => setIsMobile(mediaQuery.matches);

    	handleChange(); // initial check
    	mediaQuery.addEventListener("change", handleChange);

    	return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	const yellowStarVariants =  {
  		hidden: { x: "50px", opacity: 0, },
		visible: { x: "0px", opacity: 1, }
	};

	const homeStatsAnimations = (typeof window !== "undefined" && window.innerWidth >= 1200) ? {
		title_ltr_initial: { x: "0px", opacity: 1, },
		title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 0.5, duration: 0.6 } },

		subTitle_ltr_initial: { x: "0px", opacity: 1, },
		subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6 } },

		stats_female_initial: { x: "-100px", opacity: 0, },
		stats_female_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 1 } },

	} : {

		title_ltr_initial: { x: "-50px", opacity: 0, },
		title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1.5, duration: 0.6 } },

		subTitle_ltr_initial: { x: "-50px", opacity: 0, },
		subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 2, duration: 0.6 } },

		stats_female_initial: { x: "-100px", opacity: 0, },
		stats_female_animate: { x: "0px", opacity: 1, transition: { delay: 0.5, duration: 1 } },
	}

    return (
        <>
            <section className="section home-statistics">
                <div className="container">
                    <div className="stats-headings">
                        <motion.h2 initial={homeStatsAnimations.title_ltr_initial} whileInView={homeStatsAnimations.title_ltr_animate} viewport={{ once: true, amount: 0.8 }}>{statisticsTitle}</motion.h2>

                        <motion.p initial={homeStatsAnimations.subTitle_ltr_initial} whileInView={homeStatsAnimations.subTitle_ltr_animate} className="h6" viewport={{ once: true, amount: isMobile ? 0.5 : 0.8 }}>{statisticsSubtitle}</motion.p>
                    </div>

                    <div className="stats-wrapper">
                        <motion.div className="steps-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}>
							<div className="stats-step1">
								<div className="blue-box site-radius-20">
									<Image src="/images/homepage/stats-section-elements/step1-globe.png" alt="step1-globe" width={36} height={36}></Image>
								</div>

								<motion.div className="yellow-box site-radius-20" variants={yellowStarVariants} transition= {{delay: isMobile ? 1.2 : 2, duration: 1}}>
									<h3 className="h2">{statistics1Number}</h3>

									<p className="h6 text-sb">{statistics1Description}</p>
								</motion.div>

							</div>

							<div className="stats-step2">
								<div className="blue-box site-radius-20">
									<Image src="/images/homepage/stats-section-elements/step-2-blue-1-pencil.png" alt="step2-pencil" width={47} height={60}></Image>

									<Image src="/images/homepage/stats-section-elements/step-2-blue-1-bulb.png" alt="step2-bulb" width={121} height={120}></Image>
								</div>

								<motion.div className="yellow-box site-radius-20" variants={yellowStarVariants} transition= {{ delay: isMobile ? 1.6 : 2, duration: 1}}>
									<h3 className="h2">{statistics2Number}</h3>

									<p className="h6 text-sb">{statistics2Description}</p>
								</motion.div>

								<motion.div className="blue-box-2 site-radius-20" variants={yellowStarVariants} transition= {{ delay: 3, duration: 1}}>
									<Image src="/images/homepage/stats-section-elements/step-2-blue-2-line.png" alt="step2-curve-line" width={55} height={40}></Image>
								</motion.div>
							</div>

							<div className="stats-step3">
								<div className="blue-box site-radius-20">
									<Image src="/images/homepage/stats-section-elements/step-3-blue-1-desktop.png" alt="step3-desktop" width={101} height={206}></Image>
								</div>

								<motion.div className="yellow-box site-radius-20" variants={yellowStarVariants} transition= {{delay: isMobile ? 2 : 2, duration: 1}}>
									<h3 className="h2">{statistics3Number}</h3>

									<p className="h6 text-sb">{statistics3Description}</p>
								</motion.div>

								<motion.div className="blue-box-2 site-radius-20" variants={yellowStarVariants} transition= {{delay: 3, duration: 1}}>
									<Image src="/images/homepage/stats-section-elements/step-3-blue-2-laptop.png" alt="step3-laptop" width={92} height={111}></Image>
								</motion.div>
							</div>
                        </motion.div>

						<motion.div className="stat-female-wrapper" initial={homeStatsAnimations.stats_female_initial} whileInView={homeStatsAnimations.stats_female_animate} viewport={{ once: true, amount: isMobile ? 0.5 : 0 }}>
	                        <Image src="/images/homepage/stats-female.webp" alt="stats-female" width={751} height={746}></Image>   
						</motion.div>
                    </div>
					
					<Image src="/images/homepage/stats-line-grp.png" alt="stats-lines" width={331} height={264} className="three-lines"></Image>
                </div>
            </section>
        </>
    );
}