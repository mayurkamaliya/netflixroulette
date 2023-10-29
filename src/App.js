import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import HeaderBackgroundImage from "./images/background.jpg";

const App = () => {
  const [showFilmBody, setShowFilmBody] = useState(false);
  const [filmBodyToRender, setFilmBodyToRender] = useState(null);

  const toggleShowFilmBody = (e) => {
    if (e.target.classList[0] === "filcard-image") {
      setShowFilmBody(true);
      setFilmBodyToRender(e.target.title);
      document.querySelector(
        "header"
      ).style.background = `linear-gradient( rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85) ), url("${HeaderBackgroundImage}")`;
    } else {
      setShowFilmBody(false);
      setFilmBodyToRender(null);
      document.querySelector("header").removeAttribute("style");
    }
  };

  return (
    <Switch>
      <Route path="/">
        <Header />
        <Footer />
      </Route>
    </Switch>
  );
};

export default App;
