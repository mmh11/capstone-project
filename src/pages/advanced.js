import React, { Component } from 'react'
import Selector from '../components/selector';

export default function Advanced() {
    const divSpliterStyle = {
        display:"flex", 
        justifyContent: "space-between",
    }
    return (
        <>
            <div style={divSpliterStyle}>
                <div>
                    <Selector/>
                </div>
                <div style={{width:"80%"}}>
                    <h1>test</h1>
                </div>
            </div>
        </>
    )
}
