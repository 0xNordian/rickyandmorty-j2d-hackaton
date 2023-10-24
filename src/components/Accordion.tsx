import { useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { CharacterTypes } from "../types/CharacterTypes";
import CharacterCard from "./CharacterCard";

type LocationTypes = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
};

type AccordionComponentProps = {
    title: string;
    subtitle: string;
    location: LocationTypes;
};

export default function AccordionComponent({
    title,
    subtitle,
    location,
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
                location.residents.map((resident) => fetchData(resident))
            );
            setCharacters(res);
        };
        FetchData();
    }, [location.residents]);

    return (
        <Accordion>
            <AccordionItem
                key="1"
                aria-label="Accordion 1"
                subtitle={subtitle}
                title={title}
                classNames={{
                    subtitle: "text-rm-green",
                    title: "text-rm-light-blue",
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