import { Card } from "./Card";
import { getCards, shuffle } from "../utils";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { ScoreBoard } from "./ScoreBoard";
import { Result } from "./Result";
import { Loading } from "./Loading";

export function Gallery({ difficulty, setStart }) {
  const [cardsArr, setCardsArr] = useState([]);
  const [clickedCards, setClickedCards] = useState(new Set());
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
    getCards(difficulty).then((cards) => {
      setCardsArr(cards);
    });
  }, [difficulty]);

  function checkClickedCards(photoID) {
    if (clickedCards.has(photoID)) {
      setOpenDialog(true);
    } else {
      const newClickedCards = clickedCards.add(photoID);
      setClickedCards(newClickedCards);
    }
    if (difficulty === clickedCards.size) {
      setOpenDialog(true);
    }
  }

  function updateScore(newScore) {
    const currentBestScore = parseInt(localStorage.getItem("bestScore"));
    const newBestScore = Math.max(currentBestScore, newScore);
    localStorage.setItem("bestScore", newBestScore);
  }

  function handlePlayAgain() {
    setOpenDialog(false);
    setClickedCards(new Set());
  }

  function handleReturnHome() {
    setOpenDialog(false);
    setStart(true);
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ScoreBoard successClicks={clickedCards.size} />
          <section className="grid grid-cols-5 gap-10 mb-16">
            {cardsArr.map((card) => (
              <Card
                key={card.id}
                imageSrc={card.image}
                imageText={card.name}
                onClick={(e) => {
                  e.preventDefault();
                  checkClickedCards(card.id);
                  updateScore(clickedCards.size);
                  document.querySelectorAll(".flip").forEach((card) => {
                    setTimeout(() => {
                      card.classList.add("rotate-y-180");
                    }, 500);
                    setTimeout(() => {
                      card.classList.remove("rotate-y-180");
                    }, 1700);
                  });

                  setTimeout(() => {
                    const shuffledCardsArr = shuffle([...cardsArr]);
                    setCardsArr(shuffledCardsArr);
                  }, 1500);
                }}
              />
            ))}

            <Result
              openDialog={openDialog}
              gameOutcome={difficulty === clickedCards.size}
              playAgain={handlePlayAgain}
              returnHome={handleReturnHome}
            />
          </section>
        </>
      )}
    </>
  );
}

Gallery.propTypes = {
  difficulty: PropTypes.number,
  setStart: PropTypes.func,
};
