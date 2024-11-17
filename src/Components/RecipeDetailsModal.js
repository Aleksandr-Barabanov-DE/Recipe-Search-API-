import React from "react";
import "../Styles/Variables.css";
import "../Styles/RecipeDetailsModal.css";

export default function RecipeDetailsModal({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-recipe-title">{recipe.title}</h2>
        <img
          className="modal-recipe-img"
          src={recipe.image}
          alt={recipe.title}
        />
        <p className="modal-recipe-description">
          {recipe.summary.replace(/<[^>]*>/g, "")}
        </p>{" "}
        <h3>Ingredients:</h3>
        <ul className="modal-recipe-ingredients-container">
          {recipe.extendedIngredients.map((ingredient) => (
            <li className="modal-recipe-ingredient" key={ingredient.id}>
              {ingredient.original}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
