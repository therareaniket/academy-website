import Image from "next/image";
import Link from "next/link";


export default function SoluEasilyAddProducts() {
    return (
        <>
            <section className="soln-easily-added">
                <div className="container">
                    <div className="sol-easily-added-text-wrapper">
                        <div className="solution-easily-added-text-left">
                            <h2 className="text-white">Easily Add your custom product to DhatuAcademy for training</h2>
                        </div>

                        <div className="solution-easily-added-right">
                            <Link href="/ComingSoon" title="Get Started" className="get-started-btn solution-easily-added-right">
                                <div className="arrow-link">
                                    <Image src="/images/homepage/hero-home-btn-arrow.svg" alt="hero-home-btn-arrow" width={100} height={35} className="animate-sliding"></Image>
                                </div>

                                <span className="h5 text-white">Add Custom Product</span>
                            </Link>
                        </div>
                    </div>

                    <div className="solution-added-vectors">
                        <Image src="/images/solutionpage/solution-added/solution-added-spiral.svg" alt="solution-spiral" width={58} height={31} priority={false} className="solution-sipral"></Image>

                        <Image src="/images/solutionpage/solution-added/solution-added-laptop.svg" alt="solution-laptop" width={166} height={104} priority={false} className="solution-laptop"></Image>
                    </div>
                </div>
            </section>
        </>
    );
}