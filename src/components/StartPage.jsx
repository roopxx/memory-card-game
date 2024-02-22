import { PropTypes } from "prop-types";
import { LevelSelector } from "./LevelSelector";

export function StartPage({ onClick, setDifficulty }) {
  return (
    <section className="bg-[url('/src/assets/background.jpg')] h-screen bg-cover bg-no-repeat bg-bottom">
      <div className="w-full flex flex-col items-center">
        <h1 className="font-['Creepster'] text-slate-700 text-9xl mt-10">
          THE RICK AND MORTY PRESENTS!
        </h1>
        <h2 className="font-['Creepster'] text-slate-700 text-9xl mt-8">
          <span className="text-red-800 drop-shadow-[0_6.2px_5.2px_black]">
            MEMO
          </span>
          <span className="text-green-800 drop-shadow-[0_6.2px_5.2px_black]">
            RICK
          </span>
        </h2>
        <div className="text-center font-['Protest_Riot']">
          <LevelSelector onChoice={setDifficulty} />
          <button
            className="font-['Creepster'] text-slate-700 text-8xl mt-6 hover:text-black hover:scale-110 duration-300"
            onClick={onClick}
          >
            Start Game!
          </button>
        </div>
      </div>
    </section>
  );
}

StartPage.propTypes = {
  onClick: PropTypes.func,
  setDifficulty: PropTypes.func,
};
