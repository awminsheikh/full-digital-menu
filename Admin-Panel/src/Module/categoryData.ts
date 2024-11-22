// categoryApi.ts
import axios from "axios";
interface Category {
  _id?: string;
  name: string;
  image: string;
}
const categoryUrl = "http://localhost:3000/api/categories";

// Function to fetch categories from the API
export const fetchCategories = async (): Promise<Category[]> => {
  const response = await axios.get<Category[]>(categoryUrl);
  return response.data;
};

// Function to add a new category
export const addCategory = async (category: Category) => {
  await axios.post(categoryUrl, category);
};

// Function to update an existing category
export const updateCategory = async (id: string, category: Category) => {
  await axios.put(`${categoryUrl}/${id}`, category);
};

// Function to delete a category
export const deleteCategory = async (id: string) => {
  await axios.delete(`${categoryUrl}/${id}`);
};
