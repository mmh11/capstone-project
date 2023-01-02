import React from "react";

export default function Hash(value){
    const SHA256 = require("crypto-js/sha256");
    return(SHA256(value).toString())
}