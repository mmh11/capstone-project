import React, { Component } from 'react'
import { Button, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Grid } from '@mui/material'
import { useTranslation } from 'react-i18next';
import {Link, useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTutorial } from '../Redux/switcher';

export default function Selector() {
    const { t, i18n } = useTranslation();
    const currentPath = useLocation().pathname;
    const currentTutorial = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    const divSpliterStyle = {
        display:"flex", 
        justifyContent: "space-between",
    }
    const divLineStyle = {
        marginTop: "11VH",
        borderLeft: "3px solid #b135ff",
        height: "20VH"
    }
    const h4Style = {
        color: "#b3b3b3",
        margin: 0,
        fontSize: "0.7VW"
    };
    const currenth4Style = {
        color: "#b135ff",
        margin: 0,
        fontSize: "0.7VW",
        textDecoration: "underline"
    };
    const titleText = {
        marginTop: "5VH",
        marginLeft: "1.5VW",
        color: "#b135ff",
        fontSize: "1.5VW",
    };
    const tableCellStyle = {
        borderBottom: "none",
        paddingTop: 0
    };
    const muiButtonSX = {
        "&:hover": {backgroundColor: "#b135ff"}
    };
    const muiButtonStyle = {
        width: "100%",
        justifyContent: "start",
        textAlign: "start"
    }
    return (
    <>
        <div style={divSpliterStyle}>
            <TableContainer style={{minWidth:"12VW"}}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <h1 style={titleText}>
                                {t("labels.tutorial")}
                            </h1>
                        </TableRow>
                        <TableRow>
                            <TableCell style={tableCellStyle}>
                                <Button 
                                    sx={(currentTutorial!==1) && muiButtonSX} 
                                    style={muiButtonStyle} 
                                    onClick={() => dispatch(setTutorial(1))} // Tutorial 1
                                    disableRipple
                                    >
                                    <h4 style={(currentTutorial===1)
                                        ?currenth4Style
                                        :h4Style}
                                        >
                                        {t("tutorial_1.title")}
                                    </h4>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={tableCellStyle}>
                                <Button 
                                    sx={(currentTutorial!==2) && muiButtonSX} 
                                    style={muiButtonStyle} 
                                    onClick={() => dispatch(setTutorial(2))} // Tutorial 2
                                    disableRipple
                                    >
                                    <h4 style={(currentTutorial===2)
                                        ?currenth4Style
                                        :h4Style}
                                        >
                                        {t("tutorial_2.title")}
                                    </h4>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={tableCellStyle}>
                                <Button 
                                    sx={(currentTutorial!==3) && muiButtonSX} 
                                    style={muiButtonStyle}
                                    onClick={() => dispatch(setTutorial(3))} // Tutorial 3
                                    disableRipple
                                    >
                                    <h4 style={(currentTutorial===3)
                                        ?currenth4Style
                                        :h4Style}
                                        >
                                        {t("tutorial_3.title")}
                                    </h4>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={tableCellStyle}>
                                <Button 
                                    sx={(currentTutorial!==4) && muiButtonSX} 
                                    style={muiButtonStyle}
                                    onClick={() => dispatch(setTutorial(4))} // Tutorial 4
                                    disableRipple
                                    >
                                    <h4 style={(currentTutorial===4)
                                        ?currenth4Style
                                        :h4Style}
                                        >
                                        {t("tutorial_4.title")}
                                    </h4>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={tableCellStyle}>
                                <Button 
                                    sx={(currentTutorial!==5) && muiButtonSX} 
                                    style={muiButtonStyle}
                                    onClick={() => dispatch(setTutorial(5))} // Tutorial 5
                                    disableRipple
                                    >
                                    <h4 style={(currentTutorial===5)
                                        ?currenth4Style
                                        :h4Style}
                                        >
                                        {t("tutorial_5.title")}
                                    </h4>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={tableCellStyle}>
                                <Button 
                                    sx={(currentTutorial!==6) && muiButtonSX} 
                                    style={muiButtonStyle}
                                    onClick={() => dispatch(setTutorial(6))} // Tutorial 6
                                    disableRipple
                                >
                                    <h4 style={(currentTutorial===6)
                                        ?currenth4Style
                                        :h4Style}
                                        >
                                        {t("tutorial_6.title")}
                                    </h4>
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={tableCellStyle}>
                                <Button 
                                    sx={(currentTutorial!==7) && muiButtonSX} 
                                    style={muiButtonStyle}
                                    onClick={() => dispatch(setTutorial(7))} // Tutorial 7
                                    disableRipple
                                >
                                    <h4 style={(currentTutorial===7)
                                        ?currenth4Style
                                        :h4Style}
                                        >
                                        {t("tutorial_7.title")}
                                    </h4>
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={divLineStyle}/>
        </div>
    </>
    )
}
