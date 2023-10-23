import AppLayout from "../layouts/AppLayout";
import { HeroSection } from "../components/HeroSection";
import CardElements from "../components/CardElements";
import { CharacterTypes } from "../types/CharacterTypes";
import FetchCharacters from "../utils/FetchCharacters";
import { PageHandlerType } from "../types/PageHandlerType";
import { useEffect, useState } from "react";

const Characters = () => {
    const [characters, setCharacters] = useState<CharacterTypes[]>([]);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        const fetchData = async () => {
            const charactersData = await FetchCharacters({ pageNum: page });
            setCharacters(charactersData);
        };
        fetchData();
    }, [page]);

    const handlePage = ({ type }: PageHandlerType) => {
        type === "increase"
            ? setPage((prev) => prev + 1)
            : setPage((prev) => prev - 1);
        console.log("page: ", page);
    };
    return (
        <>
            <AppLayout>
                <HeroSection
                    heroTitle="Characters"
                    heroContent="Click here and discover all the characters"
                    heroUrl="#charGallery"
                />
                <div id="charGallery" className="pointer-events-auto h-full">
                    <div id="0" className="grid grid-cols-4 gap-6 pb-12">
                        {characters.map((character) => (
                            <div key={character.id}>
                                <CardElements
                                    cardTitle={character.name}
                                    cardContent={character.location.name}
                                    cardImg={character.image}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-4 p-4">
                            <button
                                className="text-white border rounded-lg text-2xl px-4 py-1"
                                onClick={() => handlePage({ type: "decrease" })}
                            >
                                -
                            </button>
                            <button
                                className="text-white border rounded-lg text-2xl px-4 py-1"
                                onClick={() => handlePage({ type: "increase" })}
                            >
                                +
                            </button>
                        </div>
                </div>
            </AppLayout>
        </>
    );
};

export default Characters;
