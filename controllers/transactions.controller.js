// we need to import express 
const express = require('express')

//we need to create router which is a way to refrence in app.js this file
const transactions = express.Router()

//the data
let transactionsArray = require('../models/transactions.model')

//create get route to return json data to the transaction
transactions.get('/', (req, res) => {
    res.json({ transactions : transactionsArray })
})


//get a single transaction by id
transactions.get('/:id', (req, res) => {
  const { id } = req.params

  isId = transactionsArray.find((t) => t.id === +id)

  if(isId){
    const transaction = transactionsArray.find((t)=> t.id === +id)
    res.json({ transaction })
  }else{
    
    res.status(404).json({ status:404 , error: `Transaction with the ID ${id} not found` });
  }
});


module.exports = transactions