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
        className={`flex h-[576px] w-[1000px] animate-result flex-col justify-end border-4 border-yellow-600 ${backgroundImage} bg-cover bg-[center_-4.5rem]`}
      >
        <div className="relative bottom-20">
          <h1
            className={`text-center text-7xl text-white ${
              gameOutcome
                ? `drop-shadow-[0_6.2px_5.2px_green]`
                : `drop-shadow-[0_6.2px_5.2px_red]`
            }`}
          >
            {gameOutcome ? "Congratulation! You Won." : "You Lost!"}
          </h1>
        </div>
        <div className="relative bottom-8 flex justify-between">
          <button
            className="mx-8 w-[250px] rounded-xl border-8 border-black bg-green-700 px-4 py-2 text-4xl text-white"
            onClick={playAgain}
          >
            Play Again?
          </button>
          <button
            className="float-right mx-8 w-[250px] rounded-xl border-8 border-black bg-red-700 px-4 py-2 text-4xl text-white"
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
