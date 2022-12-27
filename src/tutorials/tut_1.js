import React from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

export default function Tut_1() {
    const { t, i18n } = useTranslation();
    const titleText = {
        color: "white",
        fontSize: "3VW",
        marginTop: "5VH",
    };
    const subTitleText = {
        color: "white",
    }
    const paragraphText = {
        color: "#cccccc",
        marginBottom: "5VH"
    }
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
                <h2 style={subTitleText}>
                    {t("tutorial_1.subTitle_3")}
                </h2>
                <h3 style={paragraphText}>
                    {t("tutorial_1.paragraph_3_1")}
                </h3>
            </motion.div>
        </>
    )
}
