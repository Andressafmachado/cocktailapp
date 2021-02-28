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
      <h1>
        {" "}
        <strong>Cheers!</strong>
      </h1>
      <p>
        Here you can find 617 different drinks and cocktails from around the
        world.{" "}
      </p>
      <p>First choose the category: </p>

      <ul>
        {!category ? (
          <h1>Loading...</h1>
        ) : (
          category.map((category) => {
            const category2 = category.strCategory;
            const categoryNoSpace = category2.replace(/ /g, "_");
            const encodedCategory = encodeURIComponent(categoryNoSpace);

            return (
              <div key={Math.random()}>
                <Link className="link" to={`/categorypage/${encodedCategory}`}>
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
