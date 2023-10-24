import { LocationTypes } from "../types/FetchLocationTypes";

export const FetchLocations = async () => {
    try {
        const response = await fetch(
            "https://rickandmortyapi.com/api/location"
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const locations: LocationTypes[] = data.results;
        return locations;
    } catch (error) {
        console.error("Error fetching locations:", error);
        throw error;
    }
};
