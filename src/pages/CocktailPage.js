import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function CocktailPage() {
  // const route_parameters = useParams();
  // console.log(route_parameters);

  // return <div>this is your CategoryPage</div>;

  const { idDrink } = useParams();
  console.log(idDrink);

  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    console.log("use effect ...");
    async function fetchData() {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
      );

      console.log("DRINKS: ", response);
      setCocktail(response.data.drinks);
    }
    fetchData();
  }, [idDrink]);

  console.log(cocktail);

  // return (
  //   <p>
  //     {JSON.stringify(cocktail)}
  //     ANDRESSA
  //   </p>
  // );
  return (
    <div>
      {!cocktail ? (
        <h1>Loading...</h1>
      ) : (
        cocktail.map((c) => {
          return (
            <div key={c.idDrink}>
              <div>
                <h3>{c.strDrink}</h3>
                <img src={c.strDrinkThumb} alt="cocktail" height="200px" />
              </div>
              <p>
                Alcoholic: {c.strAlcoholic === "Alcoholic" ? "Yes!" : "No!"}
              </p>
              <p>Category: {c.strCategory}</p>
              <p>Glass: {c.strGlass}</p>
              <p>
                <strong>Ingredients:</strong>{" "}
              </p>
              <p>{c.strIngredient1}</p>
              <p>{c.strIngredient2}</p>
              <p>{c.strIngredient3}</p>
              <p>{c.strIngredient4}</p>
              <p>{c.strIngredient5}</p>
              <p>{c.strIngredient6}</p>
              <p>{c.strIngredient7}</p>
              <p>{c.strIngredient8}</p>
              <p>{c.strIngredient9}</p>
              <p>{c.strIngredient10}</p>
              <p>{c.strIngredient11}</p>
              <p>{c.strIngredient12}</p>
              <p>{c.strIngredient13}</p>
              <p>{c.strIngredient14}</p>
              <p>{c.strIngredient15}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
