import React, { useTransition } from 'react';
import test1 from '../materials/images/1.jpg'
import test2 from '../materials/images/2.jpg'
import blockSructurePicture from '../materials/images/blockStructure.jpg'
import titlePicture from '../materials/images/title.jpg'
import titlePicture2 from '../materials/images/title2.jpg'
import guidePicture from '../materials/images/guide.jpg'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

export default function Cube(){
    const blockSructureLoader = useLoader(TextureLoader, blockSructurePicture)
    const titleLoader = useLoader(TextureLoader, titlePicture)
    const title2Loader = useLoader(TextureLoader, titlePicture2)
    const guideLoader = useLoader(TextureLoader, guidePicture)

    return (
        <mesh>
            <boxBufferGeometry attach="geometry"/>
            <meshLambertMaterial attach="material-0" color="0xffffff" map={blockSructureLoader}/>
            <meshLambertMaterial attach="material-1" color="0xffffff" map={guideLoader}/>
            <meshLambertMaterial attach="material-2" color="0xffffff" map={title2Loader}/>
            <meshLambertMaterial attach="material-3" color="0xffffff" map={title2Loader}/>
            <meshLambertMaterial attach="material-4" color="0xffffff" map={titleLoader}/>
            <meshLambertMaterial attach="material-5" color="0xffffff" map={titleLoader}/>
        </mesh>
    )
}