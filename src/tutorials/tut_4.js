import React from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

export default function Tut_4() {
    const { t, i18n } = useTranslation();
    const titleText = {
        color: "white",
        fontSize: "3VW",
        marginTop: "5VH",
    };
    const subTitleText = {
        color: "white",
    }
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
                    {t("tutorial_4.title")}
                </h1>
                <h2 style={subTitleText}>
                    {t("tutorial_4.subTitle_1")}
                </h2>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_1")}
                </h3>
                <br/>
                <h2 style={subTitleText}>
                    {t("tutorial_4.subTitle_2")}
                </h2>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_2")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_2_1")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_2_2")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_2_3")}
                </h3>
                <br/>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_2_4")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_2_5")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_2_5_1")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_2_6")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_2_6_1")}
                </h3>
                <br/>
                <h2 style={subTitleText}>
                    {t("tutorial_4.subTitle_3")}
                </h2>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_3")}
                </h3>
                <br/>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_3_1")}
                </h3>
            </motion.div>
        </>
    )
}