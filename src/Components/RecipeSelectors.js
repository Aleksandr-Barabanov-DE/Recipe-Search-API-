import React from "react";
import CuisineSelect from "../ApiSelectors/Cuisine";
import DietSelect from "../ApiSelectors/Diet";
import IntoleranceSelect from "../ApiSelectors/Intolerance";

export default function RecipeSelectors({
  selectedCuisine,
  handleCuisineChange,
  selectedDiet,
  handleDietChange,
  selectedIntolerance,
  handleIntoleranceChange,
}) {
  return (
    <div className="recipes-selector-container">
      <CuisineSelect
        selectedCuisine={selectedCuisine}
        handleCuisineChange={handleCuisineChange}
      />
      <DietSelect
        selectedDiet={selectedDiet}
        handleDietChange={handleDietChange}
      />
      <IntoleranceSelect
        selectedIntolerance={selectedIntolerance}
        handleIntoleranceChange={handleIntoleranceChange}
      />
    </div>
  );
}
