import Footer from "@/components/Footer";
import ResourceHero from "@/components/Resourcespage/ResourceHero";
import ResourcesCards from "@/components/Resourcespage/ResourcesCards";
import { fetchGraphQL } from "@/lib/graphql";

type ResourcepageData = {
    page: {
        resourcespage: {
            resourcesHeroTitle: string;
		};
    };
}

export default async function Resources() {

    const Resource = await fetchGraphQL<ResourcepageData>(`
            query {
                page(id: "/resourcespage", idType: URI) {
                    resourcespage {
                        resourcesHeroTitle
                    }
                }
            }
        `);

    const ResourceFetch = Resource.page.resourcespage;

    return (
        <>
            <ResourceHero resourcesHeroTitle={ResourceFetch.resourcesHeroTitle} />

            <ResourcesCards />
        </>
    );
}