import {
  CalendarOutlined,
  ClockCircleOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { faListOl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextTruncate from "react-text-truncate";
import { useRouter } from "next/navigation";
const HeroCard = ({
  duration,
  cover,
  title,
  id,
  year,
  description,
  epcount,
}) => {
  const router = useRouter();
  async function fetchVideo(id) {
    router.push("/watch/" + id);
  }

  return (
    <>
      <div
        className="herocard-wrapper flex flex-col justify-between bg-center bg-cover h-[470px] items-start text-left w-[98.7%] mt-5 px-10 py-5 rounded-lg max-[768px]:h-80"
        style={{
          backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3) ),url(${cover})`,
        }}
      >
        <div className="herocard-animeinfo-wrapper flex flex-col gap-[15px]">
          <h1 className="herocard-animeinfo-title text-[white] text-[2.7rem] max-[768px]:text-[2.5rem]">{title}</h1>

          <div className="herocard-animeinfo text-[white] flex gap-5">
            <p className="herocard-animeinfo-item max-[768px]:text-[1.4rem]">
              {" "}
              <PlayCircleOutlined /> TV
            </p>
            <p className="herocard-animeinfo-item max-[768px]:text-[1.4rem]">
              <FontAwesomeIcon icon={faListOl} /> {epcount} Episodes
            </p>
            <p className="herocard-animeinfo-item max-[768px]:text-[1.4rem]">
              <ClockCircleOutlined /> {duration} Minutes
            </p>
            <p className="herocard-animeinfo-item max-[768px]:text-[1.4rem]">
              <CalendarOutlined /> {year}
            </p>
          </div>
          <span className="herocard-animeinfo-description  text-justify text-[white] leading-normal w-6/12  max-[768px]:text-2xl max-[768px]:w-full max-[768px]:text-[1.4rem]">
            {" "}
            <TextTruncate
              text={description
                .substring(
                  0,
                  description.indexOf("(") === -1
                    ? description.length
                    : description.indexOf("(")
                )
                .replaceAll(/<\/?[\w\s]*>|<.+[\W]>/g, "")}
              line={4}
            ></TextTruncate>
          </span>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            fetchVideo(id);
          }}
          className="btn herocard-btn-watch bg-[rgba(0,0,0,0.4)] border text-[white] flex justify-center items-center rounded text-2xl font-[bold] px-[15px] py-[9px] border-solid border-[white] hover:opacity-80 hover:transition-[500ms] hover:duration-[ease] max-[768px]:text-[1.2rem]"
        >
          <PlayCircleOutlined />
          &nbsp;&nbsp;WATCH
        </button>
      </div>
    </>
  );
};

export default HeroCard;
