const {ethers} = require('ethers');
const abi = require('./abi.json');

const provider = new ethers.JsonRpcProvider('https://rpc.ankr.com/scroll_sepolia_testnet');

const contractAddress = '0x1800c4735B38e61B3C8Ad10C304016873d79c8BC';

const contract = new ethers.Contract(contractAddress, abi, provider);

module.exports = contract;