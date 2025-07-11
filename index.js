// File: index.js

const solanaWeb3 = require('@solana/web3.js');
const fs = require('fs');
const path = require('path');

/**
 * Function to generate a new Solana wallet.
 * @returns {object} An object containing the public key and the private key in Base64 format.
 */
function generateSolanaWallet() {
  const keypair = solanaWeb3.Keypair.generate();
  return {
    publicKey: keypair.publicKey.toBase58(),
    privateKeyBase64: Buffer.from(keypair.secretKey).toString('base64'),
  };
}

/**
 * Function to save the generated wallets to a file.
 * @param {Array<object>} wallets - An array of wallet objects.
 * @param {string} fileName - The name of the file to save the wallets to.
 */
function saveWalletsToFile(wallets, fileName) {
  const filePath = path.join(__dirname, fileName);
  const stream = fs.createWriteStream(filePath);

  wallets.forEach((wallet, index) => {
    stream.write(`--- Wallet #${index + 1} ---\n`);
    stream.write(`Public Address: ${wallet.publicKey}\n`);
    stream.write(`Private Key (Base64): ${wallet.privateKeyBase64}\n\n`);
  });

  stream.end();
  console.log(`✅ ${wallets.length} wallets successfully saved to ${fileName}`);
  console.log('--- WARNING: This file contains private keys. Store it securely! ---');
}

/**
 * Main function to run the program.
 * @param {number} count - The number of wallets to generate.
 */
function main(count) {
  if (typeof count !== 'number' || count <= 0) {
    console.error('Please provide a valid number of wallets (a positive number).');
    return;
  }
  
  const wallets = [];
  for (let i = 0; i < count; i++) {
    wallets.push(generateSolanaWallet());
  }

  const fileName = `solana_wallets_${Date.now()}.txt`;
  saveWalletsToFile(wallets, fileName);
}

// Run the main function with 10 wallets as an example.
// You can change this number as needed.
main(10);
