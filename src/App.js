import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import CocktailPage from "./pages/CocktailPage";
import CategoryPage from "./pages/CategoryPage";
import CategoriesPage from "./pages/CategoriesPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/categories" component={CategoriesPage} />
        <Route path="/categorypage/:strCategory" component={CategoryPage} />
        <Route path="/cocktailpage/:idDrink" component={CocktailPage} />
      </Switch>
    </div>
  );
}

export default App;
