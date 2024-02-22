import { useState } from "react";
import { Header } from "./components/Header";
import { LevelSelector } from "./components/LevelSelector";
import { Gallery } from "./components/Gallery";

function App() {
  const [difficulty, setDifficulty] = useState(8);

  return (
    <div className="container mx-auto">
      <Header />
      <LevelSelector onChoice={setDifficulty} />
      <Gallery difficulty={difficulty} />
    </div>
  );
}

export default App;
