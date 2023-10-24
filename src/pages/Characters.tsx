import AppLayout from "../layouts/AppLayout";
import { HeroSection } from "../components/HeroSection";
import CardElements from "../components/CardElements";
import { CharacterTypes } from "../types/CharacterTypes";
import FetchCharacters from "../utils/FetchCharacters";
import { PageHandlerType } from "../types/PageHandlerType";
import { useEffect, useState } from "react";
import GradientButton from "../components/GradientButton";
import { BiArrowFromBottom } from "react-icons/bi";
import Search from "../components/Search";

const Characters = () => {
    const [characters, setCharacters] = useState<CharacterTypes[]>([]);
    const [page, setPage] = useState<number>(1);
    const [filteredCharacters, setFilteredCharacters] = useState<
        CharacterTypes[]
    >([]);

    useEffect(() => {
        const fetchData = async () => {
            if (page === 1 && characters.length === 0) {
                const charactersData = await FetchCharacters({ pageNum: page });
                setCharacters(charactersData);
            }
        };

        fetchData();
    }, [page, characters]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const handlePage = async ({ type }: PageHandlerType) => {
        if (type === "increase") {
            const nextPage = page + 1;
            const charactersData = await FetchCharacters({ pageNum: nextPage });

            if (charactersData.length > 0) {
                setPage(nextPage);
                setCharacters((prevCharacters) => [
                    ...prevCharacters,
                    ...charactersData,
                ]);
            }
        }
    };

    const handleScrollTop = () => {
        window.scrollY >= 100 &&
            window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleSearch = (str: string) => {
        const searchTerm = str.toLowerCase();
        const matchingCharacters = characters.filter((character) =>
            character.name.toLowerCase().includes(searchTerm)
        );

        setFilteredCharacters(matchingCharacters);

        // console.log("filteredCharacters: ", matchingCharacters);
    };

    const filteredCharactersLength = filteredCharacters.length;
    const arr = filteredCharactersLength > 0 ? filteredCharacters : characters;

    return (
        <>
            <AppLayout>
                <HeroSection
                    heroTitle="Characters"
                    heroContent="Click here and discover all the characters"
                    heroUrl="#charGallery"
                />
                <div className="w-[90%]">
                    <div
                        id="charGallery"
                        className="pointer-events-auto h-full w-full"
                    >
                        <div className="flex">
                            <Search handleSearch={handleSearch} />
                        </div>
                        <div
                            id="0"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 2xl:gap-6 pb-12 "
                        >
                            {arr.map((character, index) => (
                                <div
                                    key={`${character.id}-${index}`}
                                    className="w-full"
                                >
                                    <CardElements
                                        cardTitle={character.name}
                                        cardContent={character.location.name}
                                        cardImg={character.image}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <div className="flex justify-center w-[80%]">
                                <GradientButton>
                                    <div
                                        className="rounded-lg text-2xl px-4 py-1"
                                        onClick={() =>
                                            handlePage({ type: "increase" })
                                        }
                                    >
                                        Load More
                                    </div>
                                </GradientButton>
                            </div>
                            <div className="w-[4%] flex justify-center ml-4">
                                <button
                                    className="scroll-smooth rounded-full text-2xl mr-4 px-3 py-2 border border-rm-green"
                                    onClick={handleScrollTop}
                                >
                                    <BiArrowFromBottom />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    );
};

export default Characters;
