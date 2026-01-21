import ContactForm from "@/components/Contactpage/ContactForm";
import ContactHero from "@/components/Contactpage/ContactHero";
import CTA from "@/components/CTA";
import { fetchGraphQL } from "@/lib/graphql";

type ContactpageData = {
    page: {
        contactpage: {
            contactHeroTitle: string;

            contactFormTitle: string;
            contactFormSubtitle: string;
            contactEmail: string;
            contactPhone: string;
            contactAddress: string;
        };
    };
}

export default async function Contact() {

        const Contact = await fetchGraphQL<ContactpageData>(`
                query {
                    page(id: "/contactpage", idType: URI) {
                        contactpage {
                            contactHeroTitle

                            contactFormTitle
                            contactFormSubtitle
                            contactEmail
                            contactPhone
                            contactAddress
                        }
                    }
                }
            `);
    
        const ContactFetch = Contact.page.contactpage;

    return (
        <>
            <ContactHero contactHeroTitle={ContactFetch.contactHeroTitle}/>

            <ContactForm contactFormTitle={ContactFetch.contactFormTitle} contactFormSubtitle={ContactFetch.contactFormSubtitle} contactEmail={ContactFetch.contactEmail} contactPhone={ContactFetch.contactPhone} contactAddress={ContactFetch.contactAddress} />

            <CTA />
        </>
    );
}