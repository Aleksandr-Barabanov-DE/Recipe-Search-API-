import React from "react";
import RecipeSelectors from "./RecipeSelectors";
import RecipesInputQuery from "./InputQuery";

const SearchForm = ({
  searchedDish,
  handleInputChange,
  handleKeyDown,
  selectedCuisine,
  handleCuisineChange,
  selectedDiet,
  handleDietChange,
  selectedIntolerance,
  handleIntoleranceChange,
  handleFetchRecipes,
  loading,
  error,
}) => (
  <div className="recipes-search-container">
    <RecipesInputQuery
      inputValue={searchedDish}
      handleInputChange={handleInputChange}
      onKeyDown={handleKeyDown}
    />

    <div className="recipes-search-wrapper">
      <RecipeSelectors
        selectedCuisine={selectedCuisine}
        handleCuisineChange={handleCuisineChange}
        selectedDiet={selectedDiet}
        handleDietChange={handleDietChange}
        selectedIntolerance={selectedIntolerance}
        handleIntoleranceChange={handleIntoleranceChange}
      />
      <button
        className="button recipe-search-button"
        onClick={handleFetchRecipes}
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </div>

    {/* Display error if exists */}
    {error && <div className="error-message">{error}</div>}
  </div>
);

export default SearchForm;
