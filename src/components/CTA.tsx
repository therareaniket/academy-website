import Image from "next/image";
import Link from "next/link";

export default function CTA() {
    return (
        <>
            <section className="section site-cta">
                <div className="container">
                    <div className="cta-wrapper site-radius-40">
                        <div className="cta-details">
                            <h2>Clinical Trials Mastery Starts Now at DhatuAcademy</h2>

                            {/* <Link href="/ComingSoon" title="Get Started" className="link-padding link-yellow">Get Started</Link> */}
                            
                            <Link href="/ComingSoon" title="Get Started" className="get-started-cta">
                                <div className="arrow-link">
                                    <Image src="/images/homepage/hero-home-btn-arrow.svg" alt="hero-home-btn-arrow" width={100} height={35} priority={false} className="animate-sliding"></Image>
                                </div>

                                <span className="h5">Get Started</span>
                            </Link>
                        </div>

                        <Image src="/images/footer/cta-female-update.webp" alt="cta-female" width={759} height={748} priority={false} className="cta-female"></Image>
                    </div>
                </div>
            </section>
        </>
    );
}