import { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { CharacterTypes } from "../types/CharacterTypes";
import CharacterCard from "./CharacterCard";
import { FetchEpisodesTypes } from "../types/FetchEpisodesTypes";

type AccordionComponentProps = {
    readonly title: string;
    readonly subtitle: string;
    readonly episode: FetchEpisodesTypes;
};

export default function AccordionEpisodes({
    title,
    subtitle,
    episode,
}: AccordionComponentProps) {
    const [characters, setCharacters] = useState<CharacterTypes[]>([]);

    const fetchData = async (charUrl: string) => {
        const res = await fetch(`${charUrl}`);
        const data = await res.json();
        return data;
    };

    useEffect(() => {
        const FetchData = async () => {
            const res = await Promise.all(
                episode.characters.map((character) => fetchData(character))
            );
            setCharacters(res);
        };
        FetchData();
    }, [episode.characters]);

    return (
        <Accordion>
            <AccordionItem
                key="1"
                aria-label="Accordion 1"
                subtitle={subtitle}
                title={title}
                classNames={{
                    subtitle: "text-rm-green text-[1rem] xl:text-[1.2rem]",
                    title: "text-rm-light-blue text-lg xl:text-3xl",
                }}
            >
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 2xl:gap-6 pb-12 ">
                    {characters.map((character, index) => (
                        <li key={index}>
                            <CharacterCard
                                characterData={{
                                    name: character.name,
                                    species: character.species,
                                    image: character.image,
                                }}
                            />
                        </li>
                    ))}
                </ul>
            </AccordionItem>
        </Accordion>
    );
}
