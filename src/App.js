import "./Styles/Variables.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavigationMenu from "./Components/NavigationMenu";
import AppRoutes from "./Components/AppRoutes";

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <div className="App">
        <NavigationMenu />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
