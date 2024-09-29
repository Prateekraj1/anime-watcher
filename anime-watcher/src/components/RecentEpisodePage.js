import InfiniteSection from "./home/InfiniteSection";

const RecentEpisodePage = () => {
  const baseURL = process.env.NEXT_PUBLIC_CONSUMET_API_URL;

  return (
    <InfiniteSection
      url={`${baseURL}/meta/anilist/recent-episodes`}
      itemlimit={21}
      sectiontitle={"Recent Episodes"}
      id="recent-section"
      querytype={"?"}
    />
  );
};
export default RecentEpisodePage;
