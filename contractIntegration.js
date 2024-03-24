const {ethers} = require('ethers');
const abi = require('./abi.json');

const provider = new ethers.JsonRpcProvider('https://rpc2.sepolia.org');

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const contract = new ethers.Contract(contractAddress, abi, provider);

module.exports = contract;