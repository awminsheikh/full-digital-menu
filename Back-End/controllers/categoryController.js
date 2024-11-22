const Category = require('../module/Category');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
        console.log("getting all categories")
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) return res.status(404).send('Category not found');
        res.json(category);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createCategory = async (req, res) => {
    const category = new Category(req.body);
    try {
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) return res.status(404).send('Category not found');
        res.json(category);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) return res.status(404).send('Category not found');
        res.status(204).send(); // No content  
    } catch (error) {
        res.status(500).send(error);
    }
};