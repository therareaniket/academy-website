import Image from "next/image";


export default function ContactHero() {
    return (
        <>

            <section className="section solutions-hero contact-hero ">
                <Image src="/images/general/site-hero-cube.svg" alt="site-hero-cube" width={733} height={574} className="inner-hero-cube"></Image>

                <div className="container">
                    <div className="hero-content">
                        <h1>Focused Training for Real World Success</h1>
                    </div>
                </div>

                <Image src="/images/contactpage/site-image-1.webp" alt="solu-hero-chart" width={145} height={144} className="solu-hero-1 cntct-hero-1"></Image>

                <Image src="/images/contactpage/site-img-3.webp" alt="solu-hero-profile" width={100} height={100} className="solu-hero-2 cntct-hero-2"></Image>

                <Image src="/images/contactpage/site-img-2.webp" alt="solu-hero-scope" width={80} height={80} className="solu-hero-3 cntct-hero-3"></Image>

                <Image src="/images/contactpage/site-img-4.webp" alt="solu-hero-glob" width={141} height={121} className="solu-hero-4 cntct-hero-4"></Image>
            </section>

        </>
    );
}