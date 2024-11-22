import { GiBeastEye } from "react-icons/gi";
import { useState, useEffect } from "react";
import { fetchCategories } from "../../Module/categoryData";
import { Category } from "../../Types/interfaces";
import { Link } from "react-router-dom"; // Ensure you're using 'react-router-dom'

const CategoryWindow = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const loadCategories = async () => {
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (error) {
      console.error("Error loading categories:", error);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  // Get the last three categories
  const lastThreeCategories = categories.slice(-3);

  return (
    <div
      className="w-1/2 flex flex-col items-center justify-center bg-gray-700 text-white rounded-lg
    hover:shadow-md hover:shadow-white/70 transition-all"
    >
      <Link
        to="/admin/categories"
        className="w-full flex items-center justify-center rounded-lg"
      >
        <span className="w-full bg-gray-800 p-4 text-2xl rounded-lg flex items-center justify-between">
          Categories
          <GiBeastEye />
        </span>
      </Link>
      <ul className="fkex flex-col items-center w-full p-5 space-y-4">
        {lastThreeCategories.length > 0 ? (
          lastThreeCategories.map((category) => (
            <li
              key={category._id}
              className="bg-gray-800 rounded-md p-3 w-full text-lg capitalize"
            >
              <span className="border-l-2 px-2 border-blue-300">
                {category.name}
              </span>
            </li>
          ))
        ) : (
          <li>No categories available</li>
        )}
      </ul>
    </div>
  );
};

export default CategoryWindow;
