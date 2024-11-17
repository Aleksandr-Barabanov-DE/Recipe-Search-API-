import React, { useState } from "react";
import { fetchWinePairing } from "../Api/FetchWine";

export default function WineInputQuery({ apiKey }) {
  const [inputValue, setInputValue] = useState("");
  const [winePairing, setWinePairing] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const data = await fetchWinePairing(apiKey, inputValue);
      setWinePairing(data);
    } catch (err) {
      setError("Something went wrong while fetching wine pairing.");
    }
  };

  return (
    <div>
      <form className="wines-page-search-container" onSubmit={handleSearch}>
        <label>
          <input
            className="wines-page-input"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a dish, ingredient, or cuisine..."
          />
        </label>
        <button className="button" type="submit">
          Find Wine Pairing
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {winePairing && (
        <div className="wine-result-container">
          <div>
            <h2 className="">Wine Pairing for: {inputValue}</h2>
            {winePairing.pairingText && (
              <p className="wine-result-description">
                {winePairing.pairingText}
              </p>
            )}
          </div>

          {winePairing.productMatches && (
            <div>
              <h3>Recommended Wines:</h3>
              <ul>
                {winePairing.productMatches.map((wine) => (
                  <li key={wine.id}>
                    <strong>{wine.title}</strong> - {wine.price}
                    <br />
                    <img
                      className="wine-result-img"
                      src={wine.imageUrl}
                      alt={wine.title}
                    />
                    <a
                      href={wine.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wine-result-external-link"
                    >
                      Buy Now
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
