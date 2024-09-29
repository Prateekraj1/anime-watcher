import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Carousal from "@itseasy21/react-elastic-carousel";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./Navbar";
import HeroCard from "../cards/HeroCard";
const Hero = ({ setHeroSectionLoaded }) => {
  const carouselRef = useRef(null);
  let resetTimeout;
  const [fetchedAnime, setFetchedAnime] = useState([]);
  const baseURL = process.env.NEXT_PUBLIC_ANILIST_API_URL;

  useEffect(() => {
    axios.get(`${baseURL}/popular`).then(({ data: { results } }) => {
      setFetchedAnime(results);
      setHeroSectionLoaded(true);
    }, []);
  }, []);

  return (
    <>
      {fetchedAnime.length > 0 && (
        <header className="header">
          <section style={{ marginTop: 30 }} className="section-header">
            return (
            <Carousal
              enableAutoPlay={true}
              ref={carouselRef}
              showArrows={false}
              autoPlaySpeed={2000}
              onNextEnd={() => {
                clearTimeout(resetTimeout);
                resetTimeout = setTimeout(() => {
                  carouselRef?.current?.goTo(0);
                }, 4000);
              }}
              pagination={true}
            >
              {fetchedAnime.map((item) =>
                item.totalEpisodes &&
                item.id &&
                item.releaseDate &&
                item.duration &&
                item.title &&
                item.description &&
                item.cover ? (
                  <HeroCard
                    key={uuidv4()}
                    id={item.id}
                    epcount={item.totalEpisodes}
                    year={item.releaseDate}
                    duration={item.duration}
                    title={item.title.english || "Error"}
                    description={item.description}
                    cover={item.cover}
                  ></HeroCard>
                ) : null
              )}
            </Carousal>
            );
          </section>
        </header>
      )}
    </>
  );
};
export default Hero;
