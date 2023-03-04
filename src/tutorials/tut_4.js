import React, {useState} from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import trans1EN from "../materials/images/trans1EN.png"
import trans1TC from "../materials/images/trans1TC.png"
import trans2EN from "../materials/images/trans2EN.png"
import trans2TC from "../materials/images/trans2TC.png"
import merkleTree from "../materials/images/merkleTree.png"
import CustomTextField from '../components/customTextField';

export default function Tut_4() {
    const { t, i18n } = useTranslation();
    const titleText = {
        color: "white",
        fontSize: "3VW",
        marginTop: "5VH",
    };
    const subTitleText = {
        color: "white",
    }
    const paragraphTextNoMargin = {
        textAlign: "justify",
        color: "#cccccc",
        marginRight: "20%",
        lineHeight: 2
    };
    const flexDivStyle = {
        display: "flex",
        color: "#cccccc"
    }
    const merkleTreeDivStyle = {
        backgroundImage: `url(${merkleTree})`,
        display: "inline-flex",
        height: "230px",
        width: "920px",
    }
    const trans1DivStyle = i18n.language === "EN" 
    ? {
        backgroundImage: `url(${trans1EN})`,
        display: "inline-flex",
        height: "362px",
        width: "722px",
    }
    : {
        backgroundImage: `url(${trans1TC})`,
        display: "inline-flex",
        height: "362px",
        width: "722px",
    }
    const trans2DivStyle = i18n.language === "EN" 
    ? {
        backgroundImage: `url(${trans2EN})`,
        display: "inline-flex",
        height: "362px",
        width: "722px",
    }
    : {
        backgroundImage: `url(${trans2TC})`,
        display: "inline-flex",
        height: "362px",
        width: "722px",
    }
    const trans1text1Style = {
        position: "absolute",
        color: "#cccccc",
        marginLeft: "160px",
        marginTop: "195px"
    }
    const trans1text2Style = {
        position: "absolute",
        color: "#cccccc",
        marginLeft: "605px",
        marginTop: "66px"
    }
    const trans1text3Style = {
        position: "absolute",
        color: "#cccccc",
        marginLeft: "605px",
        marginTop: "305px"
    }

    const trans2text1Style = {
        position: "absolute",
        color: "#cccccc",
        marginLeft: "160px",
        marginTop: "66px"
    }
    const trans2text2Style = {
        position: "absolute",
        color: "#cccccc",
        marginLeft: "160px",
        marginTop: "306px"
    }
    const trans2text3Style = {
        position: "absolute",
        color: "#cccccc",
        marginLeft: "605px",
        marginTop: "196px"
    }
    const validationStyle = {
        color: "red"
    }
    const [trans1Text1, setTrans1Text1] = useState(0)
    const [trans1Text2, setTrans1Text2] = useState(0)
    const [trans2Text1, setTrans2Text1] = useState(0)
    const [trans2Text2, setTrans2Text2] = useState(0)
    const [valid, setValid] = useState(true)
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                >
                <h1 style={titleText}>
                    {t("tutorial_4.title")}
                </h1>
                <h2 style={subTitleText}>
                    {t("tutorial_4.subTitle_1")}
                </h2>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_1")}
                </h3>
                <br/>
                <h2 style={subTitleText}>
                    {t("tutorial_4.subTitle_2")}
                </h2>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_2")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_2_1")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_2_2")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_2_3")}
                </h3>
                <br/>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_2_4")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_2_5")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_2_5_1")}
                </h3>

                <br/>
                <div style={flexDivStyle}>
                    <h3>
                        {t("tutorial_4.trans1Assume_1")+"\u00a0"}
                    </h3>
                    <CustomTextField
                        onChange = {
                            (e) => {
                                if (e.length === 0){
                                    setTrans1Text1(0)
                                    if (trans1Text2 !== 0){
                                        setValid(false)
                                    }
                                } else {
                                    setTrans1Text1(parseInt(e)) 
                                    if (parseInt(e) - trans1Text2 < 0){
                                        setValid(false)
                                    } else {
                                        setValid(true)
                                    }
                                }
                            }
                        }
                    />
                    <h3>
                        {"\u00a0"+t("tutorial_4.dollars")}
                    </h3>
                </div>
                <div style={flexDivStyle}>
                    <h3>
                        {t("tutorial_4.trans1Assume_2")+"\u00a0"}
                    </h3>
                    <CustomTextField 
                        onChange = {
                            (e) => {
                                if (e.length === 0){
                                    setTrans1Text2(0)
                                    if (trans1Text1 - parseInt(e) < 0){
                                        setValid(false)
                                    } else {
                                        setValid(true)
                                    }
                                } else {
                                    setTrans1Text2(parseInt(e)) 
                                    if (trans1Text1 - parseInt(e) < 0){
                                        setValid(false)
                                    } else {
                                        setValid(true)
                                    }
                                }
                            }
                        }
                    />
                    <h3>
                        {"\u00a0"+t("tutorial_4.dollars")}
                    </h3>
                </div>

                <br/>
                <div style={trans1DivStyle}>
                    <h3 style={trans1text1Style}>
                        {trans1Text1}
                    </h3>
                    <h3 style={trans1text2Style}>
                        {trans1Text2}
                    </h3>
                    <h3 style={trans1text3Style}>
                        {parseInt(trans1Text1)-parseInt(trans1Text2)}
                    </h3>
                </div>
                {!valid && 
                    <h3 style={validationStyle}>
                        {t("tutorial_4.valid1")}
                    </h3>
                }
                <br/><br/><br/><br/><br/><br/>

                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_2_6")}
                </h3>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_2_6_1")}
                </h3>

                <br/>
                <div style={flexDivStyle}>
                    <h3>
                        {t("tutorial_4.trans1Assume_1")+"\u00a0"}
                    </h3>
                    <CustomTextField
                        onChange = {
                            (e) => {
                                if (e.length === 0){
                                    setTrans2Text1(0)
                                } else {
                                    setTrans2Text1(parseInt(e))
                                }
                            }
                        }
                    />
                    <h3>
                        {"\u00a0"+t("tutorial_4.dollars")}
                    </h3>
                </div>
                <div style={flexDivStyle}>
                    <h3>
                        {t("tutorial_4.trans1Assume_3")+"\u00a0"}
                    </h3>
                    <CustomTextField
                        onChange = {
                            (e) => {
                                if (e.length === 0){
                                    setTrans2Text2(0)
                                } else {
                                    setTrans2Text2(parseInt(e)) 
                                }
                            }
                        }
                    />
                    <h3>
                        {"\u00a0"+t("tutorial_4.dollars")}
                    </h3>
                </div>

                <div style={trans2DivStyle}>
                    <h3 style={trans2text1Style}>
                        {trans2Text1}
                    </h3>
                    <h3 style={trans2text2Style}>
                        {trans2Text2}
                    </h3>
                    <h3 style={trans2text3Style}>
                        {parseInt(trans2Text1)+parseInt(trans2Text2)}
                    </h3>
                </div>
                <br/><br/><br/><br/><br/><br/>

                <h2 style={subTitleText}>
                    {t("tutorial_4.subTitle_3")}
                </h2>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_3")}
                </h3>
                <br/>
                <h3 style={paragraphTextNoMargin}>
                    {t("tutorial_4.paragraph_3_1")}
                </h3>
                <div style={merkleTreeDivStyle}>

                </div>
                <br/><br/><br/><br/><br/><br/>
            </motion.div>
        </>
    )
}