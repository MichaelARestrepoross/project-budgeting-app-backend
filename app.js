// DEPENDENCIES
const express = require('express')
const cors = require("cors")

// CONFIGURATION
const app = express();


//MIDDLEWARE PACKAGES
app.use(cors());
//needed for POST and PUT. will parse the string sent from the fetch
app.use(express.json())


// ROUTES
app.get('/', (req, res) => {
    res.send(`welcome to transactions api`)
  })
  