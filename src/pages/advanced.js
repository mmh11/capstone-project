import React, { Component } from 'react'
import Selector from '../components/selector';

export default function Advanced() {
    const divSpliterStyle = {
        display:"flex", 
        justifyContent: "space-between",
    }
    const whiteText = {
        color: "white"
    }
    return (
        <>
            <div style={divSpliterStyle}>
                <div>
                    <Selector/>
                </div>
                <div style={{width:"80%"}}>
                    <h1 style={whiteText}>test</h1>
                </div>
            </div>
        </>
    )
}
