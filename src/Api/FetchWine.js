export async function fetchWinePairing(apiKey, food) {
  const url = `https://api.spoonacular.com/food/wine/pairing?food=${encodeURIComponent(
    food
  )}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Ошибка при получении данных: ${error.message}`);
    throw error;
  }
}
