import CTA from "@/components/CTA";
import SoluComplianceList from "@/components/Solutionpage/SoluComplianceList";
import SoluEasilyAddProducts from "@/components/Solutionpage/SoluEasilyAddProducts";
import SolutionHero from "@/components/Solutionpage/SoluHero";
import SolutionTraningMatters from "@/components/Solutionpage/SolutionTraningMatters";
import SoluTrainAcademy from "@/components/Solutionpage/SoluTrainAcademy";

export default function Solutions() {
    return (
        <>
            <main>
                <SolutionHero />

                <SoluComplianceList />

                <SoluEasilyAddProducts />

                <SolutionTraningMatters />

                <SoluTrainAcademy />

                <CTA />
            </main>
        </>
    );
}