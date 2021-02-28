import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CocktailPage() {
  // const route_parameters = useParams();
  // console.log(route_parameters);

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
                Alcoholic? {c.strAlcoholic === "Alcoholic" ? "Yes!" : "No!"}
              </p>
              <p>Category: {c.strCategory}</p>
              <p>Glass: {c.strGlass}</p>
              <p>
                <strong>Ingredients:</strong>{" "}
              </p>
              <p>
                {c.strMeasure1} {c.strIngredient1}
              </p>
              <p>
                {c.strMeasure2} {c.strIngredient2}
              </p>
              <p>
                {c.strMeasure3}
                {c.strIngredient3}
              </p>
              <p>
                {c.strMeasure4} {c.strIngredient4}
              </p>
              <p>
                {c.strMeasure5}
                {c.strIngredient5}
              </p>
              <p>
                {c.strMeasure6}
                {c.strIngredient6}
              </p>
              <p>
                {c.strMeasure7}
                {c.strIngredient7}
              </p>
              <p>
                {c.strMeasure8}
                {c.strIngredient8}
              </p>
              <p>
                {c.strMeasure9}
                {c.strIngredient9}
              </p>
              <p>
                {c.strMeasure10}
                {c.strIngredient10}
              </p>
              <p>
                {c.strMeasure11}
                {c.strIngredient11}
              </p>
              <p>
                {c.strMeasure12}
                {c.strIngredient12}
              </p>
              <p>
                {c.strMeasure13}
                {c.strIngredient13}
              </p>
              <p>
                {c.strMeasure14}
                {c.strIngredient14}
              </p>
              <p>
                {c.strMeasure15}
                {c.strIngredient15}
              </p>
              <p>
                <strong>Instructions:</strong>
              </p>
              <p> {c.strInstructions}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
