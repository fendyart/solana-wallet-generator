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

1.  Open the `index.js` file.
2.  Change the `main(10)` value on the last line to the number of wallets you want to generate (e.g., `main(50)`).
3.  Run the script from your terminal:
    ```bash
    npm start
    ```

The results will be saved in a file named `solana_wallets_timestamp.txt` in the project folder.

---

**⚠️ SECURITY WARNING**

The generated file contains private keys. Never share this file with anyone and store it in a secure location.
