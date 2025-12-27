"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

export default function FAQs() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="faq-headings">
                        <h2>DhatuAcademy Queries? Clarity Awaits</h2>

                        <p className="h6">Unpack course details certification perks and enrollment steps before diving into clinical trials mastery.</p>
                    </div>

                    <div className="faq-lists">
                        <div className="faq-row">
                            <Accordion type="single" collapsible className="faq-accordians">
                                <AccordionItem value="item-1" className="faq-accord-item site-radius-10">
                                    <AccordionTrigger className="h6 text-rg">What is DhatuAcademy?</AccordionTrigger>
                                    <AccordionContent className="text-18 text-rg faq-content" style={{ color: '#7E7E7E' }}>
                                        DhatuAcademy is a specialized training platform offering portal-specific courses certifications to help you work on real-world projects.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2" className="faq-accord-item site-radius-10">
                                    <AccordionTrigger className="h6 text-rg">Who can enroll in these courses?</AccordionTrigger>
                                    <AccordionContent className="text-18 text-rg faq-content" style={{ color: '#7E7E7E' }}>
                                        Anyone looking to upskill and work on enterprise portals—whether you’re a beginner or an experienced professional
                                    </AccordionContent>
                                </AccordionItem>

                                
                                <AccordionItem value="item-3" className="faq-accord-item site-radius-10">
                                    <AccordionTrigger className="h6 text-rg">Is there any job assistance after certification?</AccordionTrigger>
                                    <AccordionContent className="text-18 text-rg faq-content" style={{ color: '#7E7E7E' }}>
                                        Yes, we provide guidance and resources to help you apply your skills to real projects and connect with opportunities.
                                    </AccordionContent>
                                </AccordionItem>

                            </Accordion>
                        </div>

                        <div className="faq-row">
                            <Accordion type="single" collapsible className="faq-accordians">
                                <AccordionItem value="item-4" className="faq-accord-item site-radius-10">
                                    <AccordionTrigger className="h6 text-rg">What kind of portals will I learn about?</AccordionTrigger>
                                    <AccordionContent className="text-18 text-rg faq-content" style={{ color: '#7E7E7E' }}>
                                        Our courses cover popular enterprise portals and platforms used in real-world business environments.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-5" className="faq-accord-item site-radius-10">
                                    <AccordionTrigger className="h6 text-rg">Are the courses self-paced or live?</AccordionTrigger>
                                    <AccordionContent className="text-18 text-rg faq-content" style={{ color: '#7E7E7E' }}>
                                        We offer both options—self-paced modules for flexibility and live sessions for interactive learning.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-6" className="faq-accord-item site-radius-10">
                                    <AccordionTrigger className="h6 text-rg">Do I get a certificate after completing the course?</AccordionTrigger>
                                    <AccordionContent className="text-18 text-rg faq-content" style={{ color: '#7E7E7E' }}>
                                        Yes! Every course comes with an industry-recognized certificate upon successful completion.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}