import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { Button, Select, MenuItem, FormControl, InputLabel, Switch } from '@mui/material';
import { randomHex } from '../components/crytoFunctions';
import CustomSelect from '../components/customSelect';

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
    const [diff, setDiff] = useState(1)
    const [randomResult, setRandomResult] = useState("")
    const powSimulate = () => {
        while(true){
            const result = randomHex()
            const matchedHead = "0".repeat(diff)
            setRandomResult(result)
            if(result.slice(0,diff) === matchedHead){
                return
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
                <Button 
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                        powSimulate()
                    }}>
                    {t("labels.run")}
                </Button>
                <FormControl fullWidth>
                    <InputLabel>{t("tutorial_2.header_2")}</InputLabel>
                    <CustomSelect
                        value={diff}
                        onChange={(e)=>{
                            setDiff(e.target.value)
                        }}
                    />
                </FormControl>
                <br/>
                <h3 style={paragraphTextNoMargin}>
                    {(randomResult)}
                    {t("tutorial_3.paragraph_3_3")}
                </h3>
            </motion.div>
        </>
    )
}