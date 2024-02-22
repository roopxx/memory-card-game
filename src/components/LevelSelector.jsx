import { PropTypes } from "prop-types";

export function LevelSelector({ onChoice }) {
  function handleClick(e) {
    onChoice(e.target.value);
  }

  return (
    <div className="flex gap-6 justify-around text-4xl font-['Protest_Riot'] mt-6 mb-8">
      <button
        value={8}
        className="w-30 bg-green-400 border-black border-2 px-2"
        onClick={handleClick}
      >
        Easy
      </button>
      <button
        value={12}
        className="w-30 bg-green-400 border-black border-2 px-2"
        onClick={handleClick}
      >
        Medium
      </button>
      <button
        value={16}
        className="w-30 bg-green-400 border-black border-2 px-2"
        onClick={handleClick}
      >
        Hard
      </button>
    </div>
  );
}

LevelSelector.propTypes = {
  onChoice: PropTypes.func,
};
