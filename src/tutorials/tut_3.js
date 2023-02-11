import React from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

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
            </motion.div>
        </>
    )
}