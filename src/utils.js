export function getCards(difficultyLevel) {
  // To fetch random page
  const randomPage = Math.floor((Math.random() * 826) / 40);

  return fetch(`https://rickandmortyapi.com/api/character/?page=${randomPage}`)
    .then((res) => res.json())
    .then((characters) => characters.results)
    .then((cards) => cards.slice(0, difficultyLevel));
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
