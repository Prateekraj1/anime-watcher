import { StarFilled } from "@ant-design/icons";
import TextTruncate from "react-text-truncate";
import "./AnimeCard.css";
import { useRouter } from "next/navigation";
const AnimeCard = ({ title, image, id, rating, year }) => {
  const router = useRouter();
  async function fetchVideo(id) {
    router.push("/watch/" + id);
  }
  return (
    <>
      <div
        onClick={() => {
          fetchVideo(id);
        }}
        className={`animecard-wrapper flex flex-col items-center h-fit justify-center text-center cursor-pointer ${rating ? "mt-[16px] " : "mt-[3px] "}`}
      >
        <div
          className="animecard-card rounded bg-center bg-cover transition-all duration-[0.5s] max-[359px]:h-[130px] max-[359px]:w-[95px] min-[360px]:h-[140px] min-[360px]:w-[110px]"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          {rating && (
            <div className="animecard-starcontainer text-[yellow] bg-[rgba(0,0,0,0.6)] absolute rounded text-[1.35rem] flex gap-1 justify-center items-center px-[7px] py-0.5">
              <StarFilled />
              <span style={{ color: "white" }}>{rating / 10}</span>
            </div>
          )}
        </div>

        {title && (
          <a href={`/watch/${id}`} className="animecard-title text-2xl text-[white] mt-[3px]">
            <TextTruncate
              text={title.english || title.romaji}
              line={2}
            ></TextTruncate>
          </a>
        )}
        {year && <p className="animecard-year text-[white] text-[1.15rem] mt-1 min-[800px]:text-[1.35rem]">{year}</p>}
      </div>
    </>
  );
};
export default AnimeCard;
