const mongoose = require('mongoose');  

const itemSchema = new mongoose.Schema({  
    name: {  
        type: String,  
        required: true  
    },  
    image: {  
        type: String,  
        required: true  
    },  
    price: {  
        type: Number,  
        required: true  
    },  
    available: {  
        type: Boolean,  
        required: true  
    },  
    category: {  
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'Category',  
        required: true  
    },  
    secondPrice: {  
        type: Number,  
        required: false  
    },  
    offPercent: {  
        type: Number,  
        required: false  
    }  
}, { timestamps: true });  

const Item = mongoose.model('Item', itemSchema);  

module.exports = Item;