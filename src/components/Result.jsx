import { PropTypes } from "prop-types";

export function Result({ openDialog, gameOutcome, playAgain, returnHome }) {
  const backgroundImage = gameOutcome
    ? "bg-[url('/src/assets/result-win-bg.webp')]"
    : "bg-[url('/src/assets/result-lost-bg.webp')]";

  return (
    <dialog
      open={openDialog}
      className="h-auto bg-transparent font-['Protest_Riot']"
    >
      <div
        className={`flex h-[200px] w-[300px] animate-result flex-col justify-end border-4 border-yellow-600 md:h-[376px] md:w-[700px] lg:h-[576px] lg:w-[1000px] ${backgroundImage} bg-cover bg-[center_-1.5rem] lg:bg-[center_-4.5rem]`}
      >
        <div className="relative bottom-6 md:bottom-2 lg:bottom-20">
          <h1
            className={`text-center text-white md:text-6xl lg:text-7xl ${
              gameOutcome
                ? `drop-shadow-[0_6.2px_5.2px_green]`
                : `drop-shadow-[0_6.2px_5.2px_red]`
            }`}
          >
            {gameOutcome ? "Congratulation! You Won." : "You Lost!"}
          </h1>
        </div>
        <div className="relative bottom-3 flex justify-between md:bottom-6 lg:bottom-8">
          <button
            className="mx-4 w-[80px] rounded-xl border-2 border-black bg-green-700 p-0.5 text-xs text-white md:mx-6 md:w-[150px] md:border-4 md:p-2 md:text-2xl lg:mx-8 lg:w-[250px] lg:border-8 lg:px-4 lg:py-2 lg:text-4xl"
            onClick={playAgain}
          >
            Play Again?
          </button>
          <button
            className="float-right mx-4 w-[80px] rounded-xl border-2 border-black bg-red-700 p-0.5 text-xs text-white md:mx-6 md:w-[150px] md:border-4 md:p-2 md:text-2xl lg:mx-8 lg:w-[250px] lg:border-8 lg:px-4 lg:py-2 lg:text-4xl"
            onClick={returnHome}
          >
            Go Home?
          </button>
        </div>
      </div>
    </dialog>
  );
}

Result.propTypes = {
  openDialog: PropTypes.bool,
  gameOutcome: PropTypes.bool,
  playAgain: PropTypes.func,
  returnHome: PropTypes.func,
};
