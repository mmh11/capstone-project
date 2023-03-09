import React, {useState, useContext} from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { QuestionsControl } from '../components/questionsControl.js'
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
    const nextButtonStyle={
        width: "150px",
        height: "50px"
    }
    const centerDivStyle = {
        textAlign: "-webkit-center"
    }
    const [currentQ, setCurrentQ] = useState(0)
    const [currentA, setCurrentA] = useState("")
    const [score, setScore] = useState(0)

    const checkAnswer = () => {
        if (QuestionsControl[currentQ].answer === currentA){
            setScore(score+1)
        }
        setCurrentQ(currentQ+1)
        setCurrentA("")
    }
    const restartQuiz = () => {
        setCurrentQ(0)
        setCurrentA("")
        setScore(0)
    }

    return(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={divStyle}
            >
                {currentQ < 6
                ?<div>
                    <h2 style={subTitleText}>
                        {t(QuestionsControl[currentQ].question)}
                    </h2>
                    <h1>{score}</h1>
                    <div style={centerDivStyle}>
                        <br/>
                        <div style={rowDiv}>
                            <Button 
                                color="secondary" 
                                variant="contained" 
                                style={buttonStyle}
                                onClick={()=>setCurrentA("choice1")}>
                                <h4>{t(QuestionsControl[currentQ].choice1)}</h4>
                            </Button>
                            <Button 
                                color="secondary" 
                                variant="contained"
                                style={buttonStyle}
                                onClick={()=>setCurrentA("choice2")}>
                                <h4>{t(QuestionsControl[currentQ].choice2)}</h4>
                            </Button>
                        </div>
                        <br/><br/><br/>
                        <div style={rowDiv}>
                            <Button 
                                color="secondary" 
                                variant="contained"
                                style={buttonStyle}
                                onClick={()=>setCurrentA("choice3")}>
                                <h4>{t(QuestionsControl[currentQ].choice3)}</h4>
                            </Button>
                            <Button 
                                color="secondary" 
                                variant="contained"
                                style={buttonStyle}
                                onClick={()=>setCurrentA("choice4")}>
                                <h4>{t(QuestionsControl[currentQ].choice4)}</h4>
                            </Button>
                        </div>
                        <br/><br/><br/>
                        <div>
                            <Button
                                color="secondary" 
                                variant="contained"
                                style={nextButtonStyle}
                                onClick={checkAnswer}>
                                <h4>{t("quiz.next")}</h4>
                            </Button>
                        </div>
                    </div>
                </div>
                :<div>
                    <div style={centerDivStyle}>
                        <h2>
                            {t("quiz.finalScore")+score}
                        </h2>
                        <div style={rowDiv}>
                            <Button
                                color="secondary" 
                                variant="contained"
                                style={nextButtonStyle}
                                onClick={restartQuiz}>
                                <h4>{t("quiz.restart")}</h4>
                            </Button>
                            <Button
                                color="secondary" 
                                variant="contained"
                                style={nextButtonStyle}
                                onClick={restartQuiz}>
                                <h4>{t("quiz.checkAllAns")}</h4>
                            </Button>
                        </div>
                    </div>
                </div>}
            
        </motion.div>
    )
}