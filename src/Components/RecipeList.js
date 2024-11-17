import "../Styles/Variables.css";
import React from "react";

export default function RecipeList({
  recipes,
  loading,
  error,
  searchedDish,
  selectedDish,
}) {
  const chooseRecipe = (id) => {
    selectedDish(id);
  };

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p className="error-message">{error}</p>;
  if (recipes.length === 0)
    return (
      <p>No recipes found for "{searchedDish}". Try adjusting your search.</p>
    );

  return (
    <ul className="recipes-wrapper">
      {recipes.map((recipe) => (
        <li
          key={recipe.id}
          onClick={() => chooseRecipe(recipe.id)}
          className="recipe-item"
        >
          <img className="recipe-img" src={recipe.image} alt={recipe.title} />
          <h4 className="recipe-title">{recipe.title}</h4>
        </li>
      ))}
    </ul>
  );
}
