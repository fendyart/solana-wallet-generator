const solanaWeb3 = require('@solana/web3.js');
const fs = require('fs');
const path = require('path');
const readline = require('readline'); // Import modul readline

// Buat interface untuk membaca input dari konsol
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menghasilkan dompet Solana baru
function generateSolanaWallet() {
  const keypair = solanaWeb3.Keypair.generate();
  return {
    publicKey: keypair.publicKey.toBase58(),
    privateKeyBase64: Buffer.from(keypair.secretKey).toString('base64'),
  };
}

// Fungsi untuk menyimpan dompet ke file
function saveWalletsToFile(wallets, fileName) {
  const filePath = path.join(__dirname, fileName);
  const stream = fs.createWriteStream(filePath);

  wallets.forEach((wallet, index) => {
    stream.write(`--- Wallet #${index + 1} ---\n`);
    stream.write(`Public Address: ${wallet.publicKey}\n`);
    stream.write(`Private Key (Base64): ${wallet.privateKeyBase64}\n\n`);
  });

  stream.end();

  stream.on('finish', () => {
    console.log(`✅ ${wallets.length} wallets successfully saved to ${fileName}`);
    console.log('--- WARNING: This file contains private keys. Store it securely! ---');
    rl.close(); // Tutup interface readline setelah selesai
  });

  stream.on('error', (err) => {
    console.error('Error writing to file:', err);
    rl.close(); // Tutup interface readline jika ada error
  });
}

// Fungsi utama untuk menjalankan program
function main() {
  rl.question('How many wallet to generate: ', (input) => {
    let count = parseInt(input, 10);

    // Jika input tidak valid (bukan angka atau negatif), minta lagi
    if (isNaN(count) || count <= 0) {
      console.log('Input not valid.');
      main(); // Panggil main() lagi untuk meminta input ulang
      return;
    }
    
    console.log(`\nCreating ${count} Solana wallet...\n`);

    const wallets = [];
    for (let i = 0; i < count; i++) {
      wallets.push(generateSolanaWallet());
      // Opsional: tampilkan progress di konsol
      if ((i + 1) % 100 === 0 || (i + 1) === count) {
        process.stdout.write(`\rProgress: ${i + 1}/${count} wallets generated...`);
      }
    }
    process.stdout.write('\n'); // Tambahkan baris baru setelah progress selesai

    const fileName = `solana_wallets_${Date.now()}.txt`;
    saveWalletsToFile(wallets, fileName);
  });
}

// Jalankan fungsi utama
main();
