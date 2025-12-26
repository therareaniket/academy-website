import CTA from "@/components/CTA";
import Header from "@/components/Header";
import HomeHero from "@/components/Homepage/HomeHero";
import HomeStats from "@/components/Homepage/HomeStats";
import HomeTraningSteps from "@/components/Homepage/HomeTraningSteps";
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

				<CTA />
			</main>
		</>
	);
}
