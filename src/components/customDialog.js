import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTranslation } from 'react-i18next';
import { QuestionsControl } from '../components/questionsControl.js'

export default function CustomDialog(){
    const { t, i18n } = useTranslation();
    const nextButtonStyle={
        width: "150px",
        height: "50px"
    }
    const purpleTextStyle={
        color: "#b135ff"
    }
    const [open, setOpen] = useState(false);
    const openDialog = () => {
        setOpen(!open);
    };
    const getQ = (index) => {
        const pointingQ = QuestionsControl[index].question
        return(t(pointingQ))
    }
    const getA = (index) => {
        if (QuestionsControl[index].answer === "choice1"){return(t(QuestionsControl[index].choice1))}
        else if (QuestionsControl[index].answer === "choice2"){return(t(QuestionsControl[index].choice2))}
        else if (QuestionsControl[index].answer === "choice3"){return(t(QuestionsControl[index].choice3))}
        else if (QuestionsControl[index].answer === "choice4"){return(t(QuestionsControl[index].choice4))}
        else {return}
    }
    var allQAstructure = []
    for(let i=0;i<=QuestionsControl.length-1;i++){
        allQAstructure.push(
            <div>
                <h4>{getQ(i)}</h4>
                <h4 style={purpleTextStyle}>{t("quiz.ans")}{getA(i)}</h4>
                <br/>
            </div>
        )
    }
    return (
        <div>
            <Button 
                color="secondary" 
                variant="contained"
                style={nextButtonStyle}
                onClick={openDialog}>
                <h4>{t("quiz.checkAllAns")}</h4>
            </Button>
            <Dialog
                open={open}
                onClose={openDialog}
            >
                <DialogTitle>
                {t("quiz.dialogTitle")}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {allQAstructure}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button 
                    style={purpleTextStyle}
                    onClick={openDialog}>
                    {t("quiz.dialogClose")}
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}