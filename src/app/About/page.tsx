import AboutCommitment from "@/components/Aboutpage/AboutCommitment";
import ComplianceSlider from "@/components/Aboutpage/AboutComplianceSlider";
import AboutHero from "@/components/Aboutpage/AboutHero";
import AboutRole from "@/components/Aboutpage/AboutRole";
import AboutTimeline from "@/components/Aboutpage/AboutTimeline";
import WhyChoose from "@/components/Aboutpage/AboutWhyAcademy";
import CTA from "@/components/CTA";
import { fetchGraphQL } from "@/lib/graphql";

type AboutpageData = {
    page: {
        aboutpage: {
            aboutHeroTitle: string;

            vmSectionTitle: string;
            vmSectionSubtitle: string;
            vmInformations: {
                missionTitle: string;
                missionSubtitle: string;

                visionTitle: string;
                visionSubtitle: string;

                statis1Number: string;
                statis1Description: string;
                statis2Number: string;
                statis2Description: string;
                statis3Number: string;
                statis3Description: string;
            }

            whatSetDhatuacademyTitle: string;
            whatSetDhatuacademySubtitle: string;
            whatSetDaList: {
                item1Title: string;
                item2Title: string;
                item3Title: string;
                item4Title: string;
                item1Subtitle: string;
                item2Subtitle: string;
                item3Subtitle: string;
                item4Subtitle: string;
            };

            roleTitle: string;
            roleSubtitle: string;
            aboutRolesList: {
                roleList1Title: string;
                roleList2Title: string;
                roleList3Title: string;
                roleList4Title: string;
                roleList5Title: string;
                roleList1Subtitle: string;
                roleList2Subtitle: string;
                roleList3Subtitle: string;
                roleList4Subtitle: string;
                roleList5Subtitle: string;
            };

            lifecycleTitle: string;
            lifecycleSubtitle: string;
            lifecycleSteps: {
                step1Title: string;
                step1Subtitle: string;
                step2Title: string;
                step2Subtitle: string;
                step3Title: string;
                step3Subtitle: string;
                step4Title: string;
                step4Subtitle: string;
                step5Title: string;
                step5Subtitle: string;
                step6Title: string;
                step6Subtitle: string;
            }

            complianceAssuranceTitle: string;
            complianceAssuranceSubtitle: string;
            complianceAssuranceSliders: {
                slider1Title: string;
                slider1Subtitle: string;
                slider2Title: string;
                slider2Subtitle: string;
                slider3Title: string;
                slider3Subtitle: string;
            }
		};
    };
}

export default async function About (){

    const About = await fetchGraphQL<AboutpageData>(`
            query {
                page(id: "/aboutpage", idType: URI) {
                    aboutpage {
                        aboutHeroTitle

                        vmSectionTitle
                        vmSectionSubtitle
                        vmInformations {
                            missionTitle
                            missionSubtitle

                            visionTitle
                            visionSubtitle

                            statis1Number
                            statis1Description
                            statis2Number
                            statis2Description
                            statis3Number
                            statis3Description
                        }

                        whatSetDhatuacademyTitle
                        whatSetDhatuacademySubtitle
                        whatSetDaList {
                            item1Title
                            item1Subtitle
                            item2Title
                            item2Subtitle
                            item3Title
                            item3Subtitle
                            item4Title
                            item4Subtitle
                        }

                        roleTitle
                        roleSubtitle
                        aboutRolesList {
                            roleList1Title
                            roleList1Subtitle
                            roleList2Title
                            roleList2Subtitle
                            roleList3Title
                            roleList3Subtitle
                            roleList4Title
                            roleList4Subtitle
                            roleList5Title
                            roleList5Subtitle
                        }

                        lifecycleTitle
                        lifecycleSubtitle
                        lifecycleSteps {
                            step1Title
                            step1Subtitle
                            step2Title
                            step2Subtitle
                            step3Title
                            step3Subtitle
                            step4Title
                            step4Subtitle
                            step5Title
                            step5Subtitle
                            step6Title
                            step6Subtitle
                        }

                        complianceAssuranceTitle
                        complianceAssuranceSubtitle
                        complianceAssuranceSliders {
                            slider1Title
                            slider1Subtitle
                            slider2Title
                            slider2Subtitle
                            slider3Title
                            slider3Subtitle
                        }

                    }
                }
            }
        `);

    const AboutFetch = About.page.aboutpage;

    return (
        <>
            <AboutHero aboutHeroTitle={AboutFetch.aboutHeroTitle} />

            <AboutCommitment vmSectionTitle={AboutFetch.vmSectionTitle} vmSectionSubtitle={AboutFetch.vmSectionSubtitle} vmInformations={AboutFetch.vmInformations} />

            <WhyChoose whatSetDhatuacademyTitle={AboutFetch.whatSetDhatuacademyTitle} whatSetDhatuacademySubtitle={AboutFetch.whatSetDhatuacademySubtitle} whatSetDaList={AboutFetch.whatSetDaList} />

            <AboutRole roleTitle={AboutFetch.roleTitle} roleSubtitle={AboutFetch.roleSubtitle} aboutRolesList={AboutFetch.aboutRolesList}/>

            <AboutTimeline lifecycleTitle={AboutFetch.lifecycleTitle} lifecycleSubtitle={AboutFetch.lifecycleSubtitle} lifecycleSteps={AboutFetch.lifecycleSteps} />

            <ComplianceSlider complianceAssuranceTitle={AboutFetch.complianceAssuranceTitle} complianceAssuranceSubtitle={AboutFetch.complianceAssuranceSubtitle} complianceAssuranceSliders={AboutFetch.complianceAssuranceSliders} />

            <CTA />
        </>
    );
}