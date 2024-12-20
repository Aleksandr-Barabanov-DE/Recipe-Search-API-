import React from "react";
import Select from "../Components/Select";

const CuisineSelect = ({ selectedCuisine, handleCuisineChange }) => {
  const cuisineOptions = [
    { value: "African", label: "African" },
    { value: "Asian", label: "Asian" },
    { value: "American", label: "American" },
    { value: "British", label: "British" },
    { value: "Cajun", label: "Cajun" },
    { value: "Caribbean", label: "Caribbean" },
    { value: "Chinese", label: "Chinese" },
    { value: "Eastern European", label: "Eastern European" },
    { value: "European", label: "European" },
    { value: "French", label: "French" },
    { value: "German", label: "German" },
    { value: "Greek", label: "Greek" },
    { value: "Indian", label: "Indian" },
    { value: "Irish", label: "Irish" },
    { value: "Italian", label: "Italian" },
    { value: "Japanese", label: "Japanese" },
    { value: "Jewish", label: "Jewish" },
    { value: "Korean", label: "Korean" },
    { value: "Latin American", label: "Latin American" },
    { value: "Mediterranean", label: "Mediterranean" },
    { value: "Mexican", label: "Mexican" },
    { value: "Middle Eastern", label: "Middle Eastern" },
    { value: "Nordic", label: "Nordic" },
    { value: "Southern", label: "Southern" },
    { value: "Spanish", label: "Spanish" },
    { value: "Thai", label: "Thai" },
    { value: "Vietnamese", label: "Vietnamese" },
  ];

  return (
    <Select
      label="Cuisine"
      value={selectedCuisine}
      onChange={handleCuisineChange}
      options={cuisineOptions}
      id="cuisine"
    />
  );
};

export default CuisineSelect;
