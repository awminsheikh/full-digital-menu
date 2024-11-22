import React, { useEffect, useState } from 'react';  
import axios from 'axios';  

interface Item {  
    _id?: string; // Make _id optional since it may not be set on new items  
    name: string;  
    image: string;  
    price: number;  
    available: boolean;  
    category: string;  
}  

const ItemManagement: React.FC = () => {  
    const [items, setItems] = useState<Item[]>([]);  
    const [item, setItem] = useState<Item>({ name: '', image: '', price: 0, available: true, category: '' });  
    const [isEditing, setIsEditing] = useState<boolean>(false);  

    const fetchItems = async () => {  
        const response = await axios.get<Item[]>('http://localhost:3000/api/items');  
        setItems(response.data);  
    };  

    useEffect(() => {  
        fetchItems();  
    }, []);  

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {  
        const { name, value } = e.target;  
        
        if (name === 'available') {  
            setItem({ ...item, [name]: value === 'true' }); // Convert to boolean  
        } else if (name === 'price') {  
            setItem({ ...item, [name]: parseFloat(value) }); // Convert price to number  
        } else {  
            setItem({ ...item, [name]: value });  
        }  
    };  

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {  
        e.preventDefault();  
        if (isEditing && item._id) {  
            await axios.put(`http://localhost:3000/api/items/${item._id}`, item);  
        } else {  
            await axios.post('http://localhost:3000/api/items', item);  
        }  
        setItem({ name: '', image: '', price: 0, available: true, category: '' });  
        setIsEditing(false);  
        fetchItems();  
    };  

    const handleEdit = (itemToEdit: Item) => {  
        setItem(itemToEdit);  
        setIsEditing(true);  
    };  

    const handleDelete = async (id: string) => {  
        await axios.delete(`http://localhost:3000/api/items/${id}`);  
        fetchItems();  
    };  

    return (  
        <div>  
            <h1>Item Management</h1>  
            <form onSubmit={handleSubmit}>  
                <input type="text" name="name" value={item.name} onChange={handleChange} placeholder="Item Name" required />  
                <input type="text" name="image" value={item.image} onChange={handleChange} placeholder="Image URL" required />  
                <input type="number" name="price" value={item.price} onChange={handleChange} placeholder="Price" required />  
                <select name="available" value={item.available.toString()} onChange={handleChange}>  
                    <option value="true">Available</option>  
                    <option value="false">Not Available</option>  
                </select>  
                <input type="text" name="category" value={item.category} onChange={handleChange} placeholder="Category ID" required />  
                <button type="submit">{isEditing ? 'Update' : 'Add'} Item</button>  
            </form>  
            <ul>  
                {items.map((item) => (  
                    <li key={item._id}>  
                        {item.name} - ${item.price}  
                        <button onClick={() => handleEdit(item)}>Edit</button>  
                        <button   
                            onClick={() => item._id && handleDelete(item._id)} // Ensure _id is defined  
                            disabled={!item._id} // Optionally disable the button  
                        >  
                            Delete  
                        </button>  
                    </li>  
                ))}  
            </ul>  
        </div>  
    );  
};  

export default ItemManagement;