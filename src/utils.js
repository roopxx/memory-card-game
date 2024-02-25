export function getCards(difficultyLevel) {
  // To fetch random page
  const randomPage = Math.floor((Math.random() * 826) / 40);

  return fetch(`https://rickandmortyapi.com/api/character/?page=${randomPage}`)
    .then((res) => res.json())
    .then((characters) => characters.results)
    .then((cards) => {
      // Filtering out improper card from fetch request due to either bad image or wrong card name
      const filteredCards = cards.filter(
        (card) =>
          ![
            6, 19, 20, 56, 61, 66, 95, 104, 130, 157, 189, 214, 222, 249, 269,
            294, 297, 310, 315, 348, 349, 370, 399,
          ].includes(card.id),
      );
      return shuffle([...filteredCards]).slice(0, difficultyLevel);
    });
}

// Function to shuffle card array
export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    if (currentIndex !== randomIndex) {
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  return array;
}
