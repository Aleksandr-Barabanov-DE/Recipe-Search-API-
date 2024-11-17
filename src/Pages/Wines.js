import "../Styles/Variables.css";
import "../Styles/WinesPage.css";
import React from "react";
import WineInputQuery from "../Components/WineInputQuery";

const apiKey = `0872a1deb55344119a0a4273ec68a3f8`;

export default function App() {
  return (
    <div className="container recipes-container">
      <h1 className="recipes-section-title">Find the Perfect Wine</h1>
      <WineInputQuery apiKey={apiKey} />
    </div>
  );
}
