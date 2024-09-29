import TextTruncate from "react-text-truncate";

const UpcomingCard = ({
  title,
  image,
  trailerVideoId,
  setIsPlaying,
  setTrailerId,
}) => {
  return (
    <>
      <div
        onClick={(e) => {
          e.preventDefault();
          setTrailerId(trailerVideoId);
          setIsPlaying(true);
        }}
        className="flex flex-col items-center justify-center mt-[3px] text-center cursor-pointer"
      >
        <div
          className={`rounded-[4px] transition-all duration-500 bg-cover bg-center ${getCardDimensions()}`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>

        <a
          onClick={(e) => {
            e.preventDefault();
          }}
          href="/"
          className="text-white text-[1.2rem] mt-[5px] sm:text-[1.5rem]"
        >
          <TextTruncate text={title} line={2}></TextTruncate>
        </a>
      </div>
    </>
  );
};

const getCardDimensions = () => {
  return `
    h-[90px] w-[150px] sm:h-[100px] sm:w-[167px] md:h-[150px] md:w-[225px]
    lg:h-[180px] lg:w-[270px] xl:h-[200px] xl:w-[310px] 2xl:h-[230px] 2xl:w-[360px]
  `;
};

export default UpcomingCard;
