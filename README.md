# Solana Wallet Generator

This project is a simple Node.js script to generate a large number of Solana wallets and save them to a text file.

## Features

- Generates a specified number of Solana wallets.
- Saves public addresses and private keys (in Base64 format) to a `.txt` file.

## How to Install

1.  Make sure you have [Node.js](https://nodejs.org/) installed.
2.  Clone this repository:
    ```bash
    git clone https://github.com/fendyart/solana-wallet-generator.git
    cd solana-wallet-generator
    ```
3.  Install the project dependencies:
    ```bash
    npm install
    ```

## How to Use

1.  Run the script from your terminal:
    ```bash
    npm start
    ```

The results will be saved in a file named `solana_wallets_timestamp.txt` in the project folder.  
## Output  

--- Wallet #1 ---
Public Address: 2w7i4bd9UJmzYMmnmSMvxnjVvdWVhJLRr3NbjKTeYVtJ  
Private Key (Base64): f7XYzgU9oQbjQ82BAn7o3NKRauIEuS4VqRD4AcWdUiscuKKlerpfzc0s3O+GZQlau3/SMETXu8nt6eKaoWLZdw==

--- Wallet #2 ---
Public Address: EALn8uZQApDshF25p6kno3ERKLJHTYHFq6CKpJcthLWS  
Private Key (Base64): 0vQB8lT1pf1tp+Gq8DYTkZ2cVAsijkY+4zFi8Q8wBdvDjIVHXZGZW0eX5T8HzdWqO7584OqdeLJhEGXBL2ahZw==

--- Wallet #3 ---
Public Address: 5xT6r6sDpZzHhtMSmrhNWRZY1EAme65F4rnrxswPfpoD  
Private Key (Base64): +vncjWIxd6CV7j6X3i/O4NwijHikGTXxsDxbi5F/+9pJozRYkstAMv77tqR6rBU0foZlKwa6eq9aA2Kw8ykeJA==

---

**⚠️ SECURITY WARNING**

The generated file contains private keys. Never share this file with anyone and store it in a secure location.
