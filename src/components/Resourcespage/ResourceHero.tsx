"use client";

import Image from "next/image";
// import Link from "next/link";

export default function ResourceHero() {
    return (
        <>
            {/* <section className="section home-hero inner-site-hero-wrapper resources-hero">
                <Image src="/images/general/site-hero-cube.svg" alt="site-hero-cube" width={1070} height={837} className="site-hero-cube"></Image>

                <Image src="/images/resources/resourcesherolaptop.webp" alt="resources-hero-laptop" width="220" height="179" className="resources-hero-laptop"></Image>

                <Image src="/images/resources/resourcesherocard.webp" alt="resourcesherocard" width="109" height="137" className="resourcesherocard"></Image>

                <Image src="/images/resources/resourcesheroblog.webp" alt="resourcesheroblog" width="209" height="119" className="resourcesheroblog"></Image>

                <Image src="/images/resources/resourcesheroemail.webp" alt="resourcesheroemail" width="135" height="144" className="resourcesheroemail"></Image>

                <div className="container">
                    <div className="hero-details hero-text-wrapper">
                        <h1 className="text-sb">Training Built for Clinical Trial Success</h1>
                    </div>
                </div>
            </section> */}

            <section className="section solutions-hero resources-hero">
                <Image src="/images/general/site-hero-cube.svg" alt="site-hero-cube" width={733} height={574} className="inner-hero-cube"></Image>

                <div className="container">
                    <div className="hero-content">
                        <h1>Training Built for Clinical Trial Success</h1>
                    </div>
                </div>

                <Image src="/images/resources/resourcesherolaptop.webp" alt="solu-hero-chart" width={177} height={99} className="solu-hero-1"></Image>

                <Image src="/images/resources/resourcesherocard.webp" alt="solu-hero-profile" width={108} height={137} className="solu-hero-2"></Image>

                <Image src="/images/resources/resourcesheroblog.webp" alt="solu-hero-scope" width={208} height={118} className="solu-hero-3"></Image>

                <Image src="/images/resources/resourcesheroemail.webp" alt="solu-hero-glob" width={135} height={144} className="solu-hero-4"></Image>
            </section>
        </>
    );
}