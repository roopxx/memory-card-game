import { PropTypes } from "prop-types";

export function Card({ imageSrc, imageText, onClick }) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <button
          className="perspective-1000 size-[300px] bg-transparent"
          onClick={onClick}
        >
          <div className="flip relative size-full text-center transition-transform duration-700 transform-style-3d">
            <div className="absolute backface-hidden">
              <img
                className="border-4 border-black"
                src={imageSrc}
                alt={imageText}
              />
            </div>
            <div className="size-full border-4 border-black bg-yellow-500 absolute backface-hidden rotate-y-180"></div>
          </div>
        </button>
        <p className="text-2xl size-[300px] border-4 border-green-900 bg-white h-16 flex justify-center items-center font-bold">
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
