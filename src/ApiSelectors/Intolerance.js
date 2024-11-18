import React from "react";
import Select from "../Components/Select";

const IntoleranceSelect = ({
  selectedIntolerance,
  handleIntoleranceChange,
}) => {
  const intoleranceOptions = [
    { value: "dairy", label: "Dairy" },
    { value: "egg", label: "Egg" },
    { value: "gluten", label: "Gluten" },
    { value: "grain", label: "Grain" },
    { value: "peanut", label: "Peanut" },
    { value: "seafood", label: "Seafood" },
    { value: "sesame", label: "Sesame" },
    { value: "shellfish", label: "Shellfish" },
    { value: "soy", label: "Soy" },
    { value: "sulfite", label: "Sulfite" },
    { value: "treeNut", label: "Tree Nut" },
    { value: "wheat", label: "Wheat" },
  ];

  return (
    <Select
      label="Intolerance"
      value={selectedIntolerance}
      onChange={handleIntoleranceChange}
      options={intoleranceOptions}
      id="intolerance"
    />
  );
};

export default IntoleranceSelect;
