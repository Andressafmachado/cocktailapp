import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Categorie from "./pages/Categorie";
import CocktailPage from "./pages/CocktailPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/categorie" component={Categorie} />
        <Route path="/cocktaildetail" component={CocktailPage} />
      </Switch>
    </div>
  );
}

export default App;
