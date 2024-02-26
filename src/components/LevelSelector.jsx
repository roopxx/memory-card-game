import { PropTypes } from "prop-types";

export function LevelSelector({ onChoice }) {
  const levelButtons = document.querySelectorAll(".level");
  const levelEasyClass = "bg-blue-400";
  const levelMediumClass = "bg-green-400";
  const levelHardClass = "bg-red-400";

  return (
    <div className="mt-8 space-y-4 font-['Creepster'] text-4xl sm:space-x-8">
      <button
        value={5}
        className="level w-48 border-2 border-black px-2 hover:duration-300 hover:scale3d-125"
        onClick={(e) => {
          levelButtons.forEach((button) => {
            button.classList.remove(
              `${levelEasyClass}`,
              `${levelMediumClass}`,
              `${levelHardClass}`,
            );
          });
          e.currentTarget.classList.add(`${levelEasyClass}`);
          onChoice(Number(e.target.value));
        }}
      >
        Easy
      </button>
      <button
        value={10}
        className="level w-48 border-2 border-black px-2 hover:duration-300 hover:scale3d-125"
        onClick={(e) => {
          levelButtons.forEach((button) => {
            button.classList.remove(
              `${levelEasyClass}`,
              `${levelMediumClass}`,
              `${levelHardClass}`,
            );
          });
          e.currentTarget.classList.add(`${levelMediumClass}`);
          onChoice(Number(e.target.value));
        }}
      >
        Medium
      </button>
      <button
        value={15}
        className="level w-48 border-2 border-black px-2 hover:duration-300 hover:scale3d-125"
        onClick={(e) => {
          levelButtons.forEach((button) => {
            button.classList.remove(
              `${levelEasyClass}`,
              `${levelMediumClass}`,
              `${levelHardClass}`,
            );
          });
          e.currentTarget.classList.add(`${levelHardClass}`);
          onChoice(Number(e.target.value));
        }}
      >
        Hard
      </button>
    </div>
  );
}

LevelSelector.propTypes = {
  onChoice: PropTypes.func,
};
