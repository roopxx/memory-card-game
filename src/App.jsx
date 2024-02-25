import { useState } from "react";
import { Header } from "./components/Header";
import { StartPage } from "./components/StartPage";
import { Gallery } from "./components/Gallery";
import { Info } from "./components/Info";

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
          <Gallery difficulty={difficulty} setStart={setStart} />
        </div>
      )}
      <Info />
    </>
  );
}

export default App;
