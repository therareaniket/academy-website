import ContactForm from "@/components/Contactpage/ContactForm";
import ContactHero from "@/components/Contactpage/ContactHero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function Contact (){
    return (
        <>
            {/* <Header /> */}

            <ContactHero />

            <ContactForm />

            <CTA />      

            {/* <Footer /> */}
        </>
    );
}