import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CocktailItem from "../components/CocktailItem";
import "./HomePage.css";

export default function HomePage() {
  const [cocktail, setCocktail] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      );
      setCocktail(response.data.drinks[0]);
    }
    fetchData();
  }, []);

  return (
    <div className="HomePage">
      <h1>
        {" "}
        <strong>Cheers!</strong>
      </h1>
      <p>
        Here you can find 617 different drinks and cocktails from around the
        world.{" "}
      </p>

      <Link to="./categories">
        <button id="button">all categories</button>
      </Link>
      {!cocktail ? null : (
        <div className="cocktailcomponent">
          <CocktailItem props={cocktail} />
        </div>
      )}
    </div>
  );
}
