import { HiPencil } from "react-icons/hi";
import { CgTrash } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import { Category } from "../Types/interfaces";
// Define Category interface
import {
  fetchCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../Module/categoryData";

const CategoryManagement: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]); // Use Category[] for state
  const [category, setCategory] = useState<Category>({ name: "", image: "" }); // Use Category for category state
  const [isEditing, setIsEditing] = useState<boolean>(false); // Use boolean for isEditing

  // Effect to fetch categories on component mount
  const loadCategories = async () => {
    const data = await fetchCategories();
    setCategories(data);
  };
  useEffect(() => {
    loadCategories();
  }, []);

  // Function to handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (isEditing && category._id) {
        await updateCategory(category._id, category);
      } else {
        await addCategory(category);
      }
      console.log(category)
      // Reset the form
      setCategory({ name: "", image: "" });
      setIsEditing(false);
      loadCategories(); // Refresh the categories list
    } catch (error) {
      console.error("Error submitting category:", error);
    }
  };

  // Function to start editing a category
  const handleEdit = (categoryToEdit: Category) => {
    setCategory(categoryToEdit);
    setIsEditing(true);
  };

  // Function to delete a category
  const handleDelete = async (id: string) => {
    try {
      await deleteCategory(id);
      loadCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };
  categories.map((cat) => console.log(cat.image));

  return (
    <div className="w-full bg-black text-white">
      <h1 className="text-blue-300 capitalize font-serif p-2 text-3xl border-b border-blue-300 mb-4">
        Category Management
      </h1>
      <div className="w-full h-full flex flex-col items-center justify-center space-y-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-gray-800 px-5 py-8 rounded items-center justify-center space-y-4"
        >
          <input
            className=" outline-blue-950 border-blue-950 bg-gray-900 w-full rounded-md p-1"
            type="text"
            name="name"
            value={category.name}
            onChange={handleChange}
            placeholder="Category Name"
            required
          />
          {/* i dont have edditing for image
            becaouse i can not handle image issues yet  */}
          <div className="flex flex-row items-center justify-beween">
            {!isEditing && (
              <input
                type="file"
                name="image"
                value={category.image}
                onChange={handleChange}
                placeholder="Image"
                required
              />
            )}
            <button
              className=" bg-blue-950 py-2 px-3 rounded-md hover:bg-gray-900 transition-all"
              type="submit"
            >
              {isEditing ? "Update" : "Add"} Category
            </button>
          </div>
        </form>
        <ul className="  w-[60%] flex flex-col items-center justify-center space-y-5 h-full">
          {categories.map(
            (
              cat // Renamed the item to cat for clarity
            ) => (
              <li
                key={cat._id}
                className="w-full flex flex-row items-center justify-between bg-gray-700 p-7 rounded-md"
              >
                <div className="w-9/12 flex flex-row items-center justify-between">
                  {/* <img src={} alt="" /> */}
                  <span className="font-bold capitalize text-xl">
                    {cat.name}
                  </span>
                  <span className="font-thin">{cat._id}</span>
                </div>
                <div className="flex flex-row items-center justify-center space-x-5 w-3/12">
                  <button onClick={() => handleEdit(cat)}>
                    <HiPencil />
                  </button>
                  <button
                    className="text-xl hover:text-red-600 transition-all"
                    onClick={() => handleDelete(cat._id!)}
                  >
                    <CgTrash />
                  </button>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default CategoryManagement;
