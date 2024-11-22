import React, { useEffect, useState } from "react";
// Define Category interface
interface Category {
  _id?: string; // Optional since it may not exist for a new category
  name: string;
  image: string;
}
import {
  fetchCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../Data/categoryData";

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

  return (
    <div>
      <h1>Category Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={category.name}
          onChange={handleChange}
          placeholder="Category Name"
          required
        />
        {/* i dont have edditing for image 
        becaouse i can not handle image issues yet  */}
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
        <button type="submit">{isEditing ? "Update" : "Add"} Category</button>
      </form>
      <ul>
        {categories.map(
          (
            cat // Renamed the item to cat for clarity
          ) => (
            <li key={cat._id}>
              {" "}
              {/* Ensure _id is defined */}
              {cat.name}
              <button onClick={() => handleEdit(cat)}>Edit</button>
              <button onClick={() => handleDelete(cat._id!)}>
                Delete
              </button>{" "}
              {/* Non-null assertion for _id */}
              {cat._id}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default CategoryManagement;
