// DEPENDENCIES
const express = require('express')
const cors = require("cors")
//import the controller in order to the tell the application to use the specific resource's controller
const transactionsController = require('./controllers/transactions.controller')

// CONFIGURATION
const app = express();


//MIDDLEWARE PACKAGES
app.use(cors());
//needed for POST and PUT. will parse the string sent from the fetch
app.use(express.json())

app.use("/api/transactions", transactionsController);

// ROUTES
app.get('/', (req, res) => {
    res.send(`welcome to transactions api`)
})

// 404 PAGE
app.get('*', (req, res) => {
  res.status(404).json({ error: 'Log not found' });
});

// EXPORT
module.exports = app