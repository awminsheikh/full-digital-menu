const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const itemController = require('../controllers/itemController');

// Admin routes for managing categories  
router.get('/categories', categoryController.getAllCategories); // View all categories  
router.post('/categories', categoryController.createCategory); // Create a new category  
router.put('/categories/:id', categoryController.updateCategory); // Update an existing category  
router.delete('/categories/:id', categoryController.deleteCategory); // Delete a category  

// Admin routes for managing items  
router.get('/items', itemController.getAllItems); // View all items  
router.post('/items', itemController.createItem); // Create a new item  
router.put('/items/:id', itemController.updateItem); // Update an existing item  
router.delete('/items/:id', itemController.deleteItem); // Delete an item  

module.exports = router;