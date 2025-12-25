import Image from "next/image";

export default function HomeStats() {
    return (
        <>
            <section className="section home-statistics">
                <div className="container">
                    <div className="stats-headings">
                        <h2>Advance Excel Clinical Trials Success Awaits</h2>

                        <p className="h6">DhatuAcademy transforms clinical trials knowledge into career breakthroughs. Existing subscribers access core training perks. Premium AI unlocks job ready mastery across our digital products for pros trainers and learners.</p>
                    </div>

                    <div className="stats-wrapper">
                        <div className="steps-wrapper">
							<div className="stats-step1">
								<div className="blue-box site-radius-20">
									<Image src="/images/homepage/stats-section-elements/step1-globe.png" alt="step1-globe" width={36} height={36}></Image>
								</div>

								<div className="yellow-box site-radius-20">
									<h3 className="h2">98%</h3>

									<p className="h6 text-sb">Premium Users Achieve Mastery</p>
								</div>
							</div>

							<div className="stats-step2">
								<div className="blue-box site-radius-20">
									<Image src="/images/homepage/stats-section-elements/step-2-blue-1-pencil.png" alt="step2-pencil" width={47} height={60}></Image>

									<Image src="/images/homepage/stats-section-elements/step-2-blue-1-bulb.png" alt="step2-bulb" width={121} height={120}></Image>
								</div>

								<div className="yellow-box site-radius-20">
									<h3 className="h2">10K+</h3>

									<p className="h6 text-sb">Clinical Trials Experts Empowered</p>
								</div>

								<div className="blue-box-2 site-radius-20">
									<Image src="/images/homepage/stats-section-elements/step-2-blue-2-line.png" alt="step2-curve-line" width={55} height={40}></Image>
								</div>
							</div>

							<div className="stats-step3">
								<div className="blue-box site-radius-20">
									<Image src="/images/homepage/stats-section-elements/step-3-blue-1-desktop.png" alt="step3-desktop" width={101} height={206}></Image>
								</div>

								<div className="yellow-box site-radius-20">
									<h3 className="h2">300+</h3>

									<p className="h6 text-sb">Core Modules for Subscribers</p>
								</div>

								<div className="blue-box-2 site-radius-20">
									<Image src="/images/homepage/stats-section-elements/step-3-blue-2-laptop.png" alt="step3-laptop" width={92} height={111}></Image>
								</div>
							</div>
                        </div>

                        <Image src="/images/homepage/stats-female.webp" alt="stats-female" width={751} height={746}></Image>
                    </div>
                </div>
            </section>
        </>
    );
}