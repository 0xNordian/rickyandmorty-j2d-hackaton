import { useEffect, useState } from "react";
import "./App.css";
import FetchCharacters from "./utils/FetchCharacters";
import { CharacterTypes } from "./types/CharacterTypes";

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
            console.log("page: ", page)
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
        <div className="bg-slate-800 w-screen h-screen">
            <h1 className="text-2xl text-white">TEST</h1>
            {characters.map((character) => (
                <div key={character.id}>
                    <div className="text-white">{character.name}</div>
                </div>
            ))}
            <div className="flex gap-4 p-4">
                <button
                    className="text-white border rounded-lg text-2xl px-3"
                    onClick={() => handlePage({ type: "decrease" })}
                >
                    -
                </button>
                <button
                    className="text-white border rounded-lg text-2xl px-3"
                    onClick={() => handlePage({ type: "increase" })}
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default App;
