import React, {useState,useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import Map from "../materials/images/map.png"
import { Button } from '@mui/material';
import moment from 'moment'
import { Hash } from '../components/crytoFunctions';

export default function BeginnerMap(){
    const { t, i18n } = useTranslation();
    const mapStyle = {
        backgroundImage: `url(${Map})`,
        minHeight: "443px",
        minWidth: "803px",
    }
    const paperStyle = {
        backgroundColor: "#262626",
        width: "700px",
        height: "443px",
        overflowY: 'scroll',
    };
    const muiButtonSX = {
        "&:hover": { 
            backgroundColor: "#ffe675"
        },
        backgroundColor: "#fff8db",
        border: "3px #ffe675 solid",
        borderRadius: "0px",
        color:"#333333",
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
        color: "#cccccc",
        fontSize: "18px"
    }
    //{"\x00a"+t("beginner.checked")}{t("beginner.date")}{moment(today).format('llll')}
    const today = new Date()
    const [recordList, setRecordList] = useState([{id:0, value:"First Block", hash:Hash("First Block"), prevHash:"N/A"}])
    
    const addRecord = (building) => {
        let data = building+" "+t("beginner.checked")+t("beginner.date")+moment(today).format('llll')
        setRecordList([...recordList, {
            id: recordList.length,
            value: data,
            prevHash: recordList[recordList.length-1].hash,
            hash: Hash(data+recordList[recordList.length-1].hash)
        }])
    }
    
    return(
        <>
            <div style={mapStyle}>
                <Button sx={muiButtonSX} style={buttonA} disableRipple onClick={()=>{addRecord(t("beginner.map_b1"))}}>{t("beginner.map_b1")}</Button>
                <Button sx={muiButtonSX} style={buttonB} disableRipple onClick={()=>{addRecord(t("beginner.map_b2"))}}>{t("beginner.map_b2")}</Button>
                <Button sx={muiButtonSX} style={buttonC} disableRipple onClick={()=>{addRecord(t("beginner.map_b3"))}}>{t("beginner.map_b3")}</Button>
                <Button sx={muiButtonSX} style={buttonD} disableRipple onClick={()=>{addRecord(t("beginner.map_b4"))}}>{t("beginner.map_b4")}</Button>
                <Button sx={muiButtonSX} style={buttonE} disableRipple onClick={()=>{addRecord(t("beginner.map_b5"))}}>{t("beginner.map_b5")}</Button>
                <Button sx={muiButtonSX} style={buttonF} disableRipple onClick={()=>{addRecord(t("beginner.map_b6"))}}>{t("beginner.map_b6")}</Button>
                <Button sx={muiButtonSX} style={buttonG} disableRipple onClick={()=>{addRecord(t("beginner.map_b7"))}}>{t("beginner.map_b7")}</Button>
            </div>
            <div style={paperStyle} >
                <h1 style={recordDivStyle}>
                    {recordList.map(item => (
                        <div>
                            <p key={item.id}>{`==============================${item.id}===============================`}</p>
                            <p key={item.id}>{t("beginner.blockPrevHash")}{item.prevHash}</p>
                            <p key={item.id}>{t("beginner.blockData")}{item.value}</p>
                            <p key={item.id}>{t("beginner.blockHash")}{item.hash}</p>
                            <p key={item.id}>{`==============================================================`}</p>
                            <br/>
                        </div>
                    ))}
                </h1>
            </div>
        </>
    )
}