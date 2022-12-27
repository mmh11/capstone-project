import React from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

export default function Tut_5() {
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
                    {t("tutorial_5.title")}
                </h1>
            </motion.div>
        </>
    )
}