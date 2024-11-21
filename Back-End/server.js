const express = require('express')
const app = express()

// Set view engine and views directory  
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layouts/layout'); // Correctly specifies the layout

// Middleware setup  
app.use(expressLayouts);

// connect to mongoDb
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { // Use DATABASE_URL  
    useNewUrlParser: true,  // Optional: Manage deprecation warnings  
    useUnifiedTopology: true // Optional: Use the new Server Discover and Monitoring engine  
});
const db = mongoose.connection
db.on('error', (error) => {
    console.error(error)
})
db.once('open', () => {
    console.log('conected to Mongoose')
})

// routing
const indexRouter = require('./routes/index')
const menuRouter = require('./routes/menu')

app.use('/', indexRouter)
app.use('/api', menuRouter)

// Start server  
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});