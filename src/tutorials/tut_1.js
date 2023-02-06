import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import Paper from '@mui/material/Paper';
import CustomTextField from '../components/customTextField';
import Hash from '../components/crytoFunctions';
import blockAndChain from '../materials/images/blockAndChain.png'

export default function Tut_1() {
    const { t, i18n } = useTranslation();
    const titleText = {
        color: "white",
        fontSize: "3VW",
        marginTop: "5VH",
    };
    const subTitleText = {
        color: "white",
    };
    const paragraphText = {
        color: "#cccccc",
        marginBottom: "5VH"
    };
    const paragraphTextNoMargin = {
        textAlign: "justify",
        color: "#cccccc",
        marginRight: "20%",
        lineHeight: 2
    };
    const purpleText = {
        color: "#b135ff"
    };
    const textfieldStyle = {
        width: "400px",
        marginTop: "50px"
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
    }
    const imgDivStyle = {
        marginLeft: "5%",
        marginTop: "5%"
    }
    const [textField_1, setTextField_1] = useState('')
    //Bitcoin and Cryptocurrency Technologies : A Comprehensive Introduction
    //Introduction to Blockchain Gupta, Amit.  Chemical Engineering Progress; New York Vol. 116, Iss. 9,  (Sep 2020): 37-44.
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                <h1 style={titleText}>
                    {t("tutorial_1.title")}
                </h1>
                <h2 style={subTitleText}>
                    {t("tutorial_1.subTitle_1")}
                </h2>
                <h3 style={paragraphText}>
                    {t("tutorial_1.paragraph_1_1")}
                </h3>
                <h2 style={subTitleText}>
                    {t("tutorial_1.subTitle_2")}
                </h2>
                <h3 style={paragraphText}>
                    {t("tutorial_1.paragraph_2_1")}
                </h3>
                <Paper style={paperStyle} elevation={24} square={false}>
                    <div style={paperDivStyle}>
                        <CustomTextField 
                            onChange = {
                                (e) => {setTextField_1(Hash(e))}
                            }
                            style={textfieldStyle}
                            />
                        <h3 style={paragraphText}>
                            <p style={purpleText}>
                                {t("tutorial_1.hash_value")}
                            </p>
                            {textField_1}
                        </h3>
                    </div>
                </Paper>
                <h2 style={subTitleText}>
                    {t("tutorial_1.paragraph_2_2")}
                </h2>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_1.paragraph_2_3")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_1.paragraph_2_4")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_1.paragraph_2_4_1")}
                </h3>
                <br/>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_1.paragraph_2_5")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_1.paragraph_2_5_1")}
                </h3>
                <br/>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_1.paragraph_2_6")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_1.paragraph_2_6_1")}
                </h3>
                <br/>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_1.paragraph_2_7")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_1.paragraph_2_7_1")}
                </h3>
                <br/>
                <h2 style={subTitleText}>
                    {t("tutorial_1.subTitle_3")}
                </h2>
                <h3 style={paragraphText}>
                    {t("tutorial_1.paragraph_3_1")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_1.paragraph_3_2")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_1.paragraph_3_2_1")}
                </h3>
                <div style={imgDivStyle}>
                    <img src={blockAndChain} />
                </div>
                <br/>
                <br/>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_1.paragraph_3_3")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_1.paragraph_3_3_1")}
                </h3>
            </motion.div>
        </>
    )
}
