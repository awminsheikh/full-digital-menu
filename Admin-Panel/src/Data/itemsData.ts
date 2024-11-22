import axios from "axios";

interface Item {
  _id?: string; // Make _id optional since it may not be set on new items
  name: string;
  image: string;
  price: number;
  available: boolean;
  category: string;
}

const itemUrl = "http://localhost:3000/api/items";

// Function to fetch items from the API
export const fetchItems = async (): Promise<Item[]> => {
  const response = await axios.get(itemUrl);
  return response.data;
};

// Function to add a new item
export const addItem = async (item: Item) => {
  await axios.post(itemUrl, item);
};

// Function to update a item
export const updateItem = async (id: string, item: Item) => {
  await axios.put(`${itemUrl}/${id}`, item);
};

// Function to delete a item
export const deleteItem = async (id: string) => {
  await axios.delete(`${itemUrl}/${id}`);
};
