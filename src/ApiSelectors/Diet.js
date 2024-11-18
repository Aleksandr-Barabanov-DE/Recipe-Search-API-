import React from "react";
import Select from "../Components/Select";

const DietSelect = ({ selectedDiet, handleDietChange }) => {
  const dietOptions = [
    { value: "glutenFree", label: "Gluten Free" },
    { value: "ketogenic", label: "Ketogenic" },
    { value: "vegetarian", label: "Vegetarian" },
    { value: "lactoVegetarian", label: "Lacto-Vegetarian" },
    { value: "ovoVegetarian", label: "Ovo-Vegetarian" },
    { value: "vegan", label: "Vegan" },
    { value: "pescetarian", label: "Pescetarian" },
    { value: "paleo", label: "Paleo" },
    { value: "primal", label: "Primal" },
    { value: "lowFodmap", label: "Low FODMAP" },
    { value: "whole30", label: "Whole30" },
  ];

  return (
    <Select
      label="Diet"
      value={selectedDiet}
      onChange={handleDietChange}
      options={dietOptions}
      id="diet"
    />
  );
};

export default DietSelect;
