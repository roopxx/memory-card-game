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
        className={`flex flex-col justify-end h-[576px] w-[1000px] border-4 border-yellow-600 animate-result ${backgroundImage} bg-cover bg-[center_-4.5rem]`}
      >
        <div className="relative bottom-20">
          <h1
            className={`text-7xl text-center text-white ${
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
            className="text-4xl border-8 mx-8 w-[250px] border-black px-4 py-2 rounded-xl bg-green-700 text-white"
            onClick={playAgain}
          >
            Play Again?
          </button>
          <button
            className="text-4xl border-8 mx-8 w-[250px] border-black px-4 py-2 rounded-xl bg-red-700 text-white float-right"
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
