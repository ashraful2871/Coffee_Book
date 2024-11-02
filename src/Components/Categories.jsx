/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div role="tablist" className="tabs tabs-lifted">
      {categories.map((category, idx) => (
        <NavLink
          key={idx}
          to={`/category/${category.category}`}
          role="tab"
          className={({ isActive }) =>
            `tab ${isActive ? "tab-active text-xl font-thin" : ""}`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
