import React from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LanIcon from '@mui/icons-material/Lan';
import DevicesIcon from '@mui/icons-material/Devices';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import FactCheckIcon from '@mui/icons-material/FactCheck';

export default function Beginner(){
    const { t, i18n } = useTranslation();
    const titleText = {
        color: "white",
        fontSize: "3VW",
        marginTop: "5VH",
    };
    const subTitleText = {
        color: "white",
    };
    const paragraphTextNoMargin = {
        textAlign: "justify",
        color: "#cccccc",
        lineHeight: 2
    };
    const motionDivStyle = {
        marginLeft: "200px",
        marginRight: "200px",
        marginTop: "50px"
    }
    const iconStyle = {
        color: "#cccccc",
        width: "50%",
        height: "50%",
        padding: "50px 0"
    }
    const parentDivStyle = {
        display: "flex"
    }
    const childTextDivStyle = {
        width: "70%"
    }
    const childSVGDivStyle = {
        width: "30%",
        textAlign: "center"
    }
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={motionDivStyle}
                >
                <h1 style={titleText}>
                    {t("beginner.title")}
                </h1>
                <h2 style={subTitleText}>
                    {t("beginner.subTitle_1")}
                </h2>
                <h3 style={paragraphTextNoMargin}>
                    {t("beginner.paragraph_1_1")}
                </h3>
                <br/>
                <h3 style={paragraphTextNoMargin}>
                    {t("beginner.paragraph_1_2")}
                </h3>
                <br/>
                <h3 style={paragraphTextNoMargin}>
                    {t("beginner.paragraph_1_3")}
                </h3>

                <br/><br/><br/>

                <h2 style={subTitleText}>
                    {t("beginner.subTitle_2")}
                </h2>
                <h3 style={paragraphTextNoMargin}>
                    {t("beginner.paragraph_2_1")}
                </h3>
                <br/>
                <h3 style={paragraphTextNoMargin}>
                    {t("beginner.paragraph_2_2")}
                </h3>

                <br/><br/><br/>

                <h2 style={subTitleText}>
                    {t("beginner.subTitle_3")}
                </h2>
                <div style={parentDivStyle}>
                    <div style={childTextDivStyle}>
                        <h3 style={paragraphTextNoMargin}>
                            {t("beginner.paragraph_3_1")}
                        </h3>
                        <h3 style={paragraphTextNoMargin}>
                            {t("beginner.paragraph_3_1_1")}
                        </h3>
                    </div>
                    <div style={childSVGDivStyle}>
                        <CurrencyBitcoinIcon style={iconStyle}/>
                    </div>
                </div>

                <br/><br/><br/>

                <div style={parentDivStyle}>
                    <div style={childSVGDivStyle}>
                        <AgricultureIcon style={iconStyle}/>
                    </div>
                    <div style={childTextDivStyle}>
                        <h3 style={paragraphTextNoMargin}>
                            {t("beginner.paragraph_3_2")}
                        </h3>
                        <h3 style={paragraphTextNoMargin}>
                            {t("beginner.paragraph_3_2_1")}
                        </h3>
                    </div>
                </div>

                <br/><br/><br/>

                <div style={parentDivStyle}>
                    <div style={childTextDivStyle}>
                        <h3 style={paragraphTextNoMargin}>
                            {t("beginner.paragraph_3_3")}
                        </h3>
                        <h3 style={paragraphTextNoMargin}>
                            {t("beginner.paragraph_3_3_1")}
                        </h3>
                    </div>
                    <div style={childSVGDivStyle}>
                        <LanIcon style={iconStyle}/>
                    </div>
                </div>
                
                <br/><br/><br/>

                <div style={parentDivStyle}>
                    <div style={childSVGDivStyle}>
                        <LocalHospitalIcon style={iconStyle}/>
                    </div>
                    <div style={childTextDivStyle}>
                        <h3 style={paragraphTextNoMargin}>
                            {t("beginner.paragraph_3_4")}
                        </h3>
                        <h3 style={paragraphTextNoMargin}>
                            {t("beginner.paragraph_3_4_1")}
                        </h3>
                    </div>
                </div>
                
                <br/><br/><br/>

                <div style={parentDivStyle}>
                    <div style={childTextDivStyle}>
                        <h3 style={paragraphTextNoMargin}>
                            {t("beginner.paragraph_3_5")}
                        </h3>
                        <h3 style={paragraphTextNoMargin}>
                            {t("beginner.paragraph_3_5_1")}
                        </h3>
                        <h3 style={paragraphTextNoMargin}>
                            {t("beginner.paragraph_3_5_2")}
                        </h3>
                    </div>
                    <div style={childSVGDivStyle}>
                        <FireExtinguisherIcon style={iconStyle}/>
                    </div>
                </div>

                <br/><br/><br/>
            </motion.div>
        </>
    )
}
