import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    return (
        <>
            <footer>
                <div className="section footer-wrapper" style={{ paddingBottom: 0 }}>
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
                                        <p className="text-md text-18">Informations</p>

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
                        </div>
                    </div>

                    <div className="social-link-block">
                        {/* <svg width="494" height="102" viewBox="0 0 494 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0.0348856C0.831618 -0.00776148 1.81056 -0.0155135 2.8876 0.0348856H494V101.535C492.8 82.335 475.5 80.5096 466.5 81.035H44C28.8 81.835 23.6667 68.3684 23 61.535V16.5349C22.1279 3.42358 10.2288 0.37841 2.8876 0.0348856H0Z" fill="#FAFAFA"/>
                        </svg> */}

                        <Image src="/images/footer/footer-top-rgt-notch.svg" alt="footer-top-rgt-notch" width={500} height={100} priority={false} className="footer-notch"></Image>

                        <div className="social-link-list">
                            <ul>
                                <li>
                                    <Link href="#" title="linkedin" className="foot-icon icon-linkin">
                                        <i className="icon-linkedin"></i>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#" title="twitter" className="foot-icon icon-x">
                                        <i className="icon-twitter"></i>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#" title="instagram" className="foot-icon icon-insta">
                                        <i className="icon-instagram"></i>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#" title="facebook" className="foot-icon icon-fb">
                                        <i className="icon-facebook"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}