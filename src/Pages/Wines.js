import "../Styles/Variables.css";
import "../Styles/WinesPage.css";
import React from "react";
import WineInputQuery from "../Components/WineInputQuery";

const apiKey = process.env.REACT_APP_API_KEY;

export default function App() {
  return (
    <div className="container page-inner-container">
      <h1 className="section-title">Find the Perfect Wine</h1>
      <WineInputQuery apiKey={apiKey} />
    </div>
  );
}
