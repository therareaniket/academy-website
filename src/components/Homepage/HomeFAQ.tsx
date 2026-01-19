"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { motion } from "framer-motion"

type HomeFAQProps = {
    faqTitle: string;
    faqSubtitle: string;
    faqList: {  
        question1: string;
        answer1: string;
        question2: string;
        answer2: string;
        question3: string;
        answer3: string;
        question4: string;
        answer4: string;
        question5: string;
        answer5: string;
        question6: string;
        answer6: string;
    }
}

export default function FAQs( { faqTitle, faqSubtitle, faqList }: HomeFAQProps ) {

    const homeFAQAnimations = (typeof window !== "undefined" && window.innerWidth >= 1200) ? {
		title_ltr_initial: { x: "0px", opacity: 1, },
		title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6, } },

		subTitle_ltr_initial: { x: "0px", opacity: 1, },
		subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 2, duration: 0.6, } },
    }  : {

        title_ltr_initial: { x: "-50px", opacity: 0, },
		title_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1, duration: 0.6, } },

		subTitle_ltr_initial: { x: "-50px", opacity: 0, },
		subTitle_ltr_animate: { x: "0px", opacity: 1, transition: { delay: 1.5, duration: 0.6, } },
    }

    return (
        <>
            <section className="section" style={{ paddingBottom: '0px' }}>
                <div className="container">
                    <div className="faq-headings">
                        <motion.h2 initial={homeFAQAnimations.title_ltr_initial} whileInView={homeFAQAnimations.title_ltr_animate} viewport={{ once: true, amount: 0.8 }}>{faqTitle}</motion.h2>

                        <motion.p initial={homeFAQAnimations.subTitle_ltr_initial} whileInView={homeFAQAnimations.subTitle_ltr_animate} viewport={{ once: true, amount: 0.8 }} className="h6">{faqSubtitle}</motion.p>
                    </div>

                    <div className="faq-lists">
                        <div className="faq-row">
                            <Accordion type="single" collapsible className="faq-accordians">
                                <AccordionItem value="item-1" className="faq-accord-item site-radius-10">
                                    <AccordionTrigger className="h6 text-rg">{faqList.question1}</AccordionTrigger>
                                    <AccordionContent className="text-18 text-rg faq-content" style={{ color: '#7E7E7E' }}>{faqList.answer1}</AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2" className="faq-accord-item site-radius-10">
                                    <AccordionTrigger className="h6 text-rg">{faqList.question2}</AccordionTrigger>
                                    <AccordionContent className="text-18 text-rg faq-content" style={{ color: '#7E7E7E' }}>{faqList.answer2}</AccordionContent>
                                </AccordionItem>

                                
                                <AccordionItem value="item-3" className="faq-accord-item site-radius-10">
                                    <AccordionTrigger className="h6 text-rg">{faqList.question3}</AccordionTrigger>
                                    <AccordionContent className="text-18 text-rg faq-content" style={{ color: '#7E7E7E' }}>{faqList.answer3}</AccordionContent>
                                </AccordionItem>

                            </Accordion>
                        </div>

                        <div className="faq-row">
                            <Accordion type="single" collapsible className="faq-accordians">
                                <AccordionItem value="item-4" className="faq-accord-item site-radius-10">
                                    <AccordionTrigger className="h6 text-rg">{faqList.question4}</AccordionTrigger>
                                    <AccordionContent className="text-18 text-rg faq-content" style={{ color: '#7E7E7E' }}>{faqList.answer4}</AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-5" className="faq-accord-item site-radius-10">
                                    <AccordionTrigger className="h6 text-rg">{faqList.question5}</AccordionTrigger>
                                    <AccordionContent className="text-18 text-rg faq-content" style={{ color: '#7E7E7E' }}>{faqList.answer5}</AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-6" className="faq-accord-item site-radius-10">
                                    <AccordionTrigger className="h6 text-rg">{faqList.question6}</AccordionTrigger>
                                    <AccordionContent className="text-18 text-rg faq-content" style={{ color: '#7E7E7E' }}>{faqList.answer6}</AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}