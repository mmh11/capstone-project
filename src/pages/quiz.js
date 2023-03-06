import React, {useState} from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { Questions } from '../components/questionsControl.js'
import Button from '@mui/material/Button';

export default function Test(){
    const { t, i18n } = useTranslation();
    const subTitleText = {
        color: "white",
        textAlign: "center"
    };
    const divStyle = {
        marginTop: "100px",
        marginLeft: "100px",
        marginRight: "100px"
    }
    const rowDiv = {
        justifyContent: "space-evenly",
        display: "flex",
        width: "800px"
    }
    const buttonStyle = {
        width: "275px",
        height: "100px"
    }
    const centerDivStyle = {
        textAlign: "-webkit-center"
    }
    const [currentQ, setCurrentQ] = useState(1)

    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={divStyle}
            >
            <h2 style={subTitleText}>
                {t(Questions[currentQ].question)}
            </h2>
            <div style={centerDivStyle}>
                <br/>
                <div style={rowDiv}>
                    <Button 
                        color="secondary" 
                        variant="contained" 
                        style={buttonStyle}>
                        <h4>{t(Questions[currentQ].choice1)}</h4>
                    </Button>
                    <Button 
                        color="secondary" 
                        variant="contained"
                        style={buttonStyle}>
                        <h4>{t(Questions[currentQ].choice2)}</h4>
                    </Button>
                </div>
                <br/><br/><br/>
                <div style={rowDiv}>
                    <Button 
                        color="secondary" 
                        variant="contained"
                        style={buttonStyle}>
                        <h4>{t(Questions[currentQ].choice3)}</h4>
                    </Button>
                    <Button 
                        color="secondary" 
                        variant="contained"
                        style={buttonStyle}>
                        <h4>{t(Questions[currentQ].choice4)}</h4>
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}