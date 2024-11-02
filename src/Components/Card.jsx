import { IoTrashBinOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ coffee, handleRemove }) => {
  const { pathname } = useLocation();
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};
  return (
    <div className="flex relative my-12">
      <Link
        to={`/coffee/${id}`}
        className="transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden"
      >
        <figure className="w-full h-48 overflow-hidden">
          <img className="" src={image} alt="" />
        </figure>
        <div className="p-4">
          <h1 className="text-xl">Name: {name}</h1>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
          <p>Popular: {popularity}</p>
        </div>
      </Link>
      {pathname === "/dashboard" && (
        <div
          onClick={() => handleRemove(id)}
          className="absolute -top-4 -right-4 text-3xl rounded-full p-2 cursor-pointer bg-warning"
        >
          <IoTrashBinOutline></IoTrashBinOutline>
        </div>
      )}
    </div>
  );
};

export default Card;
