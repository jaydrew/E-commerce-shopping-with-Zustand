import React from "react";
import useCategoryStore from "../store/useCategoryStore";

const CategoryButton = ({ category: { id, name, isActive } }) => {

  const { activeCategory } = useCategoryStore();
  const handleClick = () => {
      activeCategory(id);
  }
  return (
    <button
    onClick={handleClick}
      className={` ${
        isActive && "bg-blue-950 rounded text-white " 
      } border  border-blue-950 rounded text-amber-500  px-4 py-2 me-2 category-button`}
    >
      {name}
    </button>
  );
};

export default CategoryButton;
