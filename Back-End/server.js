const express = require("express")
const app = express()


const path = require('path')

const menuRouter = require('./routes/menu')

// Middleware setup  
const cors = require('cors')
const expressLayouts = require('express-ejs-layouts')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');
// app.use(expressLayouts);
// app.use(express.static('public'));

// routing
app.use('/api', menuRouter)

// connect to MongoDb
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const { error } = require("console")

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection
db.on('error', () => console.error(error))
db.once('open', () => console.log("Conected to data base"))

//listen 
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});