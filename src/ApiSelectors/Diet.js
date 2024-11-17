import React from "react";

const DietSelect = ({ selectedDiet, handleDietChange }) => {
  return (
    <div>
      <label htmlFor="diet" className="visually-hidden">
        Choose a Diet:
      </label>
      <select
        id="diet"
        value={selectedDiet}
        onChange={handleDietChange}
        aria-label="Choose a Diet"
      >
        <option value="">-- Select Diet --</option>
        <option value="glutenFree">Gluten Free</option>
        <option value="ketogenic">Ketogenic</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="lactoVegetarian">Lacto-Vegetarian</option>
        <option value="ovoVegetarian">Ovo-Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="pescetarian">Pescetarian</option>
        <option value="paleo">Paleo</option>
        <option value="primal">Primal</option>
        <option value="lowFodmap">Low FODMAP</option>
        <option value="whole30">Whole30</option>
      </select>
    </div>
  );
};

export default DietSelect;
