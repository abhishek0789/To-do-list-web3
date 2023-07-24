const express = require("express");
const ABI = require("./ABI.json");
const {Web3, Web3Eth} = require("web3");

const app = express();
const web3 = new Web3("https://soft-empty-arm.ethereum-sepolia.discover.quiknode.pro/b205f49344d6bf8a35ce9c3964b28c6c66d125cf/")
const contractAddress = "0x899A872ef9b202De98C4c68168E6539B4B2430D6" 

const contract = new web3.eth.Contract(ABI,contractAddress)

const viewTask = async()=>{
   const task = await contract.methods.viewTask(2).call()
   console.log(task)
}

viewTask()


