import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function CategoryPage() {
  const { strCategory } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`
      );

      setCategories(response.data.drinks);
    }
    fetchData();
  }, [strCategory]);

  return (
    <div>
      <h1> {strCategory}</h1>
      {!categories ? (
        <h1>Loading...</h1>
      ) : (
        categories.map((c) => {
          return (
            <div className="card-container" key={c.idDrink}>
              <div className="cocktail-card">
                <Link className="link" to={`/cocktailpage/${c.idDrink}`}>
                  <h2>{c.strDrink}</h2>
                  <img src={c.strDrinkThumb} alt="cocktail" height="200px" />
                </Link>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
