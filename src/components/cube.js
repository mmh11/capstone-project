import React, { useTransition } from 'react';
import test1 from '../materials/images/1.jpg'
import test2 from '../materials/images/2.jpg'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

export default function Cube(){
    const loader1 = useLoader(TextureLoader, test1)
    const loader2 = useLoader(TextureLoader, test2)

    return (
        <mesh>
            <boxBufferGeometry attach="geometry"/>
            <meshLambertMaterial attach="material-0" color="0xffffff" />
            <meshLambertMaterial attach="material-1" color="0xffffff" />
            <meshLambertMaterial attach="material-2" color="0xffffff" map={loader2}/>
            <meshLambertMaterial attach="material-3" color="0xffffff" map={loader1}/>
            <meshLambertMaterial attach="material-4" color="0xffffff" map={loader2}/>
            <meshLambertMaterial attach="material-5" color="0xffffff" map={loader1}/>
        </mesh>
    )
}