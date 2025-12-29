import Image from "next/image";


export default function Footer() {
    return (
        <>
            <section className="footer-main section site-radius-20">
                <div className="container">
                    {/* <div className="social-media-wrapper">
                        <Image src="/images/footer/facebook.svg" alt="solu-hero-chart" width={40} height={40} className=""></Image>

                        <Image src="/images/footer/facebook.svg" alt="solu-hero-chart" width={40} height={40} className=""></Image>

                        <Image src="/images/footer/facebook.svg" alt="solu-hero-chart" width={40} height={40} className=""></Image>

                        <Image src="/images/footer/facebook.svg" alt="solu-hero-chart" width={40} height={40} className=""></Image>
                    </div> */}

                    <div className="footer-logo-wrapper">
                        <Image src="/images/footer/footer-logo.svg" alt="solu-hero-chart" width={272} height={34} className=""></Image>
                        
                        <h2>Clinical Trials Mastery Center</h2>

                        <p className="h5 text-rg">Skills hub for pros trainers learners.</p>
                    </div>
                </div>
            </section>
        </>
    )
}