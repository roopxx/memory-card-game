import { PropTypes } from "prop-types";

export function Result({ openDialog, gameOutcome }) {
  const backgroundImage = gameOutcome
    ? "bg-[url('/src/assets/result-win-bg.webp')]"
    : "bg-[url('/src/assets/result-lost-bg.webp')]";

  return (
    <dialog
      open={openDialog}
      className="h-full bg-transparent font-['Protest_Riot']"
    >
      <div
        className={`flex flex-col justify-end h-[576px] w-[1000px] border-4 border-yellow-600 ${backgroundImage} bg-cover bg-[center_-4.5rem] ${
          gameOutcome ? `text-green-900` : `text-red-900`
        }`}
      >
        <div className="relative bottom-20">
          {gameOutcome ? (
            <h1 className="text-7xl text-center text-white">
              Congratulation! You Won.
            </h1>
          ) : (
            <h1 className="text-8xl text-center text-white">You Lost!</h1>
          )}
        </div>
        <div className="relative bottom-8 flex justify-between">
          <button className="text-4xl border-8 mx-8 w-[250px] border-black px-4 py-2 rounded-xl bg-green-700 text-white">
            Play Again?
          </button>
          <button className="text-4xl border-8 mx-8 w-[250px] border-black px-4 py-2 rounded-xl bg-red-700 text-white float-right">
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
};