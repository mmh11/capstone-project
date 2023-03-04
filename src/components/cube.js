import React, { useTransition } from 'react';
import blockSructurePictureEN from '../materials/images/blockStructureEN.jpg'
import blockSructurePictureTC from '../materials/images/blockStructureTC.jpg'
import titlePicture from '../materials/images/title.jpg'
import titlePicture2 from '../materials/images/title2.jpg'
import guidePictureEN from '../materials/images/guideEN.jpg'
import guidePictureTC from '../materials/images/guideTC.jpg'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { useTranslation } from 'react-i18next';

export default function Cube(){
    const { t, i18n } = useTranslation();
    const blockSructureLoaderEN = useLoader(TextureLoader, blockSructurePictureEN)
    const blockSructureLoaderTC = useLoader(TextureLoader, blockSructurePictureTC)
    const titleLoader = useLoader(TextureLoader, titlePicture)
    const title2Loader = useLoader(TextureLoader, titlePicture2)
    const guideLoaderEN = useLoader(TextureLoader, guidePictureEN)
    const guideLoaderTC = useLoader(TextureLoader, guidePictureTC)

    return (
        <mesh>
            <boxBufferGeometry attach="geometry"/>
            {i18n.language === "EN" 
                ? <meshLambertMaterial attach="material-0" color="0xffffff" map={blockSructureLoaderEN}/>
                : <meshLambertMaterial attach="material-0" color="0xffffff" map={blockSructureLoaderTC}/>
            }
            {i18n.language === "EN" 
                ? <meshLambertMaterial attach="material-1" color="0xffffff" map={guideLoaderTC}/>
                : <meshLambertMaterial attach="material-1" color="0xffffff" map={guideLoaderEN}/>
            }
            <meshLambertMaterial attach="material-2" color="0xffffff" map={title2Loader}/>
            <meshLambertMaterial attach="material-3" color="0xffffff" map={title2Loader}/>
            <meshLambertMaterial attach="material-4" color="0xffffff" map={titleLoader}/>
            <meshLambertMaterial attach="material-5" color="0xffffff" map={titleLoader}/>
        </mesh>
    )
}