"use client";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import logo from "../../../public/assets/logo.png";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn, setUser } = useUser();
  const [active, setActive] = useState(false);
  const [icon, setIcon] = useState(false);

  const logOut = () => {
    setIsLoggedIn(false);
    setUser(null);
    router.push("/home");
  };
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setActive(false);
          setIcon(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const router = useRouter();
  const location = router.pathname;

  const searchAnime = async (input) => {
    return fetch(`${baseURL}/meta/anilist/${input}`)
      .then((response) => response.json())
      .then((data) => {
        router.push("/search", {
          state: {
            finalResults: data.results,
            input: input,
          },
        });
      });
  };

  const [value, setValue] = useState("");

  const navToggle = () => {
    setActive(!active);
    setIcon(!icon);
  };

  return (
    <nav
      className="w-full fixed flex bg-[#0f0617] top-0 left-0 right-0 items-center justify-between pr-6 h-[65px] z-[2000] pl-10"
      ref={wrapperRef}
    >
      <Toaster position="top-right" toastOptions={{ duration: 1000 }} />
      <div className="flex items-center justify-center gap-5">
        <div
          className="flex items-center cursor-pointer gap-2.5 text-white uppercase"
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
            window.location.reload();
          }}
        >
          <img className="h-[34px]" src={logo} alt="logo" />
          <h3 className="hidden sm:block">Animehub</h3>
        </div>

        <input
          onInput={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (e.target.value === "") toast.error("Input cannot be empty!");
              else searchAnime(e.target.value);
            }
          }}
          placeholder="Search for anime"
          className="hidden lg:inline-block outline-none bg-[#374151] text-[#9aa2ae] placeholder-white py-2 px-4 rounded-lg w-[60vw] lg:w-[300px] focus:ring-2 focus:ring-violet-600 hover:ring-1 hover:ring-violet-600"
          type="text"
          value={value}
        />

        <ul
          className={`${
            active ? "translate-x-0" : "translate-x-full"
          } fixed top-[60px] right-0 w-full h-auto z-1 bg-[#10141e] border border-gray-800 rounded-lg flex flex-col items-center gap-2 text-center text-white transition-transform ease-in duration-150 lg:flex-row lg:static lg:translate-x-0 lg:gap-10 lg:border-0 lg:bg-transparent`}
        >
          <li className="px-5 py-2 hover:bg-gray-700 rounded-md cursor-pointer">
            <span
              onClick={(e) => {
                e.preventDefault();
                if (location !== "/") {
                  router.push("/");
                } else document.querySelector("#popular").scrollIntoView();
              }}
              className="cursor-pointer"
            >
              Popular
            </span>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              router.push("/movies");
            }}
            className="px-5 py-2 hover:bg-gray-700 rounded-md cursor-pointer"
          >
            <span>Top Movies</span>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              router.push("/filter");
            }}
            className="px-5 py-2 hover:bg-gray-700 rounded-md cursor-pointer"
          >
            <span>Filter</span>
          </li>
          {/* <li
            onClick={(e) => {
              e.preventDefault();
              router.push("/watchlist");
            }}
            className="px-5 py-2 hover:bg-gray-700 rounded-md cursor-pointer"
          >
            <span>Watchlist</span>
          </li> */}
          <div className="flex gap-2">
            {isLoggedIn ? (
              <li
                className="px-5 py-2 hover:bg-gray-700 rounded-md"
                onClick={logOut}
              >
                <span>Logout</span>
              </li>
            ) : (
              <>
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/login");
                  }}
                  className="px-5 py-2 hover:bg-gray-700 rounded-md cursor-pointer"
                >
                  <span>Login</span>
                </li>
                <li
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/signup");
                  }}
                  className="bg-purple-600 text-white px-5 py-2 rounded-md cursor-pointer"
                >
                  <span>Signup</span>
                </li>
              </>
            )}
          </div>
        </ul>
      </div>

      <div
        onClick={navToggle}
        className={`lg:hidden cursor-pointer flex flex-col gap-[0.4rem] transition-all duration-200 ${
          icon ? "open" : ""
        }`}
      >
        <div className="w-[2rem] h-[0.3rem] bg-gray-200 transition-transform duration-200"></div>
        <div
          className={`w-[2rem] h-[0.3rem] bg-gray-200 ${
            icon ? "opacity-0" : ""
          }`}
        ></div>
        <div className="w-[2rem] h-[0.3rem] bg-gray-200 transition-transform duration-200"></div>
      </div>
    </nav>
  );
};

export default Navbar;
