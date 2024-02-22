import { Card } from "./Card";
import { getCards, shuffle } from "../utils";
import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { ScoreBoard } from "./ScoreBoard";
import { Result } from "./Result";

export function Gallery({ difficulty }) {
  const [cardsArr, setCardsArr] = useState([]);
  const [clickedCards, setClickedCards] = useState(new Set());
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    getCards(difficulty).then((cards) => {
      setCardsArr(cards);
    });
  }, [difficulty]);

  function checkClickedCards(photoID) {
    if (clickedCards.has(photoID)) {
      localStorage.setItem("bestScore", 0);
      setClickedCards(new Set());
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

  return (
    <>
      <ScoreBoard successClicks={clickedCards.size} />
      <section className="grid grid-cols-4 gap-8 mb-16">
        {cardsArr.map((card) => (
          <Card
            key={card.id}
            imageSrc={card.image}
            imageText={card.name}
            onClick={(e) => {
              e.preventDefault();
              console.log(card.name);
              updateScore(clickedCards.size + 1);
              checkClickedCards(card.id);
              const shuffledCardsArr = shuffle([...cardsArr]);
              setCardsArr(shuffledCardsArr);
            }}
          />
        ))}

        <Result
          openDialog={openDialog}
          gameOutcome={difficulty === clickedCards.size}
        />
      </section>
    </>
  );
}

Gallery.propTypes = {
  difficulty: PropTypes.number,
};
