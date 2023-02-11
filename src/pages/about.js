import React, { Component } from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

export default function About() {
    const { t, i18n } = useTranslation();
    const bodyDiv = {
        marginLeft: "15VW",
        marginRight: "15VW"
    };
    const titleText = {
        color: "white",
        fontSize: "1.5VW",
        marginTop: "10VH",
    };
    const referenceText= {
        color: 'white',
        fontSize: "1VW"
    };
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                <div style={bodyDiv}>
                    <h1 style={titleText}>
                        {t("about.title")}
                    </h1>
                    <h3 style={referenceText}>
                        {t("about.reference_1")}
                    </h3>
                    <h3 style={referenceText}>
                        {t("about.reference_2")}
                    </h3>
                    <h3 style={referenceText}>
                        {t("about.reference_3")}
                    </h3>
                    <h1 style={titleText}>
                        {t("about.about")}
                    </h1>
                </div>
            </motion.div>
        </>
    )
    
}
