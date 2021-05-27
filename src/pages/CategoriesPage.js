import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CategoriesPage() {
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

  return (
    <div>
      <h1>
        {" "}
        <strong>Cheers!</strong>
      </h1>

      <p> Choose the category: </p>
      <br />
      <ul>
        {!category ? (
          <h1>Loading...</h1>
        ) : (
          category.map((category, index) => {
            const category2 = category.strCategory;
            const categoryNoSpace = category2.replace(/ /g, "_");
            const encodedCategory = encodeURIComponent(categoryNoSpace);

            return (
              <div key={index}>
                <Link
                  style={{ color: "black" }}
                  to={`/categorypage/${encodedCategory}`}
                >
                  <button id="button">{category.strCategory}</button>
                </Link>
              </div>
            );
          })
        )}
      </ul>
    </div>
  );
}
