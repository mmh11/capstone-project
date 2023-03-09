import { motion } from "framer-motion";
import React from 'react'

export default function FeedbackAni(){
    return(
        <div>
            <svg
                style={{
                    width: 200,
                    height: 200,
                    background: "transparent",
                    borderRadius: 30,
                }}
            >
                <motion.path
                    style={{
                        stroke: "#cccccc",
                        strokeWidth: 15,
                        strokeLinecap: "round",
                        fill: "transparent",
                    }}
                    d="M 130,100 Q 100,100 70,100"
                    animate={{
                        d: [
                            "M 130,100 Q 100,100 70,100",
                            "M 150,100 Q 120,75 90,100",
                            "M 110,100 Q 80,75 50,100",
                            "M 150,100 Q 120,75 90,100",
                            "M 110,100 Q 80,75 50,100",
                            "M 130,100 Q 100,100 70,100",
                        ],
                    }}
                    transition={{
                        repeat: Infinity,
                        ease: "easeInOut",
                        duration: 6,
                        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
                    }}
                />
                <motion.path
                    style={{
                        stroke: "#cccccc",
                        strokeWidth: 20,
                        strokeLinecap: "round",
                        fill: "transparent",
                    }}
                    d="M 60,40 Q 60,40 60,40"
                    animate={{
                        // M(left head position horizontal),... Q(middle position horizontal),... (right head position horizontal),...
                        d: [
                            "M 60,40 Q 60,40 60,40",
                            "M 80,40 Q 80,40 80,40",
                            "M 40,40 Q 40,40 40,40",
                            "M 80,40 Q 80,40 80,40",
                            "M 40,40 Q 40,40 40,40",
                            "M 60,40 Q 60,40 60,40",
                        ],
                    }}
                    transition={{
                        repeat: Infinity,
                        ease: "easeInOut",
                        duration: 6,
                        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
                    }}
                />
                <motion.path
                    style={{
                        stroke: "#cccccc",
                        strokeWidth: 20,
                        strokeLinecap: "round",
                        fill: "transparent",
                    }}
                    d="M 140,40 Q 140,40 140,40"
                    animate={{
                        // M(left head position horizontal),... Q(middle position horizontal),... (right head position horizontal),...
                        d: [
                            "M 140,40 Q 140,40 140,40",
                            "M 160,40 Q 160,40 160,40",
                            "M 120,40 Q 120,40 120,40",
                            "M 160,40 Q 160,40 160,40",
                            "M 120,40 Q 120,40 120,40",
                            "M 140,40 Q 140,40 140,40",
                        ],
                    }}
                    transition={{
                        repeat: Infinity,
                        ease: "easeInOut",
                        duration: 6,
                        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
                    }}
                />
            </svg>
        </div>
    )
}
