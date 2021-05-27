import { Link } from "react-router-dom";
import "./CocktailItem.css";

export default function CocktailItem({ props }) {
  const image = {
    backgroundImage: `url(${props.strDrinkThumb})`,
  };

  const category2 = props.strCategory;
  const categoryNoSpace = category2.replace(/ /g, "_");
  const encodedCategory = encodeURIComponent(categoryNoSpace);

  return (
    <div className="cocktailItem" style={image}>
      <Link className="linkCocktailItem" to={`/cocktailpage/${props.idDrink}`}>
        <h1>{props.strDrink}</h1>{" "}
      </Link>

      <Link
        className="linkCocktailItem"
        to={`/categorypage/${encodedCategory}`}
      >
        <h3>Category: {props.strCategory}</h3>
      </Link>
    </div>
  );
}
