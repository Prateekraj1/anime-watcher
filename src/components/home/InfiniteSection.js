"use client";
import { useEffect, useState } from "react";
import GridRenderer from "../carousel/GridRenderer";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "@/contexts/GlobalContext";
import CardShimmer from "../shimmer/CardShimmer";
const InfiniteSection = ({ url, sectiontitle, itemlimit, id, querytype }) => {
  const SharedState = useGlobalContext();
  const [fetchedData, setFetchedData] = useState([]);
  const [currpage, setCurrpage] = useState(1);
  const [isAnimate, setIsAnimate] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4, 5]);

  const updatePageNumberButtons = (e) => {
    if (e.target.classList.contains("next-page-button")) {
      if (currpage % 5 === 0) {
        let temp = [];
        for (let i = 1; i <= 5; i++) {
          temp.push(currpage + i);
        }
        setPageNumbers(temp);
      }
    }
    if (e.target.classList.contains("previous-page-button")) {
      if (currpage % 5 === 1) {
        let temp = [];
        for (let i = 5; i >= 1; i--) {
          temp.push(currpage - i);
        }
        setPageNumbers(temp);
      }
    }
  };
  useEffect(() => {
    setCurrpage(1);
  }, [url]);
  useEffect(() => {
    setIsAnimate(false);
    SharedState.setVideoIsLoading(true);
    if (currpage > 1) {
      document.querySelector("#" + id).scrollIntoView();
    }
    axios
      .get(url + querytype + "page=" + currpage + "&perPage=" + itemlimit)
      .then(({ data: { hasNextPage, results } }) => {
        if (hasNextPage) {
          setHasNextPage(true);
        } else {
          setHasNextPage(false);
        }
        setFetchedData(results);
        setIsAnimate(true);
      })
      .finally(() => SharedState.setVideoIsLoading(false));
  }, [currpage, url]);
  return (
    <>
      <section
        id={id}
        className="section section-infinite pb-10"
        style={{
          marginTop: querytype === "&" || id === "recent-section" ? 90 : "",
        }}
      > 
        {fetchedData.length<=0 && (
          <div className="p-[10px]">
          <div className="flex mt-[100px] gap-[30px] sm:hidden">
            {Array.from({ length: 5 }).map((_, index) => (
              <CardShimmer key={index} />
            ))}
          </div>
          <div className="hidden mt-[100px] gap-[30px] sm:flex">
            {Array.from({ length: 4 }).map((_, index) => (
              <CardShimmer key={index} />
            ))}
          </div>
          <div className="flex mt-[100px] gap-[30px] sm:hidden">
            {Array.from({ length: 5 }).map((_, index) => (
              <CardShimmer key={index} />
            ))}
          </div>
          <div className="hidden mt-[100px] gap-[30px] sm:flex">
            {Array.from({ length: 4 }).map((_, index) => (
              <CardShimmer key={index} />
            ))}
          </div>
          <div className="flex mt-[100px] gap-[30px] sm:hidden">
            {Array.from({ length: 5 }).map((_, index) => (
              <CardShimmer key={index} />
            ))}
          </div>
          <div className="hidden mt-[100px] gap-[30px] sm:flex">
            {Array.from({ length: 4 }).map((_, index) => (
              <CardShimmer key={index} />
            ))}
          </div>
          <div className="flex mt-[100px] gap-[30px] sm:hidden">
            {Array.from({ length: 5 }).map((_, index) => (
              <CardShimmer key={index} />
            ))}
          </div>
          <div className="hidden mt-[100px] gap-[30px] sm:flex">
            {Array.from({ length: 4 }).map((_, index) => (
              <CardShimmer key={index} />
            ))}
          </div>
          <div className="flex mt-[100px] gap-[30px] sm:hidden">
            {Array.from({ length: 5 }).map((_, index) => (
              <CardShimmer key={index} />
            ))}
          </div>
          <div className="hidden mt-[100px] gap-[30px] sm:flex">
            {Array.from({ length: 4 }).map((_, index) => (
              <CardShimmer key={index} />
            ))}
          </div>
          <div className="flex mt-[100px] gap-[30px] sm:hidden">
            {Array.from({ length: 5 }).map((_, index) => (
              <CardShimmer key={index} />
            ))}
          </div>
          <div className="hidden mt-[100px] gap-[30px] sm:flex">
            {Array.from({ length: 4 }).map((_, index) => (
              <CardShimmer key={index} />
            ))}
          </div>
        </div>
        )}
        {fetchedData.length > 0 && (
          <>
            <h1 className="text-[1.9rem] ml-4 text-white max-[768px]:text-[2.5rem] max-[768px]:ml-6">
              {sectiontitle}
            </h1>
            <GridRenderer isAnimate={isAnimate} finalQuery={fetchedData} />
            <div className="flex justify-center items-center w-screen mt-5">
              <div className="flex items-center justify-between w-[96%] mt-5 h-[60px] border-t border-dodgerblue">
                <button
                  className="text-[15px] w-[150px] bg-transparent text-white border-none outline-none"
                  onClick={(e) => {
                    if (currpage <= 1) {
                      toast.error("You are on the first page!");
                    } else {
                      updatePageNumberButtons(e);
                      setCurrpage((prev) => prev - 1);
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faArrowLeftLong} /> &nbsp;Previous
                </button>
                <div className="pageindex flex">
                  {pageNumbers.map((pageNumber) => (
                    <button
                      className="border-none p-1 rounded-[5px] text-white bg-none text-[14px]"
                      key={uuidv4()}
                      onClick={() => setCurrpage(pageNumber)}
                      style={{
                        backgroundColor:
                          currpage === pageNumber ? "rgb(244, 67, 54)" : "none",
                      }}
                    >
                      {pageNumber}
                    </button>
                  ))}
                </div>
                <button
                  className="text-[15px] w-[150px] bg-transparent text-white border-none outline-none"
                  onClick={(e) => {
                    if (hasNextPage) {
                      updatePageNumberButtons(e);
                      setCurrpage((curr) => curr + 1);
                    } else {
                      toast.error("This is the last page!");
                    }
                  }}
                >
                  Next&nbsp;
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
              </div>
            </div>
          </>
        )}
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              style: {
                background: "green",
              },
            },
            error: {
              style: {
                background: "rgb(216, 67, 21)",
                color: "white",
              },
            },
          }}
        />
      </section>
    </>
  );
};
export default InfiniteSection;
