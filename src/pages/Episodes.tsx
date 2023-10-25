import AppLayout from "../layouts/AppLayout";
import { HeroSection } from "../components/HeroSection";
import { FetchEpisodes } from "../utils/FetchEpisodes";
import { useEffect, useState } from "react";
import { FetchEpisodesTypes } from "../types/FetchEpisodesTypes";
import AccordionEpisodes from "../components/AccordionEpisodes";

const Episodes = () => {
    const [episodes, setEpisodes] = useState<FetchEpisodesTypes[]>([]);
    useEffect(() => {
        const FetchData = async () => {
            const res = await FetchEpisodes();
            setEpisodes(res);
        };
        FetchData();
    }, []);

    return (
            <AppLayout>
                <HeroSection
                    heroTitle="Episodes"
                    heroContent="Click here to explore the episodes"
                    heroUrl="#epiGallery"
                />
                <main id="epiGallery" className="w-[90%] xl:w-[70%] 2xl:w-[50%]">
                    {episodes.map((episode) => (
                        <AccordionEpisodes
                            key={episode.id}
                            title={episode.name}
                            subtitle={episode.episode}
                            episode={episode}
                        />
                    ))}
                </main>
            </AppLayout>
    );
};

export default Episodes;
