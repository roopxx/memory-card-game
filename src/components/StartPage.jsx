import { PropTypes } from "prop-types";
import { LevelSelector } from "./LevelSelector";

export function StartPage({ onClick, setDifficulty }) {
  return (
    <section className="h-screen bg-[url('/src/assets/background.webp')] bg-cover bg-bottom bg-no-repeat">
      <div className="flex w-full flex-col items-center">
        <h1 className="mt-10 px-6 font-['Creepster'] text-5xl text-slate-700 md:text-6xl lg:text-7xl xl:text-8xl">
          THE RICK AND MORTY PRESENTS!
        </h1>
        <h2 className="mt-8 font-['Creepster'] text-7xl text-slate-700 md:text-9xl">
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
            className="mt-6 font-['Creepster'] text-5xl text-slate-700 duration-300 hover:text-black hover:scale-110 md:text-7xl lg:text-8xl xl:text-8xl"
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
