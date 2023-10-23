import { FetchCharacterTypes } from "../types/FetchCharacterTypes";

export default async function FetchCharacters({pageNum}: FetchCharacterTypes) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNum}`);
    const data = await response.json();
    // console.log("data.results: ", data.results);
    return data.results;
}