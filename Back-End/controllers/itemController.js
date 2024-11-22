const Item = require('../models/Item');

exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find().populate('category'); // Populate the category field  
        res.json(items);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id).populate('category');
        if (!item) return res.status(404).send('Item not found');
        res.json(item);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createItem = async (req, res) => {
    const item = new Item(req.body);
    try {
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.updateItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('category');
        if (!item) return res.status(404).send('Item not found');
        res.json(item);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).send('Item not found');
        res.status(204).send(); // No content  
    } catch (error) {
        res.status(500).send(error);
    }
};