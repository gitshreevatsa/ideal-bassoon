const { ethers } = require('ethers');
const abi = require('./abi.json');

const provider = new ethers.JsonRpcProvider('https://rpc.ankr.com/scroll_sepolia_testnet');

const key = '6176294b3bbef2974db7bd76ff67a3e96d31d59d803132ce6bf21628d31c27a8'

const wallet = new ethers.Wallet(key, provider)

const contractAddress = '0xa5cFFca73Cd2c4219A3870F81aD01a8979fd44bB';

const contract = new ethers.Contract(contractAddress, abi, wallet);

module.exports = contract;