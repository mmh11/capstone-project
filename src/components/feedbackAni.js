import { motion } from "framer-motion";
import React from 'react'

export default function FeedbackAni(props){
    if (props.score > 2){
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
                            stroke: "#b135ff",
                            strokeWidth: 10,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        d="M 130,100 Q 100,100 70,100"
                        animate={{
                            d: [
                                "M 130,100 Q 100,100 70,100",
                                "M 130,100 Q 100,130 70,100",
                                "M 130,150 Q 100,180 70,150",
                                "M 130,100 Q 100,130 70,100",
                                "M 130,150 Q 100,180 70,150",
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
                            stroke: "#b135ff",
                            strokeWidth: 10,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        d="M 60,40 Q 60,40 60,40"
                        animate={{
                            // M(left head position horizontal),... Q(middle position horizontal),... (right head position horizontal),...
                            d: [
                                "M 60,40 Q 60,40 60,40",
                                "M 40,60 Q 60,40 80,60",
                                "M 40,100 Q 60,80 80,100",
                                "M 40,60 Q 60,40 80,60",
                                "M 40,100 Q 60,80 80,100",
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
                            stroke: "#b135ff",
                            strokeWidth: 10,
                            strokeLinecap: "round",
                            fill: "transparent",
                        }}
                        d="M 140,40 Q 140,40 140,40"
                        animate={{
                            // M(left head position horizontal),... Q(middle position horizontal),... (right head position horizontal),...
                            d: [
                                "M 140,40 Q 140,40 140,40",
                                "M 120,60 Q 140,40 160,60",
                                "M 120,100 Q 140,80 160,100",
                                "M 120,60 Q 140,40 160,60",
                                "M 120,100 Q 140,80 160,100",
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
    } else return (
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
                        strokeWidth: 10,
                        strokeLinecap: "round",
                        fill: "transparent",
                    }}
                    d="M 130,100 Q 100,100 70,100"
                    animate={{
                        d: [
                            "M 130,100 Q 100,100 70,100",
                            "M 160,100 Q 130,75 100,100",
                            "M 100,100 Q 70,75 40,100",
                            "M 160,100 Q 130,75 100,100",
                            "M 100,100 Q 70,75 40,100",
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
                        strokeWidth: 10,
                        strokeLinecap: "round",
                        fill: "transparent",
                    }}
                    d="M 60,40 Q 60,40 60,40"
                    animate={{
                        // M(left head position horizontal),... Q(middle position horizontal),... (right head position horizontal),...
                        d: [
                            "M 60,40 Q 60,40 60,40",
                            "M 80,30 Q 120,40 80,50",
                            "M 20,30 Q 60,40 20,50",
                            "M 80,30 Q 120,40 80,50",
                            "M 20,30 Q 60,40 20,50",
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
                        strokeWidth: 10,
                        strokeLinecap: "round",
                        fill: "transparent",
                    }}
                    d="M 140,40 Q 140,40 140,40"
                    animate={{
                        // M(left head position horizontal),... Q(middle position horizontal),... (right head position horizontal),...
                        d: [
                            "M 140,40 Q 140,40 140,40",
                            "M 180,30 Q 140,40 180,50",
                            "M 120,30 Q 80,40 120,50",
                            "M 180,30 Q 140,40 180,50",
                            "M 120,30 Q 80,40 120,50",
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
