import React from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import Paper from '@mui/material/Paper';
import DragStructure from "../components/dragStructure.js"

export default function Tut_2() {
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
    const paperStyle = {
        backgroundColor: "#262626",
        marginBottom: "5VH",
        marginLeft: "1VW",
        width: "1000px",
        height: "500px"
    };
    const paragraphTextNoMargin = {
        textAlign: "justify",
        color: "#cccccc",
        marginRight: "20%",
        lineHeight: 2
    };
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                <h1 style={titleText}>
                    {t("tutorial_2.title")}
                </h1>
                <h2 style={subTitleText}>
                    {t("tutorial_2.subTitle_1")}
                </h2>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_2.paragraph_1_1")}
                </h3>
                <br/>
                <h2 style={subTitleText}>
                    {t("tutorial_2.subTitle_3")}
                </h2>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_2.paragraph_3_1")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_2.paragraph_3_2")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_2.paragraph_3_3")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_2.paragraph_3_4")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_2.paragraph_3_5")}
                </h3>
                <br/>
                <h2 style={subTitleText}>
                    {t("tutorial_2.subTitle_2")}
                </h2>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_2.paragraph_2_1")}
                </h3>
                <br/>
                <div>
                    <Paper style={paperStyle} elevation={24} square={false}>
                        <DragStructure/>
                    </Paper>
                </div>
                <br/>
                <br/>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_2.paragraph_2_2")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_2.paragraph_2_3")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_2.paragraph_2_3_1")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_2.paragraph_2_4")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_2.paragraph_2_4_1")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_2.paragraph_2_5")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_2.paragraph_2_5_1")}
                </h3>
            </motion.div>
        </>
    )
}