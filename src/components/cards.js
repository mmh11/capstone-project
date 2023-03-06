import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ImageBeginner from '../materials/images/1.jpg'
import ImageAdvance from '../materials/images/2.jpg'
import ImageTest from '../materials/images/3.jpg'
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import Beginner from '../pages/beginner';
import Selector from './selector';

export default function Cards() {
  	const { t, i18n } = useTranslation();
  	const cardStyle = {
    	marginTop: "10VH",
    	marginLeft: "1VW",
    	marginRight: "1VW",
    	maxWidth: "20VW",
		minWidth:"20VW"
  	}
	const cardMediaStyle = {
		height: "30VH"
	}
	const divStyle = {
		display:"flex",
		justifyContent:"center"
	}
	const muiButton1Style = {
		color: "#b135ff",
	}
	const muiButton2Style = {
		color: "#b135ff",
		marginTop: "20px"
	}
	const muiButtonSX = {
        "&:hover": {backgroundColor: "transparent",textDecoration: "underline" }
    };
	return (
		<div style={divStyle}>
		<Card style={cardStyle}>
			<CardMedia
			style={cardMediaStyle}
			image={ImageBeginner}
			/>
			<CardContent>
				<Typography gutterBottom>
					<h2>{t("labels.beginner")}</h2>
				</Typography>
				<Typography variant="body2" color="text.secondary">
					<br/>
					{t("home.description_1")}
					<br/>
					<br/>
				</Typography>
			</CardContent>
			<CardActions>
				<Button component={Link} to="/beginner" size="small" sx={muiButtonSX} style={muiButton2Style}>
					<h3>{t("labels.start")}</h3>
				</Button>
			</CardActions>
		</Card>

		<Card style={cardStyle}>
			<CardMedia
			style={cardMediaStyle}
			image={ImageAdvance}
			/>
			<CardContent>
				<Typography gutterBottom>
					<h2>{t("labels.advanced")}</h2>
				</Typography>
				<Typography variant="body2" color="text.secondary">
					<br/>
					{t("home.description_2")}
					<br/>
					{i18n.language === "TC" && <br/>}
				</Typography>
			</CardContent>
			<CardActions>
				<Button component={Link} to="/advanced" size="small" sx={muiButtonSX} style={muiButton1Style}>
					<h3>{t("labels.start")}</h3>
				</Button>
			</CardActions>
		</Card>

		<Card style={cardStyle}>
			<CardMedia
			style={cardMediaStyle}
			image={ImageTest}
			/>
			<CardContent>
				<Typography gutterBottom>
					<h2>{t("labels.quiz")}</h2>
				</Typography>
				<Typography variant="body2" color="text.secondary">
					<br/>
					{t("home.description_3")}
					<br/>
					<br/>
				</Typography>
			</CardContent>
			<CardActions>
				<Button component={Link} to="/quiz" size="small" sx={muiButtonSX} style={muiButton2Style}>
					<h3>{t("labels.start")}</h3>
				</Button>
			</CardActions>
		</Card>
		</div>
	);
}