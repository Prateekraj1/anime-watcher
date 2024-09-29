import InfiniteSection from "./home/InfiniteSection";
const MovieHomePage = () => {
  const baseURL = process.env.NEXT_PUBLIC_CONSUMET_API_URL;
  return (
    <>
      <InfiniteSection
        url={`${baseURL}/meta/anilist/advanced-search?format=MOVIE`}
        itemlimit={18}
        sectiontitle={"Top Anime Movies"}
        id="movies"
        querytype={"&"}
      ></InfiniteSection>
    </>
  );
};
export default MovieHomePage;
