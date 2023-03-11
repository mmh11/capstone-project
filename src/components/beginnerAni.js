import { motion } from "framer-motion";
import React from 'react'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import LanIcon from '@mui/icons-material/Lan';
import DevicesIcon from '@mui/icons-material/Devices';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import FactCheckIcon from '@mui/icons-material/FactCheck';

export function Currency(){
    const iconStyle = {
        color: "#cccccc",
        width: "50%",
        height: "50%",
        padding: "50px 0"
    }
    return(
        <motion.svg
            style={iconStyle}
            animate={{
                scale: [1, 2, 2, 2, 1],
                rotate: [0, 0, 180, 360, 360]
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0.5
            }}
        >
            <CurrencyExchangeIcon/>
        </motion.svg>
    )
}

export function Agri(){
    const iconStyle = {
        color: "#cccccc",
        width: "70%",
        height: "70%",
        padding: "50px 0"
    }
    return(
        <motion.svg
            style={iconStyle}
            animate={{
                x: [50, -150 ,50, -150, 50],
            }}
            transition={{
                duration: 10,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
            }}
        >
            <AgricultureIcon/>
        </motion.svg>
    )
}

export function IoT(){
    const iconStyle = {
        color: "#cccccc",
        width: "70%",
        height: "70%",
        padding: "50px 0"
    }
    return(
        <>
            <motion.svg
                style={iconStyle}
                animate={{
                    scale: [1, 0, 0, 1],
                    x: [125, 125, 125, 125],
                }}
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            >
                <LanIcon/>
            </motion.svg>
            <motion.svg
                style={iconStyle}
                animate={{
                    scale: [0, 1, 1, 0],
                    x: [-125, -125, -125 , -125]
                }}
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            >
                <DevicesIcon/>
            </motion.svg>
        </>
    )
}

export function Healthcare(){
    const iconStyle = {
        color: "#cccccc",
        width: "70%",
        height: "70%",
        padding: "50px 0"
    }
    return(
        <>
            <motion.svg
                style={iconStyle}
                animate={{
                    scale: [1, 0, 0, 0, 1],
                    x: [125, 125, 125, 125],
                    rotateX: [180, 0, 0, 180],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            >
                <LocalHospitalIcon/>
            </motion.svg>
            <motion.svg
                style={iconStyle}
                animate={{
                    scale: [0, 1, 1, 1, 0],
                    x: [-125, -125, -125 , -125],
                    rotateX: [270, 0, 0, 270]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            >
                <ManageSearchIcon/>
            </motion.svg>
        </>
    )
}

export function Other(){
    const iconStyle = {
        color: "#cccccc",
        width: "70%",
        height: "70%",
        padding: "50px 0"
    }
    return(
        <>
            <motion.svg
                style={iconStyle}
                animate={{
                    scale: [1, 1, 1, 1],
                    x: [90, 90, 90, 90],
                    rotate: [0, 10, -10, 10, 0]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            >
                <FireExtinguisherIcon/>
            </motion.svg>
            <motion.svg
                style={iconStyle}
                animate={{
                    scale: [0.2, 0.5, 0.5, 0.2],
                    x: [-90, -70, -70 , -90],
                    y: [60, 40, 40 , 60]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            >
                <FactCheckIcon/>
            </motion.svg>
        </>
    )
}