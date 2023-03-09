import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { Button, Paper, FormControl } from '@mui/material';
import { Hash, RandomHex } from '../components/crytoFunctions';
import CustomSelect from '../components/customSelect';
import CircularProgress from '@mui/material/CircularProgress';

export default function Tut_3() {
    const { t, i18n } = useTranslation();
    const titleText = {
        color: "white",
        fontSize: "3VW",
        marginTop: "5VH",
    };
    const subTitleText = {
        color: "white",
    };
    const paragraphTextNoMargin = {
        textAlign: "justify",
        color: "#cccccc",
        marginRight: "20%",
        lineHeight: 2
    };
    const paragraphTextNoHeight = {
        color: "#cccccc",
        marginRight: "20%"
    };
    const divStyle = {
        display: "flex",
        alignItems: "center"
    };
    const paperStyle = {
        backgroundColor: "#262626",
        marginBottom: "5VH",
        marginLeft: "1VW",
        width: "900px",
        height: "250px"
    };
    const paperDivStyle = {
        marginLeft: "50px",
    };
    const [diff, setDiff] = useState(1)
    const [randomResult, setRandomResult] = useState("")
    const [tookTime, setTookTime] = useState(0)
    const [running, setRunning] = useState(false)
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const powSimulate = async() => {
        var startTime = performance.now()
        setRunning(true)
        while(true){
            const result = Hash(RandomHex())
            const matchedHead = "0".repeat(diff)
            setRandomResult(result)
            await sleep(1)
            if(result.slice(0,diff) === matchedHead){
                setRunning(false)
                var endTime = performance.now()
                setTookTime((endTime - startTime).toFixed(1))
                break
            }
        }
    }
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                <h1 style={titleText}>
                    {t("tutorial_3.title")}
                </h1>
                <h2 style={subTitleText}>
                    {t("tutorial_3.subTitle_1")}
                </h2>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_3.paragraph_1_1")}
                </h3>
                <br/>
                <h2 style={subTitleText}>
                    {t("tutorial_3.subTitle_2")}
                </h2>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_3.paragraph_2_1")}
                </h3>
                <br/>
                <h2 style={subTitleText}>
                    {t("tutorial_3.subTitle_3")}
                </h2>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_3.paragraph_3_1")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_3.paragraph_3_2")}
                </h3>
                <br/>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_3.select")}
                </h3>
                <h4 style={paragraphTextNoMargin}>
                    {t("tutorial_3.notice")}
                </h4>
                <Paper style={paperStyle} elevation={24} square={false}>
                    <br/>
                    <br/>
                    <div style={paperDivStyle}>
                        <div style={divStyle}>
                            <FormControl 
                                sx={{ m: 1, minWidth: 120 }}
                                >
                                <CustomSelect
                                    disabled = {running}
                                    value={diff}
                                    onChange={(e)=>{
                                        setDiff(e.target.value)
                                    }}
                                />
                            </FormControl>
                            {!running
                                ?
                                    <Button 
                                        variant="contained"
                                        color="secondary"
                                        style={{maxHeight:"40px"}}
                                        onClick={powSimulate}>
                                        {t("labels.run")}
                                    </Button>
                                :
                                    <CircularProgress 
                                        color="secondary" 
                                        style={{marginLeft:"10px"}}/>
                            }
                        </div>
                        <h3 style={paragraphTextNoHeight}>
                            {t("tutorial_3.time")+tookTime+t("tutorial_3.millisecond")}
                        </h3>
                        <div style={divStyle}>
                            <h3 style={paragraphTextNoHeight}>
                                {t("tutorial_3.result")}
                                {(randomResult)}
                            </h3>
                        </div>
                    </div>
                </Paper>
                <br/>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_3.paragraph_3_3")}
                </h3>
            </motion.div>
        </>
    )
}