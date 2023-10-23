import { useEffect, useState } from "react";
import "./App.css";
import FetchCharacters from "./utils/FetchCharacters";
import { CharacterTypes } from "./types/CharacterTypes";
import Header from "./components/header/Header";
import GradientButton from "./components/GradientButton";

type PageHandlerType = {
    type: "increase" | "decrease";
};

function App() {
    const [characters, setCharacters] = useState<CharacterTypes[]>([]);
    const [page, setPage] = useState<number>(1);

    const handlePage = ({ type }: PageHandlerType) => {
        type === "increase"
            ? setPage((prev) => prev + 1)
            : setPage((prev) => prev - 1);
        console.log("page: ", page);
    };

    useEffect(() => {
        const fetchData = async () => {
            const charactersData = await FetchCharacters({ pageNum: page });
            setCharacters(charactersData);
        };
        fetchData();
    }, [page]);

    console.log("characters", characters);

    return (
        <>
            <div className="starship-detail-container">
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
                <div className="content-ships z-10">
                    <Header />
                    <GradientButton msg={"Hover"}/>
                    {/* <div id="0" className="mt-4">
                        {characters.map((character) => (
                            <div key={character.id}>
                                <div className="text-white">
                                    {character.name}
                                </div>
                            </div>
                        ))}
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
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default App;
