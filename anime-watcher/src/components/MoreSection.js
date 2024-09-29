"use client";
import { useRouter } from "next/router";
import InfiniteSection from "./home/InfiniteSection";

const MoreSection = () => {
  const router = useRouter();
  const { sectionTitle, url } = router.query; // Access query parameters directly

  return (
    <>
      <h1
        className="more-title text-white text-[2.9rem] ml-[25px] mb-[3px] mt-[90px]"
      >
        {sectionTitle}
      </h1>
      <InfiniteSection
        itemlimit={28}
        id={sectionTitle}
        querytype={"?"}
        url={url}
      />
    </>
  );
};

export default MoreSection;
