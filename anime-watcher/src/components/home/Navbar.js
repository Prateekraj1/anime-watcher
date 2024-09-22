import React, { useContext, useEffect, useRef, useState } from "react";
import { GoogleLogout } from "@leecheuk/react-google-login";
import toast, { Toaster } from "react-hot-toast";
import logo from "../../../public/assets/logo.png";
import "./Navbar.css";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/contexts/GlobalContext";
const Navbar = () => {
  const SharedState = useGlobalContext();
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  const baseURL = process.env.NEXT_PUBLIC_CONSUMET_API_URL;
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          if (active === "nav__menu") {
            setIcon("nav__toggler");
            setActive("nav__menu");
          }
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
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        router("/search", {
          state: {
            finalResults: data.results,
            input: input,
          },
        });
      });
  };
  const [value, setValue] = useState("");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else {
      setActive("nav__menu");
    }
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <nav className="nav" ref={wrapperRef}>
      <Toaster
        toastOptions={{
          duration: 1000,
        }}
        position="top-right"
      ></Toaster>
      <div className="nav-side-div">
        <div
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            router("/");
            window.location.reload();
          }}
        >
          <img className="nav-brand-logo" src={logo} alt="logo" />
          <h3 className="nav-brand-title">Animehub</h3>
        </div>

        <input
          onInput={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (e.target.value === "") toast.error("Input cannot be empty!");
              else searchAnime(e.target.value);
            }
          }}
          placeholder="Search for anime"
          className="searchbar"
          type="text"
          value={value}
        ></input>
        <ul className={active}>
          <li className="nav__item">
            <span
              onClick={(e) => {
                e.preventDefault();
                if (location !== "/") {
                  router("/");
                } else document.querySelector("#popular").scrollIntoView();
              }}
              className="nav__link"
            >
              Popular
            </span>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              router("/movies");
            }}
            className="nav__item"
          >
            <span className="nav__link">Top Movies</span>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              router("/recentep");
            }}
            className="nav__item"
          >
            <span className="nav__link">Recent Ep</span>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              router("/filter");
            }}
            className="nav__item"
          >
            <span className="nav__link">Filter</span>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              router("/watchlist");
            }}
            className="nav__item"
          >
            <span className="nav__link">Watchlist</span>
          </li>
          <div className="auth">
            {SharedState.loggedIn ? (
              <li>
                <GoogleLogout
                  render={(renderProps) => (
                    <li
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className="nav__item nav__item-logout"
                    >
                      <span className="nav__link">Logout</span>
                    </li>
                  )}
                  clientId={clientId}
                  buttonText="Logout"
                  onLogoutSuccess={() => {
                    toast.success("Successfully logged out");
                    SharedState.setIsLoggedIn(false);
                  }}
                ></GoogleLogout>
              </li>
            ) : (
              <li
                onClick={(e) => {
                  e.preventDefault();
                  router("/login");
                }}
                className="nav__item nav__item-login"
              >
                <span className="nav__link">Login</span>
              </li>
            )}
            {!SharedState.loggedIn && (
              <li
                onClick={(e) => {
                  e.preventDefault();
                  router("/signup");
                }}
                className="nav__item nav__item-signup"
              >
                <span className="nav__link">Signup</span>
              </li>
            )}
          </div>
        </ul>
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};
export default Navbar;
