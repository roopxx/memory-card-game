import { PropTypes } from "prop-types";

export function Card({ imageSrc, imageText, onClick }) {
  return (
    <>
      <div className="mx-auto flex flex-col gap-1">
        <button
          className="size-[100px] bg-transparent perspective-1000 min-[500px]:size-[150px] md:size-[250px] lg:size-[300px] xl:size-[250px]"
          onClick={onClick}
        >
          <div className="flip relative size-full text-center transition-transform duration-700 ease-linear transform-style-3d">
            <div className="absolute backface-hidden">
              <img
                className="border-2 border-black xl:border-4"
                src={imageSrc}
                alt={imageText}
              />
            </div>
            <div className="absolute size-full border-2 border-black bg-yellow-500 rotate-y-180 backface-hidden md:border-4"></div>
          </div>
        </button>
        <p className="mb-3 flex size-[100px] h-[40px] items-center justify-center border-2 border-green-900 bg-white text-center text-xs font-bold min-[500px]:h-[40px] min-[500px]:w-[150px] sm:text-base md:w-[250px] md:border-4 md:text-xl lg:w-[300px] lg:text-2xl xl:size-[250px] xl:h-16">
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
