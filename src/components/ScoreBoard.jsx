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
    <div className="flex justify-around text-4xl font-['Protest_Riot'] mt-6 mb-8">
      <h1>Best Score: {localStorage.getItem("bestScore")}</h1>
      <h1>Current Score: {successClicks}</h1>
    </div>
  );
}

ScoreBoard.propTypes = {
  successClicks: PropTypes.number,
};
