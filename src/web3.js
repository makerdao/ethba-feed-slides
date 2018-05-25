import Web3 from 'web3'

//const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/_ws'))
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'))
window.web3 = web3

export default web3
