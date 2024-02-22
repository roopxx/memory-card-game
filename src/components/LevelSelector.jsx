import { PropTypes } from "prop-types";

export function LevelSelector({ onChoice }) {
  const levelButtons = document.querySelectorAll(".level");
  const levelEasyClass = "bg-blue-400";
  const levelMediumClass = "bg-green-400";
  const levelHardClass = "bg-red-400";

  return (
    <div className="text-4xl text-center font-['Creepster'] mt-8">
      <button
        value={8}
        className="level w-48 border-black border-2 mr-10 px-2 hover:scale3d-125 hover:duration-300"
        onClick={(e) => {
          levelButtons.forEach((button) => {
            button.classList.remove(
              `${levelEasyClass}`,
              `${levelMediumClass}`,
              `${levelHardClass}`
            );
          });
          e.currentTarget.classList.add(`${levelEasyClass}`);
          onChoice(Number(e.target.value));
        }}
      >
        Easy
      </button>
      <button
        value={12}
        className="level w-48 border-black border-2 mr-10 px-2 hover:scale3d-125 hover:duration-300"
        onClick={(e) => {
          levelButtons.forEach((button) => {
            button.classList.remove(
              `${levelEasyClass}`,
              `${levelMediumClass}`,
              `${levelHardClass}`
            );
          });
          e.currentTarget.classList.add(`${levelMediumClass}`);
          onChoice(Number(e.target.value));
        }}
      >
        Medium
      </button>
      <button
        value={16}
        className="level w-48 border-black border-2 mr-10 px-2 hover:scale3d-125 hover:duration-300"
        onClick={(e) => {
          levelButtons.forEach((button) => {
            button.classList.remove(
              `${levelEasyClass}`,
              `${levelMediumClass}`,
              `${levelHardClass}`
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
