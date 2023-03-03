import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { motion, useDragControls } from "framer-motion"

export default function DragStructure() {
    const { t, i18n } = useTranslation();
    const dragComponentStyle = {
        width: 200,
        height: 60,
        borderRadius: 15,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        cursor: "grab"
    }
    const dragTransitionStyle = {
        bounceStiffness: 500, 
        bounceDamping: 100
    }
    const correctTextStyle = {
        color: "green",
        textAlign: "center"
    }
    const incorrectTextStyle = {
        color: "red",
        textAlign: "center"
    }
    const [Y_1, setY_1] = useState(0)
    const [Y_2, setY_2] = useState(300)
    const [Y_3, setY_3] = useState(600)
    const [Y_4, setY_4] = useState(900)
    const [Y_5, setY_5] = useState(1200)
    const [Y_6, setY_6] = useState(1200)
    const [checkCorrect, setCheckCorrect] = useState(false)
    const checkY = (yValue_1, yValue_2, yValue_3, yValue_4, yValue_5, yValue_6)=> {
        setCheckCorrect(yValue_1<1160 && yValue_2<1160 && yValue_3<1160 && yValue_4<1160 && yValue_5<1160 && yValue_6<1160)
    }
    return (
        <>
            <motion.div
                style={dragComponentStyle}
                drag
                dragConstraints={{
                    top: 0,
                    right: 800,
                    bottom: 440,
                    left: 0,
                }}
                dragTransition={dragTransitionStyle}
                dragElastic={0.2}
                dragMomentum={false}
                whileTap={{ cursor: "grabbing" }}
                onDrag={(e) => {
                    console.log(e.pageY)
                    setY_1(Math.round(e.pageY))
                    checkY(Y_1,Y_2,Y_3,Y_4,Y_5,Y_6)
                }}
            >
                <h3 style={
                    i18n.language === "EN" 
                    ? {
                    textAlign: "center",
                    position: "absolute",
                    transform: "translate(135%, 0%)"
                    } : {
                    textAlign: "center",
                    position: "absolute",
                    transform: "translate(135%, 0%)"
                    }}>
                    {t("tutorial_2.header_1")}
                </h3>
            </motion.div>
            <motion.div
                style={dragComponentStyle}
                drag
                dragConstraints={{
                    top: -60,
                    right: 800,
                    bottom: 380,
                    left: 0,
                }}
                dragTransition={dragTransitionStyle}
                dragElastic={0.2}
                dragMomentum={false}
                whileTap={{ cursor: "grabbing" }}
                onDrag={(e) => {
                    console.log(e.pageY)
                    setY_2(Math.round(e.pageY))
                    checkY(Y_1,Y_2,Y_3,Y_4,Y_5,Y_6)
                }}
            >
                <h3 style={
                    i18n.language === "EN" 
                    ? {
                    textAlign: "center",
                    position: "absolute",
                    transform: "translate(80%, 0%)"
                    } : {
                    textAlign: "center",
                    position: "absolute",
                    transform: "translate(220%, 0%)"
                    }}>
                    {t("tutorial_2.header_2")}
                </h3>
            </motion.div>
            <motion.div
                style={dragComponentStyle}
                drag
                dragConstraints={{
                    top: -120,
                    right: 800,
                    bottom: 320,
                    left: 0,
                }}
                dragTransition={dragTransitionStyle}
                dragElastic={0.2}
                dragMomentum={false}
                whileTap={{ cursor: "grabbing" }}
                onDrag={(e) => {
                    setY_3(Math.round(e.pageY))
                    checkY(Y_1,Y_2,Y_3,Y_4,Y_5,Y_6)
                }}
            >
                <h3 style={
                    i18n.language === "EN" 
                    ? {
                    textAlign: "center",
                    position: "absolute",
                    transform: "translate(110%, 0%)"
                    } : {
                    textAlign: "center",
                    position: "absolute",
                    transform: "translate(220%, 0%)"
                    }}>
                    {t("tutorial_2.header_3")}
                </h3>
            </motion.div>
            <motion.div
                style={dragComponentStyle}
                drag
                dragConstraints={{
                    top: -180,
                    right: 800,
                    bottom: 260,
                    left: 0,
                }}
                dragTransition={dragTransitionStyle}
                dragElastic={0.2}
                dragMomentum={false}
                whileTap={{ cursor: "grabbing" }}
                onDrag={(e) => {
                    setY_4(Math.round(e.pageY))
                    checkY(Y_1,Y_2,Y_3,Y_4,Y_5,Y_6)
                }}
            >
                <h3 style={
                    i18n.language === "EN" 
                    ? {
                    textAlign: "center",
                    position: "absolute",
                    transform: "translate(20%, 0%)"
                    } : {
                    textAlign: "center",
                    position: "absolute",
                    transform: "translate(85%, 0%)"
                    }}>
                    {t("tutorial_2.header_4")}
                </h3>
            </motion.div>
            <motion.div
                style={dragComponentStyle}
                drag
                dragConstraints={{
                    top: -240,
                    right: 800,
                    bottom: 200,
                    left: 0,
                }}
                dragTransition={dragTransitionStyle}
                dragElastic={0.2}
                dragMomentum={false}
                whileTap={{ cursor: "grabbing" }}
                onDrag={(e) => {
                    setY_5(Math.round(e.pageY))
                    checkY(Y_1,Y_2,Y_3,Y_4,Y_5,Y_6)
                }}
            >
                <h3 style={
                    i18n.language === "EN" 
                    ? {
                    textAlign: "center",
                    position: "absolute",
                    transform: "translate(60%, 0%)"
                    } : {
                    textAlign: "center",
                    position: "absolute",
                    transform: "translate(85%, 0%)"
                    }}>
                    {t("tutorial_2.header_5")}
                </h3>
            </motion.div>
            <motion.div
                style={dragComponentStyle}
                drag
                dragConstraints={{
                    top: -300,
                    right: 800,
                    bottom: 140,
                    left: 0,
                }}
                dragTransition={dragTransitionStyle}
                dragElastic={0.2}
                dragMomentum={false}
                whileTap={{ cursor: "grabbing" }}
                onDrag={(e) => {
                    setY_6(Math.round(e.pageY))
                    checkY(Y_1,Y_2,Y_3,Y_4,Y_5,Y_6)
                }}
            >
                <h3 style={
                    i18n.language === "EN" 
                    ? {
                    textAlign: "center",
                    position: "absolute",
                    transform: "translate(10%, 0%)"
                    } : {
                    textAlign: "center",
                    position: "absolute",
                    transform: "translate(85%, 0%)"
                    }}>
                    {t("tutorial_2.header_6")}
                </h3>
            </motion.div>
            {checkCorrect 
                ? <h1 style={correctTextStyle}>{t("tutorial_2.correct")}</h1>
                : <h1 style={incorrectTextStyle}>{t("tutorial_2.incorrect")}</h1>
            }
        </>
    )
}