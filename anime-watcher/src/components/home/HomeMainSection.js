"use client";

import { useState } from "react";
import AnimeSection from "./AnimeSection";
import Hero from "./Hero";
import UpcomingSection from "./UpcomingSection";
import InfiniteSection from "./InfiniteSection";
import ScrollToTop from "react-scroll-to-top";

const HomeMainSection = () => {
  const baseURL = process.env.NEXT_PUBLIC_ANILIST_API_URL;
  const [heroSectionLoaded, setHeroSectionLoaded] = useState(true);

  return (
    <>
      <Hero setHeroSectionLoaded={setHeroSectionLoaded}></Hero>
      {heroSectionLoaded && (
        <>
          <UpcomingSection></UpcomingSection> *
          <AnimeSection
            url={`${baseURL}/recent-episodes`}
            id={"recent"}
            sectiontitle={"Recent"}
          ></AnimeSection>
          <AnimeSection
            url={`${baseURL}/advanced-search?format=SPECIAL`}
            id={"special"}
            sectiontitle={"Special"}
          ></AnimeSection>
          <InfiniteSection
            url={`${baseURL}/popular`}
            itemlimit={18}
            sectiontitle={"Most Popular"}
            id="popular"
            querytype={"?"}
          ></InfiniteSection>
        </>
      )}

      <ScrollToTop
        style={{
          border: "1px solid dodgerblue",
          background: "rgb(33, 33, 33)",
          opacity: 0.5,
          color: "white",
          boxShadow: "none",
        }}
        className="scrolltop"
        top={1500}
        smooth
        color="#fff"
      />
    </>
  );
};
export default HomeMainSection;
