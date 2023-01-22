import React from "react";
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
    let elem = document.querySelector('div');
    let rect = elem.getBoundingClientRect();
    console.log(rect)
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
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
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
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
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
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
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
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
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
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
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
        </>
    )
}