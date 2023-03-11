import React, { Component } from 'react'
import Selector from '../components/selector';
import Tut1 from '../tutorials/tut_1';
import Tut2 from '../tutorials/tut_2';
import Tut3 from '../tutorials/tut_3';
import Tut4 from '../tutorials/tut_4';
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
                    {(currentTutorial===1) && <Tut1/>}
                    {(currentTutorial===2) && <Tut2/>}
                    {(currentTutorial===3) && <Tut3/>}
                    {(currentTutorial===4) && <Tut4/>}
                </div>
            </div>
        </>
    )
}
