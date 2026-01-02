import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    return (
        <>
            <section className="footer-main-wrapper-section  site-radius-20">
                <div className="footer-main">
                    <div className="container">

                        <div className="footer-wrapper">
                            <div className="footer-logo-wrapper">
                                <Image src="/images/footer/footer-logo.svg" alt="solu-hero-chart" width={272} height={34} className=""></Image>

                            </div>

                            <div className="footer-links-wrapper">
                                <div className="footer-text-quote">
                                    <h2>Clinical Trials Mastery Center</h2>

                                    <p className="h5 text-rg">Skills hub for pros trainers learners.</p>
                                </div>

                                <div className="footer-links-main">
                                    <div className="footer-links quick-links">
                                        <p className="text-md text-18">Quick Links</p>

                                        <ul>
                                            <li className="text-rg text-16 text-grey"><Link href="/About">About</Link></li>
                                            <li className="text-rg text-16 text-grey"><Link href="/Solutions">Solutions</Link></li>
                                            <li className="text-rg text-16 text-grey"><Link href="/">Courses</Link></li>
                                            <li className="text-rg text-16 text-grey"><Link href="/Resources">Resources</Link></li>
                                            <li className="text-rg text-16 text-grey"><Link href="/Contact">Contact</Link></li>
                                        </ul>
                                    </div>

                                    <div className="footer-links further-links">
                                        <p className="text-md text-18">Further Information</p>

                                        <ul>
                                            <li className="text-rg text-16 text-grey"><Link href="">Terms of Use</Link></li>
                                            <li className="text-rg text-16 text-grey"><Link href="">Privacy Policy</Link></li>
                                        </ul>

                                        <div className="footer-cnct-links">
                                            <div className="footer-call-link text-grey"><span></span><Link href="tel:+15128432002" className="text-rg text-16">+1 512 843 2002</Link></div>

                                            <div className="footer-mail-link text-grey"><span></span><Link href="mailto:enquiry@dhatuacademy.com" className="text-rg text-16" >enquiry@dhatuacademy.com</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-newsletter">
                                <p className="text-18 text-md">Newsletter</p>

                                <div className="footer-newsletter-field">
                                    <div className="input-glass site-radius-30 text-grey"><input className="text-16 text-rg site-radius-30" type="email" name="" id="" placeholder="Enter your mail" /> </div>
                                    <button className="text-16 text-rg site-radius-30 text-grey" type="submit">Join Now</button>
                                </div>
                            </div>

                            <div className="footer-copyright-links">
                                <p className="text-16 text-rg text-grey">Copyright ©2025, all rights reserved. </p>

                                <div className="footer-right-links">
                                    <p className="text-16 text-rg text-grey">Powered by DFOLDS</p>

                                    <p className="text-16 text-rg text-grey">DhatuAcademy 2025.1.1</p>
                                </div>
                            </div>

                            <div className="social-media-wrapper">
                                <Image src="/images/footer/facebook.svg" alt="solu-hero-chart" width={40} height={40} className=""></Image>

                                <Image src="/images/footer/instagram.svg" alt="solu-hero-chart" width={40} height={40} className=""></Image>

                                <Image src="/images/footer/twitter.svg" alt="solu-hero-chart" width={40} height={40} className=""></Image>

                                <Image src="/images/footer/linkedin.svg" alt="solu-hero-chart" width={40} height={40} className=""></Image>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}