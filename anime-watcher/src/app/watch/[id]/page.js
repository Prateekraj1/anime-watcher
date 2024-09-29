import AnimePlayerPage from "@/components/carousel/AnimePlayerPage";

const WatchPage = ({ params, searchParams }) => {
  return (
    <>
      <AnimePlayerPage id={params?.id} />
    </>
  );
};
export default WatchPage;
