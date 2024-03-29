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

// Add / post a new transaction 
transactions.post("/", (req, res) => {
  // Create a new id. last id number in the tranasction array + 1
  const newId = transactionsArray[transactionsArray.length - 1].id + 1;

  // req.body is an object. Add an id to the object
  req.body.id = newId;
  console.log(req.body);

  //add data to the end of the array
  transactionsArray.push(req.body);

  //return transactions with new object
  res.json({ transactions: transactionsArray });
});

//Updates a transaction with id
transactions.put("/:id", (req, res) => {
  const { id } = req.params;
  const transactionsIndex = transactionsArray.findIndex((t) => t.id === +id);
  if (transactionsIndex > -1) transactionsArray[transactionsIndex] = req.body;
  if(transactionsIndex === -1){
      res.status(404).json({ status:404 , error: `Transaction with the ID ${id} not found` })
    }else{
    // send back all the transactions because I plan to reset the  state
    res.json({ transactions: transactionsArray });
  }
});

// to delete a single Log
transactions.delete("/:id", (req, res) => {
  const { id } = req.params;
  isId = transactionsArray.find((t) => t.id === +id)

  if(isId){
    transactionsArray = transactionsArray.filter((t) => t.id !== +id);
    res.json({ transactions: transactionsArray });
  }else{
    res.status(404).json({ status:404 , error: `Transaction with the ID ${id} to delete not found` });
  }
});

module.exports = transactions