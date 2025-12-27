import CTA from "@/components/CTA";
import Header from "@/components/Header";
import HomeBlogs from "@/components/Homepage/HomeBlogs";
import FAQs from "@/components/Homepage/HomeFAQ";
import HomeHero from "@/components/Homepage/HomeHero";
import HomeStats from "@/components/Homepage/HomeStats";
import HomeTestimonials from "@/components/Homepage/HomeTestimonials";
import HomeTraningSteps from "@/components/Homepage/HomeTraningSteps";
import TrialGrowth from "@/components/Homepage/HomeTrialsGrowth";
import USPs from "@/components/Homepage/HomeUSP";
import Head from "next/head";

export default function Home() {
    return (
		<>
			<main>
				<Header />

				<HomeHero />

				<HomeStats />

				<HomeTraningSteps />

				<USPs />

				<TrialGrowth />

				<HomeBlogs />

				<HomeTestimonials />

				<FAQs />

				<CTA />
			</main>
		</>
	);
}
