import AboutCommitment from "@/components/Aboutpage/AboutCommitment";
import ComplianceSlider from "@/components/Aboutpage/AboutComplianceSlider";
import AboutHero from "@/components/Aboutpage/AboutHero";
import AboutRole from "@/components/Aboutpage/AboutRole";
import AboutTimeline from "@/components/Aboutpage/AboutTimeline";
import WhyChoose from "@/components/Aboutpage/AboutWhyAcademy";

export default function About (){
    return (
        <>
            <AboutHero />

            <AboutCommitment />

            <WhyChoose />

            <AboutRole />

            <AboutTimeline />

            <ComplianceSlider />
        </>
    );
}