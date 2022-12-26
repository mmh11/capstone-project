import React, { Component } from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Grid } from '@mui/material'
import { useTranslation } from 'react-i18next';
import {Link, useLocation} from 'react-router-dom';

export default function Selector() {//component={Link} to="/beginner"
    const { t, i18n } = useTranslation();
    const currentPath = useLocation().pathname;
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
    const titleText = {
        marginTop: "5VH",
        marginLeft: "1VW",
        color: "#b135ff",
        fontSize: "1.5VW",
    };
    const tableCellStyle = {
        borderBottom: "none",
    };
    const tableRowStyle = {
        marginLeft: "5VW",
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
                                <h4 style={h4Style}>{t("tutorial_1.title")}</h4>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={tableCellStyle}>
                                <h4 style={h4Style}>{t("tutorial_2.title")}</h4>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={tableCellStyle}>
                                <h4 style={h4Style}>{t("tutorial_3.title")}</h4>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={tableCellStyle}>
                                <h4 style={h4Style}>{t("tutorial_4.title")}</h4>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={tableCellStyle}>
                                <h4 style={h4Style}>{t("tutorial_5.title")}</h4>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={tableCellStyle}>
                                <h4 style={h4Style}>{t("tutorial_6.title")}</h4>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={tableCellStyle}>
                                <h4 style={h4Style}>{t("tutorial_7.title")}</h4>
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
