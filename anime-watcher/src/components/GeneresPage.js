"use client";
import "./Generes.css";
import { v4 as uuidv4 } from "uuid";
import {
  seasonsInfo,
  statusesInfo,
  formatsInfo,
  genresinfo,
} from "@/constants/genereValue";
import { useRouter } from "next/navigation";
const GenresPage = () => {
  const router = useRouter();
  return (
    <>
      <h1 className="genres-title">Genres</h1>
      <div className="genresdiv">
        {genresinfo.map((genreinfo) => {
          return (
            <div
              key={uuidv4()}
              onClick={(e) => {
                router.push(
                  "/filtered/genre/" + e.target.innerText.toLowerCase(),
                  {
                    state: { type: "genre", value: e.target.innerText },
                  }
                );
              }}
              className="genre"
              style={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url(${genreinfo.image})`,
              }}
            >
              {genreinfo.title}
            </div>
          );
        })}
      </div>
      <h1 className="formats-title">Formats</h1>
      <div className="formatsdiv">
        {formatsInfo.map((formatInfo) => {
          return (
            <div
              onClick={(e) => {
                router.push(
                  "/filtered/format/" +
                    e.target.innerText.replaceAll(" ", "_").toLowerCase(),
                  {
                    state: {
                      type: "format",
                      value: e.target.innerText.replaceAll(" ", "_"),
                    },
                  }
                );
              }}
              key={uuidv4()}
              className="format"
              style={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ),url(${formatInfo.image})`,
              }}
            >
              {formatInfo.title}
            </div>
          );
        })}
      </div>
      <h1 className="seasons-title">Seasons</h1>
      <div className="seasonsdiv">
        {seasonsInfo.map((seasonInfo) => {
          return (
            <div
              key={uuidv4()}
              onClick={(e) => {
                router.push(
                  "/filtered/season/" + e.target.innerText.toLowerCase(),
                  {
                    state: { type: "season", value: e.target.innerText },
                  }
                );
              }}
              style={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${seasonInfo.image})`,
              }}
              className="season"
            >
              {seasonInfo.title}
            </div>
          );
        })}
      </div>
      <h1 className="statuses-title">Status</h1>
      <div className="statusesdiv">
        {statusesInfo.map((statusInfo) => {
          return (
            <div
              key={uuidv4()}
              onClick={(e) => {
                router.push(
                  "/filtered/status/" +
                    e.target.innerText.replaceAll(" ", "_").toLowerCase(),
                  {
                    state: {
                      type: "status",
                      value: e.target.innerText.replaceAll(" ", "_"),
                    },
                  }
                );
              }}
              style={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${statusInfo.image})`,
              }}
              className="status"
            >
              {statusInfo.title}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default GenresPage;
