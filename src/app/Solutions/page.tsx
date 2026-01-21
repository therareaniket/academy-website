import CTA from "@/components/CTA";
import SoluComplianceList from "@/components/Solutionpage/SoluComplianceList";
import SoluEasilyAddProducts from "@/components/Solutionpage/SoluEasilyAddProducts";
import SolutionHero from "@/components/Solutionpage/SoluHero";
import SolutionTraningMatters from "@/components/Solutionpage/SolutionTraningMatters";
import SoluTrainAcademy from "@/components/Solutionpage/SoluTrainAcademy";
import { fetchGraphQL } from "@/lib/graphql";

type SolutionpageData = {
    page: {
        solutionpage: {
            solutionHeroTitle: string;

            empoweringComplianceTitle: string;
            empoweringComplianceSubtitle: string;

            addProductTitle: string;

            whyTrainingMattersTitle: string;
            whyTrainingMattersSubtitle: string;
            whyTrainingMattersUsp1: string;
            whyTrainingMattersUsp2: string;
            whyTrainingMattersUsp3: string;
            whyTrainingMattersUsp4: string;

            solutionWhyDaTitle: string;
            solutionWhyDaSubtitle: string;
            solutionWhyDaList1Title: string;
            solutionWhyDaList1Subtitle: string;
            solutionWhyDaList2Title: string;
            solutionWhyDaList2Subtitle: string;
            solutionWhyDaList3Title: string;
            solutionWhyDaList3Subtitle: string;
            solutionWhyDaList4Title: string;
            solutionWhyDaList4Subtitle: string;

		};
    };
}

export default async function Solutions() {

    const Solutions = await fetchGraphQL<SolutionpageData>(`
            query {
                page(id: "/solutionpage", idType: URI) {
                    solutionpage {
                        solutionHeroTitle

                        empoweringComplianceTitle
                        empoweringComplianceSubtitle

                        addProductTitle

                        whyTrainingMattersTitle
                        whyTrainingMattersSubtitle
                        whyTrainingMattersUsp1
                        whyTrainingMattersUsp2
                        whyTrainingMattersUsp3
                        whyTrainingMattersUsp4 

                        solutionWhyDaTitle
                        solutionWhyDaSubtitle
                        solutionWhyDaList1Title
                        solutionWhyDaList1Subtitle
                        solutionWhyDaList2Title
                        solutionWhyDaList2Subtitle
                        solutionWhyDaList3Title
                        solutionWhyDaList3Subtitle
                        solutionWhyDaList4Title
                        solutionWhyDaList4Subtitle
                    }
                }
            }
        `);

    const SolutionsFetch = Solutions.page.solutionpage;

    return (
        <>
            <main>
                <SolutionHero solutionHeroTitle={SolutionsFetch.solutionHeroTitle} />

                <SoluComplianceList empoweringComplianceTitle={SolutionsFetch.empoweringComplianceTitle} empoweringComplianceSubtitle={SolutionsFetch.empoweringComplianceSubtitle} />

                <SoluEasilyAddProducts addProductTitle={SolutionsFetch.addProductTitle} />

                <SolutionTraningMatters whyTrainingMattersTitle={SolutionsFetch.whyTrainingMattersTitle} whyTrainingMattersSubtitle={SolutionsFetch.whyTrainingMattersSubtitle} whyTrainingMattersUsp1={SolutionsFetch.whyTrainingMattersUsp1} whyTrainingMattersUsp2={SolutionsFetch.whyTrainingMattersUsp2} whyTrainingMattersUsp3={SolutionsFetch.whyTrainingMattersUsp3} whyTrainingMattersUsp4={SolutionsFetch.whyTrainingMattersUsp4} />

                <SoluTrainAcademy solutionWhyDaTitle={SolutionsFetch.solutionWhyDaTitle} solutionWhyDaSubtitle={SolutionsFetch.solutionWhyDaSubtitle} solutionWhyDaList1Title={SolutionsFetch.solutionWhyDaList1Title} solutionWhyDaList1Subtitle={SolutionsFetch.solutionWhyDaList1Subtitle} solutionWhyDaList2Title={SolutionsFetch.solutionWhyDaList2Title} solutionWhyDaList2Subtitle={SolutionsFetch.solutionWhyDaList2Subtitle} solutionWhyDaList3Title={SolutionsFetch.solutionWhyDaList3Title} solutionWhyDaList3Subtitle={SolutionsFetch.solutionWhyDaList3Subtitle} solutionWhyDaList4Title={SolutionsFetch.solutionWhyDaList4Title} solutionWhyDaList4Subtitle={SolutionsFetch.solutionWhyDaList4Subtitle} />

                <CTA />
            </main>
        </>
    );
}




// render-REP-Data