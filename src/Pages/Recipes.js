// Recipes.js
import "../Styles/Variables.css";
import "../Styles/RecipesPage.css";
import { useState, useEffect, useCallback } from "react";
import RecipeList from "../Components/RecipeList";
import { fetchRecipes } from "../Api/FetchRecipes";
import { fetchRecipeDetails } from "../Api/FetchRecipeDetails";
import RecipeDetailsModal from "../Components/RecipeDetailsModal";
import SearchForm from "../Components/SearchForm";

export default function Recipes() {
  const apiKey = "0872a1deb55344119a0a4273ec68a3f8";

  const [recipes, setRecipes] = useState([]);
  const [recipesNumber] = useState(6);
  const [searchedDish, setSearchedDish] = useState("chicken");
  const [inputValue, setInputValue] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [selectedDiet, setSelectedDiet] = useState("");
  const [selectedIntolerance, setIntolerance] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedRecipeDetails, setSelectedRecipeDetails] = useState(null);

  const handleFetchRecipes = useCallback(
    async (dish) => {
      setLoading(true);
      setError(null);

      try {
        const fetchedRecipes = await fetchRecipes(
          apiKey,
          dish || searchedDish,
          recipesNumber,
          selectedCuisine,
          selectedDiet,
          selectedIntolerance
        );
        setRecipes(fetchedRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setError("Failed to fetch recipes. Please try again later.");
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    },
    [
      apiKey,
      searchedDish,
      recipesNumber,
      selectedCuisine,
      selectedDiet,
      selectedIntolerance,
    ]
  );

  useEffect(() => {
    handleFetchRecipes();
  }, [handleFetchRecipes]);

  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const updatedDish = inputValue.trim();
        setSearchedDish(updatedDish);
        handleFetchRecipes(updatedDish);
      }
    },
    [handleFetchRecipes, inputValue]
  );

  const handleFetchRecipeDetails = async (recipeId) => {
    setLoading(true);
    try {
      const recipeDetails = await fetchRecipeDetails(apiKey, recipeId);
      setSelectedRecipeDetails(recipeDetails);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
      setError("Failed to load recipe details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setSelectedRecipeDetails(null);
  };

  return (
    <div className="container page-inner-container">
      <h3 className="section-title">Find the Recipe You've Been Looking For</h3>
      <div>
        <SearchForm
          searchedDish={inputValue}
          handleInputChange={handleInputChange}
          handleKeyDown={handleKeyDown}
          selectedCuisine={selectedCuisine}
          handleCuisineChange={(e) => setSelectedCuisine(e.target.value)}
          selectedDiet={selectedDiet}
          handleDietChange={(e) => setSelectedDiet(e.target.value)}
          selectedIntolerance={selectedIntolerance}
          handleIntoleranceChange={(e) => setIntolerance(e.target.value)}
          handleFetchRecipes={() => {
            setSearchedDish(inputValue);
            handleFetchRecipes();
          }}
        />
      </div>

      <RecipeList
        recipes={recipes}
        loading={loading}
        error={error}
        searchedDish={searchedDish}
        selectedDish={(id) => {
          handleFetchRecipeDetails(id);
        }}
      />

      {selectedRecipeDetails && (
        <RecipeDetailsModal
          recipe={selectedRecipeDetails}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
