import { PropTypes } from "prop-types";

export function Card({ imageSrc, imageText, onClick }) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <button
          className="size-[300px] bg-transparent perspective-1000"
          onClick={onClick}
        >
          <div className="flip relative size-full text-center transition-transform duration-700 ease-linear transform-style-3d">
            <div className="absolute backface-hidden">
              <img
                className="border-4 border-black"
                src={imageSrc}
                alt={imageText}
              />
            </div>
            <div className="absolute size-full border-4 border-black bg-yellow-500 rotate-y-180 backface-hidden"></div>
          </div>
        </button>
        <p className="flex size-[300px] h-16 items-center justify-center border-4 border-green-900 bg-white text-2xl font-bold">
          {imageText}
        </p>
      </div>
    </>
  );
}

Card.propTypes = {
  imageSrc: PropTypes.string,
  imageText: PropTypes.string,
  onClick: PropTypes.func,
};
