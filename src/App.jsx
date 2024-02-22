import { useState } from "react";
import { Header } from "./components/Header";
import { StartPage } from "./components/StartPage";
import { Gallery } from "./components/Gallery";

function App() {
  const [start, setStart] = useState(true);
  const [difficulty, setDifficulty] = useState(8);

  function startGame() {
    setStart(!start);
  }
  return (
    <>
      {start ? (
        <>
          <StartPage setDifficulty={setDifficulty} onClick={startGame} />
        </>
      ) : (
        <div className="container mx-auto">
          <Header />
          <Gallery difficulty={difficulty} />
        </div>
      )}
    </>
  );
}

export default App;
