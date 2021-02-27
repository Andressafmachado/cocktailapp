import axios from "axios";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [category, setCategory] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      );
      setCategory(response.data.drinks);
    }
    fetchData();
  }, []);

  console.log(category);

  return (
    <div>
      <ul>
        {!category ? (
          <h1>Loading...</h1>
        ) : (
          category.map((category) => {
            return (
              <div key={Math.random()}>
                <Link
                  className="link"
                  to={`/categories/${category.strCategory}`}
                  target="_blank"
                >
                  <p>{category.strCategory}</p>
                </Link>
              </div>
            );
          })
        )}
      </ul>
    </div>
  );
}
