import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Tut_1() {
    const { t, i18n } = useTranslation();
    const titleText = {
        color: "white",
        fontSize: "3VW",
        marginTop: "5VH",
    };
    return (
        <>
            <div>
                <h1 style={titleText}>
                    {t("tutorial_1.title")}
                </h1>
            </div>
        </>
    )
}
