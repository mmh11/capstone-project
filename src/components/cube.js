import React, { Component } from 'react'

export default function Cube(){
    return (
        <mesh>
            <boxBufferGeometry attach="geometry"/>
            <meshLambertMaterial attach="material" color="white"/>
        </mesh>
    )
}