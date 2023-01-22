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
        width: "900px",
        height: "500px"
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
                <Paper style={paperStyle} elevation={24} square={false}>
                <div>
                    <DragStructure/>
                </div>
                </Paper>
            </motion.div>
        </>
    )
}