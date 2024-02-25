import { useState } from "react";

export function Info() {
  const [showInfo, setShowInfo] = useState(false);

  function handleClick(e) {
    e.stopPropagation();
    setShowInfo(!showInfo);
  }

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end gap-5">
      {showInfo && (
        <div className="flex max-w-[15vw] animate-swoopIn flex-col items-end bg-black p-5 font-semibold text-white shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
          <p className="mb-5 text-xl">
            Win the game by clicking each{" "}
            <span className="text-red-600">Rick</span> &{" "}
            <span className="text-green-500">Morty</span> character card only
            once.
          </p>
          <p className="text-lg">
            Play and move to next level to test your memory.
          </p>
        </div>
      )}
      <button
        className="size-[60px] rounded-full bg-black text-3xl font-bold text-white"
        onClick={handleClick}
      >
        ?
      </button>
    </div>
  );
}
