import React from 'react'
import { useTranslation } from 'react-i18next';
import Map from "../materials/images/map.png"
import { Button, Paper } from '@mui/material';

export default function BeginnerMap(){
    const { t, i18n } = useTranslation();
    const mapStyle = {
        backgroundImage: `url(${Map})`,
        height: "443px",
        width: "803px",
    }
    const paperStyle = {
        backgroundColor: "#262626",
        width: "700px",
        height: "443px"
    };
    const muiButtonSX = {
        "&:hover": { 
            backgroundColor: "#9e2828"
        },
        backgroundColor: "#a14242",
        border: "3px #9e2828 solid",
        borderRadius: "0px",
        color:"#cccccc",
        position: "absolute",
        fontWeight: "bold"
    };
    const buttonA = {
        marginLeft: "40px",
        marginTop: "3px",
        width: "175px",
        height: "437px"
    }
    const buttonB = {
        marginLeft: "360px",
        marginTop: "3px",
        width: "125px",
        height: "225px"
    }
    const buttonC = {
        marginLeft: "550px",
        marginTop: "3px",
        width: "125px",
        height: "125px"
    }
    const buttonD = {
        marginLeft: "540px",
        marginTop: "182px",
        width: "70px",
        height: "60px"
    }
    const buttonE = {
        marginLeft: "612px",
        marginTop: "182px",
        width: "70px",
        height: "60px"
    }
    const buttonF = {
        marginLeft: "360px",
        marginTop: "353px",
        width: "125px",
        height: "87px"
    }
    const buttonG = {
        marginLeft: "550px",
        marginTop: "353px",
        width: "125px",
        height: "87px"
    }
    const recordDivStyle={
        marginLeft: "40px",
        marginRight: "40px",
        color: "#cccccc"
    }
    const recordList = ["a","b","c"]
    return(
        <>
            <div style={mapStyle}>
                <Button sx={muiButtonSX} style={buttonA} disableRipple>{t("beginner.map_b1")}</Button>
                <Button sx={muiButtonSX} style={buttonB} disableRipple>{t("beginner.map_b2")}</Button>
                <Button sx={muiButtonSX} style={buttonC} disableRipple>{t("beginner.map_b3")}</Button>
                <Button sx={muiButtonSX} style={buttonD} disableRipple>{t("beginner.map_b4")}</Button>
                <Button sx={muiButtonSX} style={buttonE} disableRipple>{t("beginner.map_b5")}</Button>
                <Button sx={muiButtonSX} style={buttonF} disableRipple>{t("beginner.map_b6")}</Button>
                <Button sx={muiButtonSX} style={buttonG} disableRipple>{t("beginner.map_b7")}</Button>
            </div>
            <paperStyle style={paperStyle}>
                <h1 style={recordDivStyle}>{recordList}</h1>
            </paperStyle>
        </>
    )
}