import { PropTypes } from "prop-types";
import { useEffect } from "react";

export function ScoreBoard({ successClicks }) {
  useEffect(() => {
    const bestScore = localStorage.getItem("bestScore");
    if (!bestScore) {
      localStorage.setItem("bestScore", 0);
    }
  });

  return (
    <div className="mb-4 mt-2 flex justify-around font-['Protest_Riot'] sm:text-4xl xl:mb-8 xl:mt-6">
      <h1>Best Score: {localStorage.getItem("bestScore")}</h1>
      <h1>Current Score: {successClicks}</h1>
    </div>
  );
}

ScoreBoard.propTypes = {
  successClicks: PropTypes.number,
};
