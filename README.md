# Bank Transactions Management Application Backend

## Overview

Bank Transactions Management Application Backend is the server-side component of the Bank Transactions Management application. It provides RESTful APIs to manage transactions, enabling users to perform CRUD (Create, Read, Update, Delete) operations on transaction data. Built with Express.js and Node.js, the backend ensures seamless communication between the client-side application and the data.

## FrontEnd Link


[Bank Transactions Management Frontend Link](https://github.com/MichaelARestrepoross/project-budgeting-app-frontend)


## Endpoints

### Get All Transactions

- **URL**: `/api/transactions`
- **Method**: GET
- **Description**: Retrieves all transactions stored in the database.
- **Response**: JSON array containing all transactions.

### Get Transaction by ID

- **URL**: `/api/transactions/:id`
- **Method**: GET
- **Description**: Retrieves a single transaction by its ID.
- **Response**: JSON object representing the transaction.

### Add New Transaction

- **URL**: `/api/transactions`
- **Method**: POST
- **Description**: Adds a new transaction to the database.
- **Request Body**: JSON object representing the new transaction.
- **Response**: JSON array containing all transactions, including the newly added one.

### Update Transaction

- **URL**: `/api/transactions/:id`
- **Method**: PUT
- **Description**: Updates an existing transaction with the specified ID.
- **Request Body**: JSON object representing the updated transaction.
- **Response**: JSON array containing all transactions, including the updated one.

### Delete Transaction

- **URL**: `/api/transactions/:id`
- **Method**: DELETE
- **Description**: Deletes a transaction with the specified ID from the database.
- **Response**: JSON array containing all transactions after deletion.

## Installation and Setup

1. **Clone the Repository**

        git clone <repository-url>
         cd safeplate-backend


2. **Install Dependencies**
                
        npm install

3. **Create a .env file in the root directory and add the following configuration:**

        PORT=8889

    This sets the server port to 8889.

 4. **Start the Server**
Run in terminal
        npm start
The server will start running at http://localhost:8889.

## Testing
You can use tools like Postman or curl to test the backend APIs. Perform CRUD operations to ensure the proper functioning of the endpoints.

## Error Handling
The backend handles errors gracefully and provides appropriate error messages and status codes for different scenarios with thep of axios collecting tthe error object in teh front end.