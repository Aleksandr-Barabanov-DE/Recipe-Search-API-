# Yummy Search - Recipe Finder

**Yummy Search** is a web application for finding recipes. Users can search for recipes by ingredients, diet, cuisine, and intolerances, as well as view detailed information about the recipe, including ingredients and step-by-step instructions. It also offers the ability to find the perfect wine pairing for a dish.

## Technologies

- **React**: Used to build the user interface with components and state management.
- **React Router (useNavigate, NavLink)**: For navigating between pages (Home, Recipes, Wine).
  - `useLocation`: A hook to get information about the current URL, which is used to activate or deactivate links depending on the current path.
  - `useNavigate`: A hook to navigate programmatically, allowing you to change the path or move to another page, for example, when a button is clicked.
- **useState and useEffect**: Hooks for managing state and handling side effects.
- **useLayoutEffect**: Used for animations when the page loads.
- **useCallback**: A hook used to optimize `fetch` requests to avoid re-creating them on every render.
- **GSAP**: For animating elements on the page, such as text and button animations.
- **Spoonacular API**: For retrieving recipe information and wine pairings.

## Installation and Running

To run the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/yummy-search.git
   ```

2. Navigate to the project directory:

   ```bash
   cd yummy-search
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the project:

   ```bash
   npm start
   ```

5. Go to [http://localhost:3000](http://localhost:3000) to view the app in action.

## Functionality

### Home Page

On the home page of the application, users will see a welcome message and a button that redirects them to the recipe page.

### Recipe Page

On the recipe page, users can:

- Search for recipes by ingredients, cuisine, diet, and intolerances.
- View a list of recipes with filtering options.
- Click on a recipe to view detailed information in a modal window.

### Wine Page

On this page, users can search for the perfect wine pairing for their chosen dish.

## Components

- **MainPage**: Displays the main screen with a welcome message and a button to go to the recipes page.
- **Recipes**: A page where recipes are displayed with filtering options.
- **RecipeDetailsModal**: A modal window that displays detailed information about the selected recipe.
- **SearchForm**: A form for entering search parameters (e.g., ingredients, cuisine).
- **WineInputQuery**: A form for entering a query for wine pairing with a dish.

## How It Works

- **useState**: Used for managing application state, such as storing the list of recipes, loading state, and errors.
- **useEffect**: Used for loading data from APIs when the state changes.
- **useLayoutEffect**: Applied for animating elements on the page when they are rendered, such as text and button animations on the first load.
- **useCallback**: Applied to avoid unnecessary re-renders and re-executions of `fetch` requests by memoizing functions.
- **fetch API**: Used for fetching data from external APIs (e.g., the Spoonacular API) to retrieve recipes and wine pairings.
- **NavLink**: Used to track the current path and active links in the navigation.
- **useNavigate**: Used for programmatic navigation between pages when interacting with UI elements (e.g., buttons).

## Planned Improvements

- Support for more advanced search filters.
- Add the ability to save favorite recipes.
- UI/UX improvements with additional animations and visual effects.
- Mobile responsiveness and support for various devices.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Author

Aleksandr Barabanov

## Contacts

<div>
  <a href="https://www.linkedin.com/in/aleksandr-barabanov/">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a> 
  <a href="mailto:barabanov.codes@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"/>
  </a>
  <a href="https://profile.indeed.com/?hl=en_CA&co=CA&from=gnav-notifcenter">
    <img src="https://img.shields.io/badge/indeed-003A9B?style=for-the-badge&logo=indeed&logoColor=white" alt="Indeed"/>
  </a>
  <a href="https://www.codewars.com/users/Aleksandr-Barabanov">
    <img src="https://img.shields.io/badge/Codewars-B1361E?style=for-the-badge&logo=codewars&logoColor=grey" alt="Codewars"/>
  </a>
</div>

© 2024 LocalSpark
