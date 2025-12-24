import Header from "@/components/Header";
import HomeHero from "@/components/Homepage/HomeHero";
import HomeStats from "@/components/Homepage/HomeStats";
import Head from "next/head";

export default function Home() {
    return (
		<>
			<main>
				<Header />

				{/* <HomeHero /> */}

				<HomeStats />
			</main>
		</>
	);
}
