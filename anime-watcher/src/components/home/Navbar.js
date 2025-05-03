"use client";
import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import { useRouter, usePathname } from "next/navigation";
import { useUser } from "@/contexts/UserContext";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn, setUser } = useUser();
  const [active, setActive] = useState(false);
  const [icon, setIcon] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const wrapperRef = useRef(null);
  const baseURL = process.env.NEXT_PUBLIC_CONSUMET_API_URL;

  const logOut = () => {
    setIsLoggedIn(false);
    setUser(null);
    router.push("/home");
  };

  const navToggle = () => {
    setActive(!active);
    setIcon(!icon);
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

  useOutsideAlerter(wrapperRef);

  const searchAnime = async (input) => {
    if (!input.trim()) {
      toast.error("Input cannot be empty!");
      return;
    }

    router.push(`/search?query=${encodeURIComponent(input)}`);
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
          <Image src={logo} alt="logo" className="h-[34px] w-auto" />
          <h3 className="hidden sm:block">Animehub</h3>
        </div>

        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchAnime(value);
            }
          }}
          placeholder="Search for anime"
          className="hidden lg:inline-block outline-none bg-[#374151] text-[#9aa2ae] placeholder-white py-2 px-4 rounded-lg w-[60vw] lg:w-[300px] focus:ring-2 focus:ring-violet-600 hover:ring-1 hover:ring-violet-600"
          type="text"
        />

        <ul
          className={`${
            active ? "translate-x-0" : "translate-x-full"
          } fixed top-[60px] right-0 w-full h-auto z-1 bg-[#10141e] border border-gray-800 rounded-lg flex flex-col items-center gap-2 text-center text-white transition-transform ease-in duration-150 lg:flex-row lg:static lg:translate-x-0 lg:gap-10 lg:border-0 lg:bg-transparent`}
        >
          <li className="px-5 py-2 hover:bg-gray-700 rounded-md">
            <button
              onClick={(e) => {
                e.preventDefault();
                if (pathname !== "/") {
                  router.push("/");
                } else {
                  document.querySelector("#popular")?.scrollIntoView();
                }
              }}
              className="cursor-pointer"
            >
              Popular
            </button>
          </li>

          <li className="px-5 py-2 hover:bg-gray-700 rounded-md">
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push("/movies");
              }}
              className="cursor-pointer"
            >
              Top Movies
            </button>
          </li>

          <li className="px-5 py-2 hover:bg-gray-700 rounded-md">
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push("/filter");
              }}
              className="cursor-pointer"
            >
              Filter
            </button>
          </li>

          {/* Uncomment when Watchlist is ready */}
          {/* <li className="px-5 py-2 hover:bg-gray-700 rounded-md">
            <button onClick={() => router.push("/watchlist")}>Watchlist</button>
          </li> */}

          <div className="flex gap-2">
            {isLoggedIn ? (
              <li className="px-5 py-2 hover:bg-gray-700 rounded-md">
                <button onClick={logOut}>Logout</button>
              </li>
            ) : (
              <>
                <li className="px-5 py-2 hover:bg-gray-700 rounded-md">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/login");
                    }}
                  >
                    Login
                  </button>
                </li>
                <li className="bg-purple-600 text-white px-5 py-2 rounded-md cursor-pointer">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/signup");
                    }}
                  >
                    Signup
                  </button>
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
