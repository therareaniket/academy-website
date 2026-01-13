"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <>
            <section className="section legel-page">
                <div className="container">
                    <h1 className="h2">DhatuAcademy — Privacy Policy</h1>

                    <div className="text-block">
                        <h2 className="h3 text-md">1. Scope & Roles</h2>

                        <p className="h6 da-site-para">This Policy explains how we collect, use, disclose, and protect Personal Data and Sensitive Data processed via: (1) public websites (e.g., landing pages, documentation); (2) DhatuAcademy accounts and dashboards; and (3) support/sales interactions.</p>
                        <p className="h6 da-site-para">For marketing, sales, support, and billing, DFOLDS is the Data Controller (GDPR/UK GDPR) / Business (CPRA).</p>
                        <p className="h6 da-site-para">For Customer Content processed in DhatuAcademy (e.g., configuration data, evidence, audit logs, scan results), DFOLDS acts as a Data Processor / Service Provider on behalf of the customer (the Controller/Business), processing only under customer instructions and the MSA/DPA/BAA.</p>
                    </div>

                    <div className="text-block">
                        <h2 className="h3 text-md">2. Definitions (Plain Language)</h2>

                        <ul>
                            <li className="h6 da-site-para"><b>Personal Data: </b>Information that identifies or can reasonably be linked to an individual (e.g., name, email, identifiers).</li>
                            <li className="h6 da-site-para"><b>Sensitive Data: </b>Includes health data/PHI, precise geolocation, government IDs, financial data, and other sensitive categories defined by law.</li>
                            <li className="h6 da-site-para"><b>Customer Content: </b>Data uploaded, Connected, or generated in your tenant (evidence, findings, audit trails, documents, tickets).</li>
                            <li className="h6 da-site-para"><b>Processing: </b>any operation on data (collecting, storing, using, sharing, deleting).</li>
                        </ul>

                        <p className="h6 da-site-para"></p>
                    </div>

                    <div className="text-block">
                        <h2 className="h3 text-md">3. International Transfers</h2>

                        <p className="h6 da-site-para">We use EU SCCs and UK IDTA/Addendum with supplementary measures for cross‑border transfers. Regional data residency (US/EU/India) may be available by configuration/contract.</p>
                    </div>

                    <div className="text-block">
                        <h2 className="h3 text-md">4. Security</h2>

                        <p className="h6 da-site-para">Controls include encryption in transit/at rest, RBAC/SSO/MFA, network isolation, vulnerability management, third-party pen tests, secure SDLC, audit logging, immutable backups, and vendor risk management.</p>
                        <p className="h6 da-site-para">For HIPAA BA relationships, safeguards align to the Security Rule; breach notification will be made without unreasonable delay andno later than 60 days after discovery, as required by HITECH.</p>
                    </div>

                    <div className="text-block">
                        <h2 className="h3 text-md">5. Retention</h2>

                        <p className="h6 da-site-para">We retain Personal Data only as long as necessary or as required by law/contract. Typical defaults (customizable by agreement): account/profile—life of account + 12 months; telemetry/audit—12–24 months; backups—30–45 days; support—24 months.</p>
                        <p className="h6 da-site-para">Upon contract end, we delete/return Customer Content per DPA/BAA and purge backups per schedule.</p>
                    </div>

                    <div className="text-block">
                        <h2 className="h3 text-md">6. Your Rights</h2>

                        <p className="h6 da-site-para">Depending on your location, you may have rights to access, correct, delete, restrict, object, port,and withdraw consent. Certain US states (e.g., CA/CPRA) add rights to opt‑out of sale/sharing(we do not sell/share for cross‑context behavioral ads) and to limit use of Sensitive Personal Information.</p>
                    </div>

                    <div className="text-block">
                        <h2 className="h3 text-md">7. Children</h2>

                        <p className="h6 da-site-para">Business‑use only; not directed to children under 16. If a child’s Personal Data is identified, contact contactus@dfolds.com for deletion.</p>
                    </div>

                    <div className="text-block">
                        <h2 className="h3 text-md">8. Third‑Party Links & Integrations</h2>

                        <p className="h6 da-site-para">Linked services are governed by their own policies. Review them carefully; we are not responsible for third‑party practices.</p>
                    </div>

                    <div className="text-block">
                        <h2 className="h3 text-md">9. Changes</h2>

                        <p className="h6 da-site-para">We may update this Policy; the date above reflects the latest version. Material changes will be notified via email or in‑app.</p>
                        <p className="h6 da-site-para">Continued use after the effective date constitutes acceptance.</p>
                    </div>
                </div>
            </section>
        </>
    );
}