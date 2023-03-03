import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { powSimulate } from '../components/crytoFunctions';

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
                <FormControl fullWidth>
                <InputLabel>{t("tutorial_2.header_2")}</InputLabel>
                    <Select
                        value={diff}
                        label="difficulty"
                        onChange={(e)=>setDiff(e.target.value)}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                    </Select>
                </FormControl>
                <Button onClick={console.log(powSimulate(diff,false))}>adw</Button>
                <br/>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_3.paragraph_3_3")}
                </h3>
            </motion.div>
        </>
    )
}