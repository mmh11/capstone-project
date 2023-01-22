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
    const [X_1, setX_1] = useState(0)
    const [X_2, setX_2] = useState(0)
    const [X_3, setX_3] = useState(0)
    const [Y_1, setY_1] = useState(0)
    const [Y_2, setY_2] = useState(0)
    const [Y_3, setY_3] = useState(0)
    return (
        <>
            <motion.div
                style={dragComponentStyle}
                drag
                dragConstraints={{
                    top: 0,
                    right: 700,
                    bottom: 440,
                    left: 0,
                }}
                dragTransition={dragTransitionStyle}
                dragElastic={0.2}
                dragMomentum={false}
                whileTap={{ cursor: "grabbing" }}
                onDrag={(e) => {
                    setX_1(Math.round(e.x))
                    setY_1(Math.round(e.y))
                }}
            >
                <h3 style={{
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
                    right: 700,
                    bottom: 380,
                    left: 0,
                }}
                dragTransition={dragTransitionStyle}
                dragElastic={0.2}
                whileTap={{ cursor: "grabbing" }}
                onDrag={(e) => {
                    setX_2(Math.round(e.x))
                    setY_2(Math.round(e.y))
                }}
            >
                <h3 style={{
                    textAlign: "center",
                    position: "absolute",
                    transform: "translate(80%, 0%)"
                }}>
                    {t("tutorial_2.header_2")}
                </h3>
            </motion.div>
            <motion.div
                style={dragComponentStyle}
                drag
                dragConstraints={{
                    top: -120,
                    right: 700,
                    bottom: 320,
                    left: 0,
                }}
                dragTransition={dragTransitionStyle}
                dragElastic={0.2}
                whileTap={{ cursor: "grabbing" }}
                onDrag={(e) => {
                    setX_3(Math.round(e.x))
                    setY_3(Math.round(e.y))
                }}
            >
                <h3 style={{
                    textAlign: "center",
                    position: "absolute",
                    transform: "translate(110%, 0%)"
                }}>
                    {t("tutorial_2.header_3")}
                </h3>
            </motion.div>
            <motion.div
                style={dragComponentStyle}
                drag
                dragConstraints={{
                    top: -180,
                    right: 700,
                    bottom: 260,
                    left: 0,
                }}
                dragTransition={dragTransitionStyle}
                dragElastic={0.2}
                whileTap={{ cursor: "grabbing" }}
            >
                <h3 style={{
                    textAlign: "center",
                    position: "absolute",
                    transform: "translate(50%, 0%)"
                }}>
                    {t("tutorial_2.header_4")}
                </h3>
            </motion.div>
            <motion.div
                style={dragComponentStyle}
                drag
                dragConstraints={{
                    top: -240,
                    right: 700,
                    bottom: 200,
                    left: 0,
                }}
                dragTransition={dragTransitionStyle}
                dragElastic={0.2}
                whileTap={{ cursor: "grabbing" }}
            >
                <h3 style={{
                    textAlign: "center",
                    position: "absolute",
                    transform: "translate(70%, 0%)"
                }}>
                    {t("tutorial_2.header_5")}
                </h3>
            </motion.div>
            <p style={{color:"white"}}>{X_1}{"||"}{Y_1}</p>
            <p style={{color:"white"}}>{X_2}{"||"}{Y_2}</p>
            <p style={{color:"white"}}>{X_3}{"||"}{Y_3}</p>
        </>
    )
}