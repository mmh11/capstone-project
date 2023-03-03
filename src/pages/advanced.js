import React, { Component } from 'react'
import Selector from '../components/selector';
import Tut_1 from '../tutorials/tut_1';
import Tut_2 from '../tutorials/tut_2';
import Tut_3 from '../tutorials/tut_3';
import Tut_4 from '../tutorials/tut_4';
import { useSelector } from 'react-redux';

export default function Advanced() {
    const currentTutorial = useSelector((state) => state.counter.value)
    const divSpliterStyle = {
        display:"flex", 
    }
    const divRightsideStyle = {
        marginLeft: "5VW",
        width:"100%"
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
                <div style={divRightsideStyle}>
                    {(currentTutorial===1) && <Tut_1/>}
                    {(currentTutorial===2) && <Tut_2/>}
                    {(currentTutorial===3) && <Tut_3/>}
                    {(currentTutorial===4) && <Tut_4/>}
                </div>
            </div>
        </>
    )
}
