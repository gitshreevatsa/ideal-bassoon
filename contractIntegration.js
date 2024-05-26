const {ethers} = require('ethers');
const abi = require('./abi.json');

const provider = new ethers.JsonRpcProvider('https://rpc.ankr.com/scroll_sepolia_testnet');

const contractAddress = '0xe346E10fE6FaaAb77aE62cC4F12dC54B52bcb888';

const contract = new ethers.Contract(contractAddress, abi, provider);

module.exports = contract;