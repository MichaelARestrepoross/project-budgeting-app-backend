// we need to import express 
const express = require('express')

//we need to create router which is a way to refrence in app.js this file
const transactions = express.Router()

//the data
let transactionsArray = require('../models/transactions.model')

//creeate get route to return json data to the client
transactions.get('/', (req, res) => {
    res.json({ transactions : transactionsArray })
})
  