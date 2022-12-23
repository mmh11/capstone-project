import React, { Component } from 'react'
import { Typography, Grid } from '@mui/material';
import { withTranslation } from 'react-i18next';
import Cube from '../components/cube';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useBox } from "@react-three/cannon";


class Home extends Component {
    render() {
        const { t } = this.props;
        const whiteText = {
            color: "white",
        };
        const titleText = {
            color: "#b135ff",
            fontSize: "7VW",
            margin: 0
        };
        const typographyStyle = {
            marginLeft: "7VW",
            marginTop: "40VH",
        };
        const typographyStyle2 = {
            marginTop: "20VH",
        };
        const flexGrid = {
            display: "flex"
        };
        const canvasStyle = {
            width: "50VW",
            height: "50VH"
        }
        const divStyle={
            display:"flex", 
            justifyContent: "space-between"
        }
        return (
            <>
                <div style={divStyle}>
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
                        <Canvas style={canvasStyle} camera={{ fov: 35, zoom: 1.3, near: 1, far: 1000, position:[2.5,2,2.3] }}>
                            <OrbitControls enableZoom={false} autoRotate={true}/>
                            <PerspectiveCamera/>
                            <ambientLight intensity={0.5}/>
                            <spotLight position={[5,10,15]} angle={0.5}/>
                            <Cube/>
                        </Canvas>
                    </Typography>
                </div>
                <div>
                    <Typography></Typography>
                </div>
            </>
        )
    }
}

export default withTranslation()(Home);