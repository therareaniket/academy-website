"use client"

import Link from "next/link";

export default function TermsCondition() {
    return (
        <>
            <section className="section legel-page">
                <div className="container">
                    <h1 className="h2">DhatuAcademy — Terms of Use</h1>

                    <div className="text-block">
                        <h2 className="h3 text-md">1. Acceptance & Eligibility</h2>

                        <p className="h6 da-site-para">By using DhatuAcademy, you affirm you are of legal age and authorized by your organization. If you do not agree to these Terms, do not use the service.</p>
                    </div>

                    <div className="text-block">
                        <h2 className="h3 text-md">2. Account & Access</h2>

                        <p className="h6 da-site-para">Maintain accurate account information and keep credentials confidential. You are responsible for activities under your account.</p>
                        <p className="h6 da-site-para">We may provision, limit, or suspend access to protect the service or for suspected breach, misuse, or nonpayment.</p>
                        <p className="h6 da-site-para">Trials and betas are provided AS IS and may be modified or discontinued.</p>
                    </div>

                    <div className="text-block">
                        <h2 className="h3 text-md">3. License & Customer Data</h2>

                        <p className="h6 da-site-para">License Subject to these Terms and any Order, DFOLDS grants you anon‑exclusive, non‑transferable, revocable right to access and use DhatuAcademy for your internal business purposes.</p>
                        <p className="h6 da-site-para">Ownership. You retain all rights to Customer Content. You grant DFOLDS a limited license to Process Customer Content solely to provide, support, and secure the services, and as otherwise permitted by these Terms and the MSA/DPA/BAA.</p>
                        <p className="h6 da-site-para">Feedback. DFOLDS may use feedback without restriction or compensation.</p>
                    </div>

                    <div className="text-block">
                        <h2 className="h3 text-md">4. Acceptable Use</h2>

                        <p className="h6 da-site-para">You will not: (a) violate laws or third‑party rights; (b) upload unlawful/harmful/infringing content; (c) probe/scan/test vulnerabilities except as expressly permitted; (d) copy, modify, reverse engineer, or create derivative works of the service; (e) bypass access controls or quotas; (f) use the service to build a competing product; (g) send spam or interfere with networks; (h) use the service for emergency, life-support, or medical diagnosis/treatment contexts.</p>
                    </div>

                    <div className="text-block">
                        <h2 className="h3 text-md">5. Compliance Responsibilities</h2>

                        <p className="h6 da-site-para">Your responsibilities. Configure your environment, user permissions, retention settings, and integrations to meet your obligations (e.g., HIPAA, GDPR, 21 CFR Part 11)</p>
                        <p className="h6 da-site-para">Our commitments. DFOLDS maintains security controls, availability targets, and processing safeguards as described in the Privacy Policy, Security Overview, and any DPA/BAA. DFOLDS does not provide legal advice.</p>
                        <p className="h6 da-site-para">Feedback. DFOLDS may use feedback without restriction or compensation.</p>
                    </div>

                    <div className="text-block">
                        <h2 className="h3 text-md">6. Third‑Party Services</h2>

                        <p className="h6 da-site-para">Integrations and third‑party services are governed by their own terms and privacy policies. DFOLDS is not responsible for third‑party services and does not control their availability or behavior.</p>
                    </div>

                    <div className="text-block">
                        <h2 className="h3 text-md">7. Confidentiality</h2>

                        <p className="h6 da-site-para">Each party may receive Confidential Information of the other. The receiving party will protect it using at least reasonable care and not disclose it except to personnel/subprocessors with a need to know under similar obligations. Customer Content and security documentation are Confidential Information.</p>
                    </div>

                    <div className="text-block">
                        <h2 className="h3 text-md">8. Fees, Taxes & Orders (if applicable)</h2>

                        <p className="h6 da-site-para">Fees, billing cycles, and payment terms are set in the applicable Order or MSA. Fees are exclusive of taxes; you are responsible for taxes other than DFOLDS’s income taxes. Late amounts may accrue interest at the lower of 1.5% per month or the maximum allowed by law. Except as expressly stated, fees are non-refundable.</p>
                    </div>

                    <div className="text-block">
                        <h2 className="h3 text-md">9. Miscellaneous</h2>

                        <p className="h6 da-site-para">Order of precedence. Your MSA/DPA/BAA control over these Terms if conflicting.</p>
                        <p className="h6 da-site-para">Assignment. You may not assign without DFOLDS’s consent; DFOLDS may assign to an affiliate or in connection with a corporate transaction.</p>
                        <p className="h6 da-site-para">Force Majeure. Neither party is liable for delays/failures due to events beyond reasonable control.</p>
                    </div>

                    <div className="text-block">
                        <h2 className="h3 text-md">10. Contact</h2>

                        <p className="h6 da-site-para">General inquiries: <Link href="mailto:enquiry@dfolds.com">enquiry@dfolds.com</Link></p>
                        <p className="h6 da-site-para">Legal notices & contracts: <Link href="mailto:contactus@dfolds.com">contactus@dfolds.com</Link></p>
                        <p className="h6 da-site-para">Address: DFOLDS LLC, 262 CHAPMAN RD, STE 240, NEWARK, DE 19702, USA</p>
                    </div>
                </div>
            </section>
        </>
    );
}