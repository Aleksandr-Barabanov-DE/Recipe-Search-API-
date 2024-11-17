export async function fetchRecipes(
  apiKey,
  searchedDish,
  recipesNumber,
  selectedCuisine,
  selectedDiet,
  selectedIntolerance
) {
  let url = `https://api.spoonacular.com/recipes/complexSearch?query=${searchedDish}&number=${recipesNumber}&apiKey=${apiKey}`;

  if (selectedCuisine) url += `&cuisine=${selectedCuisine}`;
  if (selectedDiet) url += `&diet=${selectedDiet}`;
  if (selectedIntolerance) url += `&intolerances=${selectedIntolerance}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.results || [];
}
