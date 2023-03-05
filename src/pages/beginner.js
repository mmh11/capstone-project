import React from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

export default function Beginner(){
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
    const motionDivStyle = {
        marginLeft: "200px",
        marginRight: "200px",
        marginTop: "50px"
    }
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={motionDivStyle}
                >
                <h1 style={titleText}>
                    {t("beginner.title")}
                </h1>
            </motion.div>
        </>
    )
}
