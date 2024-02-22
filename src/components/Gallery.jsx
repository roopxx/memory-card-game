import { Card } from "./Card";
import { getCards, shuffle } from "../utils";
import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { useState } from "react";

export function Gallery({ difficulty }) {
  const [cardsArr, setCardsArr] = useState([]);

  useEffect(() => {
    getCards(difficulty).then((cards) => {
      setCardsArr(cards);
    });
  }, [difficulty]);

  return (
    <section className="grid grid-cols-4 gap-8 mb-16">
      {cardsArr.map((card) => (
        <Card
          key={card.id}
          imageSrc={card.image}
          imageText={card.name}
          onClick={(e) => {
            e.preventDefault();
            const shuffledCardsArr = shuffle([...cardsArr]);
            setCardsArr(shuffledCardsArr);
          }}
        />
      ))}
    </section>
  );
}

Gallery.propTypes = {
  difficulty: PropTypes.number,
};
