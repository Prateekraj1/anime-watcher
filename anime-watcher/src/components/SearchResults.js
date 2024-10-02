"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { setConfiguration } from "react-grid-system";
import GridRenderer from "./carousel/GridRenderer";

setConfiguration({ breakpoints: [580, 924, 1434, 1767, 2000, 2400] });

const SearchResults = () => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [finalResults, setFinalResults] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      const queryInput = router.query.input || "";
      const queryFinalResults = router.query.finalResults
        ? JSON.parse(router.query.finalResults)
        : [];

      setInput(queryInput);
      setFinalResults(queryFinalResults);
    }
  }, [router.isReady, router.query]);

  return (
    <>
      <h1
        style={{
          fontSize: "3rem",
          color: "white",
          marginTop: 80,
          marginLeft: 20,
        }}
      >
        Search Results for <span style={{ color: "yellow" }}>{input}</span>
      </h1>
      <GridRenderer finalQuery={finalResults} />
    </>
  );
};

export default SearchResults;
