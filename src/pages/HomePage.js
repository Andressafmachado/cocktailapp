import axios from "axios";
import react from "react";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );
      setCocktail(response.data.drinks);

      console.log(cocktail);
    }
    fetchData();
  }, []);

  console.log(cocktail);

  return (
    <div>
      <ul>
        {!cocktail ? (
          <h1>Loading...</h1>
        ) : (
          cocktail.map((category) => {
            return <li>{category.strCategory}</li>;
          })
        )}
      </ul>
    </div>
  );
}
