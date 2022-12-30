import React, { useState, useEffect, Component } from 'react'
import { Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Cube from '../components/cube';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { MotionValue, motion, useScroll, useSpring, useTransform } from "framer-motion";
import Card from "../components/cards";

export default function Home() {
    const { t } = useTranslation();
    const whiteText = {
        color: "white",
    };
    const titleText = {
        color: "#b135ff",
        fontSize: "7VW",
        margin: 0
    };
    const secondTitleText = {
        color: "#b135ff",
        fontSize: "4VW",
        margin: 0
    };
    const typographyStyle = {
        marginLeft: "7VW",
        marginTop: "40VH",
    };
    const typographyStyle2 = {
        marginTop: "20VH",
        opacity:1,
    };
    const typographyStyle3 = {
        marginTop: "40VH",
        marginBottom: "20VH",
        textAlign: "center"
    };
    const flexGrid = {
        display: "flex"
    };
    const canvasStyle = {
        width: "50VW",
        height: "50VH"
    }
    const cameraStyle = {
        fov: 35, 
        zoom: 1.3,
        near: 1, 
        far: 1000, 
        position: [2.5,2,2.3]
    }
    const divStyle={
        display:"flex", 
        justifyContent: "space-between"
    }
    return (
        <>
            <motion.circle
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
/>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1 }}
                style={divStyle}
                >
                <Typography style={typographyStyle}>
                    <Grid>
                        <h2 style={whiteText}>{t("home.intro_1")}</h2>
                    </Grid>
                    <Grid style={flexGrid}>
                        <h1 style={titleText}>{t("home.intro_2")}</h1>
                    </Grid>
                    <Grid>
                        <h2 style={whiteText}>{t("home.intro_3")}</h2>
                    </Grid>
                </Typography>
                <Typography style={typographyStyle2}>
                    <Canvas style={canvasStyle} camera={cameraStyle}>
                        <OrbitControls enableZoom={false} autoRotate={true}/>
                        <PerspectiveCamera/>
                        <ambientLight intensity={0.5}/>
                        <spotLight position={[5,10,15]} angle={0.5}/>
                        <Cube/>
                    </Canvas>
                </Typography>
            </motion.div>
            <div>
                <Typography style={typographyStyle3}>
                    <h1 style={secondTitleText}>{t("home.intro_4")}</h1>
                    <Grid>
                        <Card/>
                    </Grid>
                </Typography>
            </div>
        </>
    )
}
