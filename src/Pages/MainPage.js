import "../Styles/Variables.css";
import "../Styles/MainPage.css";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  const appName = useRef();
  const appSlogan = useRef();
  const appMainSectionButton = useRef();

  const moveToRecipes = () => {
    navigate("/Recipes");
  };

  useLayoutEffect(() => {
    const appNameText = appName.current;
    const appSloganText = appSlogan.current;
    const appMainSectionBtn = appMainSectionButton.current;

    gsap.fromTo(
      appNameText,
      {
        opacity: 0,
        x: 100,
        y: -100,
      },
      { opacity: 1, x: 0, y: 0, duration: 2 }
    );

    gsap.fromTo(
      appSloganText,
      {
        opacity: 0,
        x: -100,
      },
      { opacity: 1, x: 0, y: -100, duration: 2 }
    );

    gsap.fromTo(
      appMainSectionBtn,
      {
        opacity: 0,
      },
      { opacity: 1, duration: 2, y: -50, delay: 2 }
    );
  }, []);

  return (
    <div className="container main-page-container">
      <h1 className="main-page-app-name" ref={appName} data-text="Yummy Search">
        Yummy Search
      </h1>
      <h2 className="main-page-app-slogan" ref={appSlogan}>
        Endless Recipes, Infinite Tastes.
      </h2>

      <button
        className="button"
        onClick={moveToRecipes}
        ref={appMainSectionButton}
      >
        Find Your Recipe
      </button>
    </div>
  );
}
