export interface Category {
  _id?: string; // Optional since it may not exist for a new category
  name: string;
  image: string;
}
export interface Item {
  _id?: string; // Make _id optional since it may not be set on new items
  name: string;
  image: string;
  price: number;
  available: boolean;
  category: string;
}
