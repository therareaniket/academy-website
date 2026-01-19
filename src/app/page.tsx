import CTA from "@/components/CTA";
import HomeBlogs from "@/components/Homepage/HomeBlogs";
import FAQs from "@/components/Homepage/HomeFAQ";
import HomeHero from "@/components/Homepage/HomeHero";
import HomePricing from "@/components/Homepage/HomePricing";
import HomeStats from "@/components/Homepage/HomeStats";
import HomeTestimonials from "@/components/Homepage/HomeTestimonials";
import HomeTraningSteps from "@/components/Homepage/HomeTraningSteps";
import TrialGrowth from "@/components/Homepage/HomeTrialsGrowth";
import USPs from "@/components/Homepage/HomeUSP";
import { fetchGraphQL } from "@/lib/graphql";
import Head from "next/head";

type HomepageData = {
    page: {
        homepage: {
			statisticsTitle: string;
			statisticsSubtitle: string;

			statistics1Number: string;
			statistics1Description: string;
			statistics2Number: string;
			statistics2Description: string;
			statistics3Number: string;
			statistics3Description: string;

			careerStepsTitle: string;
			careerStepsSubtitle: string;

			careerStep1Title: string;
			careerStep1Subtitle: string;
			careerStep2Title: string;
			careerStep2Subtitle: string;
			careerStep3Title: string;
			careerStep3Subtitle: string;

			keyFeaturesTitle: string;
			keyFeaturesSubtitle: string;
			keyFeature1Title: string;
			keyFeature1Subtitle: string;
			keyFeature2Title: string;
			keyFeature2Subtitle: string;
			keyFeature3Title: string;
			keyFeature3Subtitle: string;
			keyFeature4Title: string;
			keyFeature4Subtitle: string;
			keyFeature5Title: string;
			keyFeature5Subtitle: string;
			keyFeature6Title: string;
			keyFeature6Subtitle: string;

			pricingTitle: string;
			pricingSubtitle: string;
			planList : {
				standardPlanIntro: string;
				standardInclude1: string;
				standardInclude2: string;
				standardInclude3: string;
				standardInclude4: string;
				standardInclude5: string;

				enterprisePlanIntro: string;
				enterpriseInclude1: string;
				enterpriseInclude2: string;
				enterpriseInclude3: string;
				enterpriseInclude4: string;
				enterpriseInclude5: string;
			};

			certificationTitle: string;
			certificationSubtitle: string;
			certificationUsp1: string;
			certificationUsp2: string;
			certificationUsp3: string;

			blogsTitle: string;
			blogsSubtitle: string;

			testimonialsTitle: string;
			testimonialsSubtitle: string;
			testimonialList : {
				testimonial1Name: string;
				testimonial1Initial: string;
				testimonial1Designation: string;
				testimonial1Message: string;

				testimonial2Name: string;
				testimonial2Initial: string;
				testimonial2Designation: string;
				testimonial2Message: string;

				testimonial3Name: string;
				testimonial3Initial: string;
				testimonial3Designation: string;
				testimonial3Message: string;

				testimonial4Name: string;
				testimonial4Initial: string;
				testimonial4Designation: string;
				testimonial4Message: string;
			};

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
		};
    };
}

