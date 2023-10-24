import { FetchEpisodesTypes } from "../types/FetchEpisodesTypes";

export const FetchEpisodes = async () => {
    try {
        const response = await fetch(
            "https://rickandmortyapi.com/api/episode"
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const locations: FetchEpisodesTypes[] = data.results;
        return locations;
    } catch (error) {
        console.error("Error fetching locations:", error);
        throw error;
    }
};
