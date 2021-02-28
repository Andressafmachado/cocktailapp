import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function CategoryPage() {
  const { strCategory } = useParams();
  console.log(strCategory);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`
      );

      console.log("CATEGORIES", response);
      setCategories(response.data.drinks);
    }
    fetchData();
  }, [strCategory]);

  // console.log(categories);

  return (
    <div>
      {!categories ? (
        <h1>Loading...</h1>
      ) : (
        categories.map((c) => {
          console.log(strCategory);
          return (
            <div className="card-container" key={c.idDrink}>
              <div className="cocktail-card">
                <Link className="link" to={`/cocktailpage/${c.idDrink}`}>
                  <h3>{c.strDrink}</h3>
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