export default async function Home() {

	const Home = await fetchGraphQL<HomepageData>(`
        query {
            page(id: "/", idType: URI) {
                homepage {
					statisticsTitle
					statisticsSubtitle

					statistics1Number
					statistics1Description
					statistics2Number
					statistics2Description
					statistics3Number
					statistics3Description

					careerStepsTitle
					careerStepsSubtitle

					careerStep1Title
					careerStep1Subtitle
					careerStep2Title
					careerStep2Subtitle
					careerStep3Title
					careerStep3Subtitle

					keyFeaturesTitle
					keyFeaturesSubtitle
					keyFeature1Title
					keyFeature1Subtitle
					keyFeature2Title
					keyFeature2Subtitle
					keyFeature3Title
					keyFeature3Subtitle
					keyFeature4Title
					keyFeature4Subtitle
					keyFeature5Title
					keyFeature5Subtitle
					keyFeature6Title
					keyFeature6Subtitle

					pricingTitle
					pricingSubtitle
					planList{
						standardPlanIntro
						standardInclude1
						standardInclude2
						standardInclude3
						standardInclude4
						standardInclude5

						enterprisePlanIntro
						enterpriseInclude1
						enterpriseInclude2
						enterpriseInclude3
						enterpriseInclude4
						enterpriseInclude5
					}

					certificationTitle
					certificationSubtitle
					certificationUsp1
					certificationUsp2
					certificationUsp3

					blogsTitle
					blogsSubtitle

					testimonialsTitle
					testimonialsSubtitle
					testimonialList {
						testimonial1Name
						testimonial1Initial
						testimonial1Designation
						testimonial1Message

						testimonial2Name
						testimonial2Initial
						testimonial2Designation
						testimonial2Message

						testimonial3Name
						testimonial3Initial
						testimonial3Designation
						testimonial3Message

						testimonial4Name
						testimonial4Initial
						testimonial4Designation
						testimonial4Message
					}

					faqTitle
					faqSubtitle
					faqList {
						question1
						question2
						question3
						question4
						question5
						question6
						answer1
						answer2
						answer3
						answer4
						answer5
						answer6
					}
				}
            }
        }
	`);

	const HomeFetch = Home.page.homepage;

    return (
		<>
			<main>
				{/* <Header /> */}

				<HomeHero />

				<HomeStats statisticsTitle={HomeFetch.statisticsTitle} statisticsSubtitle={HomeFetch.statisticsSubtitle} statistics1Number={HomeFetch.statistics1Number} statistics1Description={HomeFetch.statistics1Description} statistics2Number={HomeFetch.statistics2Number} statistics2Description={HomeFetch.statistics2Description} statistics3Number={HomeFetch.statistics3Number} statistics3Description={HomeFetch.statistics3Description} />

				<HomeTraningSteps careerStepsTitle={HomeFetch.careerStepsTitle} careerStepsSubtitle={HomeFetch.careerStepsSubtitle} careerStep1Title={HomeFetch.careerStep1Title} careerStep1Subtitle={HomeFetch.careerStep1Subtitle} careerStep2Title={HomeFetch.careerStep2Title} careerStep2Subtitle={HomeFetch.careerStep2Subtitle} careerStep3Title={HomeFetch.careerStep3Title} careerStep3Subtitle={HomeFetch.careerStep3Subtitle} />

				<USPs keyFeaturesTitle={HomeFetch.keyFeaturesTitle} keyFeaturesSubtitle={HomeFetch.keyFeaturesSubtitle} keyFeature1Title={HomeFetch.keyFeature1Title} keyFeature1Subtitle={HomeFetch.keyFeature1Subtitle} keyFeature2Title={HomeFetch.keyFeature2Title} keyFeature2Subtitle={HomeFetch.keyFeature2Subtitle} keyFeature3Title={HomeFetch.keyFeature3Title} keyFeature3Subtitle={HomeFetch.keyFeature3Subtitle} keyFeature4Title={HomeFetch.keyFeature4Title} keyFeature4Subtitle={HomeFetch.keyFeature4Subtitle} keyFeature5Title={HomeFetch.keyFeature5Title} keyFeature5Subtitle={HomeFetch.keyFeature5Subtitle} keyFeature6Title={HomeFetch.keyFeature6Title} keyFeature6Subtitle={HomeFetch.keyFeature6Subtitle} />

				<HomePricing pricingTitle={HomeFetch.pricingTitle} pricingSubtitle={HomeFetch.pricingSubtitle} planList={HomeFetch.planList} />

				<TrialGrowth certificationTitle={HomeFetch.certificationTitle} certificationSubtitle={HomeFetch.certificationSubtitle} certificationUsp1={HomeFetch.certificationUsp1} certificationUsp2={HomeFetch.certificationUsp2} certificationUsp3={HomeFetch.certificationUsp3} />

				<HomeBlogs blogsTitle={HomeFetch.blogsTitle} blogsSubtitle={HomeFetch.blogsSubtitle} />

				<HomeTestimonials testimonialsTitle={HomeFetch.testimonialsTitle} testimonialsSubtitle={HomeFetch.testimonialsSubtitle} testimonialList={HomeFetch.testimonialList} />

				<FAQs faqTitle={HomeFetch.faqTitle} faqSubtitle={HomeFetch.faqSubtitle} faqList={HomeFetch.faqList}/>

				<CTA />
			</main>
		</>
	);
}
