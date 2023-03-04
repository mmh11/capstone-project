import React from "react";

export function Hash(value){
    const SHA256 = require("crypto-js/sha256");
    return(SHA256(value).toString())
}

export function RandomHex(){
    const randomBytes = require('randombytes')
    const resultString = randomBytes(64).toString('hex');
    // const matchedHead = "0".repeat(diffculty)
    // var resultString = ""
    // while (flag){
    //     const randomBytes = require('randombytes')
    //     resultString = randomBytes(64).toString('hex');
    //     if (resultString.slice(0,diffculty) === matchedHead){
    //         return
    //     }
    // }
    return(resultString)
}