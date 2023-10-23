import { useEffect, useState } from 'react'
import './App.css'
import FetchCharacters from './utils/FetchCharacters'
import { CharacterTypes } from './types/CharacterTypes'

function App() {
  const [characters, setCharacters] = useState<CharacterTypes[]>([])
  
  useEffect(() => {
    const fetchData = async () => {
      const charactersData = await FetchCharacters({pageNum: 1});
      setCharacters(charactersData);
    };
    fetchData();
  }, []);
  
console.log("characters", characters)

  return (
    <div className="bg-slate-800 w-screen h-screen">

    </div>
  )
}

export default App
