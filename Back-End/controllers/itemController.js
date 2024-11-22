const Item = require('../module/Item');

// Get all items  
exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find().populate('category'); // Populate category information  
        res.json(items);
        console.log("gettin all items")
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get an item by ID  
exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id).populate('category');
        if (!item) return res.status(404).send('Item not found');
        res.json(item);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get items by category ID  
exports.getItemsByCategory = async (req, res) => {
    try {
        const items = await Item.find({ category: req.params.categoryId }).populate('category');
        res.json(items);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Create a new item  
exports.createItem = async (req, res) => {
    const newItem = new Item(req.body);
    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Update an item  
exports.updateItem = async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).send('Item not found');
        res.json(updatedItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete an item  
exports.deleteItem = async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).send('Item not found');
        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
};