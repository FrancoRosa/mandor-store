"use client";
import Login from "./components/login";
import Main from "./components/main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import useLocalStorage from "./js/storage";

export default function Home() {
  const [auth, setAuth] = useState(true);
  const [dark, setDark] = useState(true);

  const handleTheme = () => {
    setDark((s) => !s);
  };

  return (
    <main className={dark ? "dark" : "light"}>
      {auth ? (
        <Main setAuth={setAuth} auth={auth} />
      ) : (
        <Login setAuth={setAuth} />
      )}
      <button onClick={handleTheme} className="absolute top-0 right-0">
        {dark ? (
          <FontAwesomeIcon
            icon={faSun}
            className="text-2xl m-4 text-yellow-600"
          />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            className="text-2xl m-4 text-gray-600"
          />
        )}
      </button>
    </main>
  );
}
