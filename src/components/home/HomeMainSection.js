"use client";

import { useState } from "react";
import AnimeSection from "./AnimeSection";
import Hero from "./Hero";
import UpcomingSection from "./UpcomingSection";
import InfiniteSection from "./InfiniteSection";
import ScrollToTop from "react-scroll-to-top";
import CardShimmer from "../shimmer/CardShimmer";
import UpcommingCardShimmer from "../shimmer/home/UpcommingCardShimmer";
import BannerShimmer from "../shimmer/home/BannerShimmer";

const HomeMainSection = () => {
  const baseURL = process.env.NEXT_PUBLIC_ANILIST_API_URL;
  const [heroSectionLoaded, setHeroSectionLoaded] = useState(false);

  return (
    <>
      <Hero setHeroSectionLoaded={setHeroSectionLoaded}></Hero>

      {!heroSectionLoaded && (
        <div className="p-[10px]">
          <BannerShimmer />
          <div className="flex mt-[100px] gap-[30px]">
            {Array.from({ length: 3 }).map((_, index) => (
              <UpcommingCardShimmer key={index} />
            ))}
          </div>
          <div className="flex mt-[100px] gap-[30px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CardShimmer key={index} />
            ))}
          </div>
          <div className="flex mt-[100px] gap-[30px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CardShimmer key={index} />
            ))}
          </div>
        </div>
      )}
      {heroSectionLoaded && (
        <>
          <UpcomingSection></UpcomingSection> *
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
