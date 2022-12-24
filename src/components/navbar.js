import React, { Component, useEffect } from 'react'
import Logo from "../materials/images/Logo.png"
import { AppBar, Button, Toolbar, Grid} from '@mui/material'
import {Link} from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import costomUseScroll from './costomUseScroll';

class Navbar extends Component {
  render() {
    const { i18n, t } = this.props;
    const appbarStyle = {
        background: "transparent", 
        boxShadow: "none"
    };
    const buttonStyle = {
        maxWidth:"300px",
        marginLeft:"5VW",
    };
    const muiButtonSX = {
        "&:hover": {backgroundColor: "transparent",textDecoration: "underline" }
    };
    const textButtonStyle = {
        maxWidth:"450px",
        marginRight:"50px",
        marginTop:"30px",
        color: "#b135ff",
    };
    const imageStyle ={
        width: "100%", 
        height: "100%",
    };
    const gridStyle = {
        whiteSpace: "nowrap"
    }
    return (
        <AppBar position="fixed" style={appbarStyle}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Button component={Link} to="/" sx={muiButtonSX} disableRipple style={buttonStyle}>
                    <img src={Logo} alt="" style={imageStyle}></img>
                </Button>
                <Grid style={gridStyle}>
                    <Button component={Link} to="/" sx={muiButtonSX} disableRipple style={textButtonStyle}>
                        <h3>{t("labels.home")}</h3>
                    </Button>
                    <Button component={Link} to="/about" sx={muiButtonSX} disableRipple style={textButtonStyle}>
                        <h3>{t("labels.about")}</h3>
                    </Button>
                    {i18n.language === "TC" && <Button 
                        disableRipple
                        sx={muiButtonSX} 
                        style={textButtonStyle}
                        onClick={() => i18n.changeLanguage('EN')}
                        >
                        <h3>{t("labels.english")}</h3>
                    </Button>}
                    {i18n.language === "EN" && <Button
                        disableRipple
                        sx={muiButtonSX} 
                        style={textButtonStyle}
                        onClick={() => i18n.changeLanguage('TC')}
                        >
                        <h3>{t("labels.chinese")}</h3>
                    </Button>}
                </Grid>
            </Toolbar>
        </AppBar>
    )
  }
}

export default withTranslation()(Navbar);