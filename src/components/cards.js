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

export default function MediaCard() {
  const { t, i18n } = useTranslation();
  const cardStyle = {
    marginTop: "10VH",
    marginLeft: "1VW",
    marginRight: "1VW"
  }
  const divStyle = {
    display:"flex",
    justifyContent:"center"
  }
  return (
    <div style={divStyle}>
      <Card sx={{ maxWidth: "20VW", minWidth:"20VW" }} style={cardStyle}>
        <CardMedia
          sx={{ height: "30VH" }}
          image={ImageBeginner}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {t("labels.beginner")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <br/>
            {t("home.description_1")}
            <br/>
            <br/>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{t("labels.start")}</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: "20VW", minWidth:"20VW" }} style={cardStyle}>
        <CardMedia
          sx={{ height: "30VH" }}
          image={ImageAdvance}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {t("labels.advanced")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <br/>
            {t("home.description_2")}
            <br/>
            {i18n.language === "TC" && <br/>}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{t("labels.start")}</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: "20VW", minWidth:"20VW" }} style={cardStyle}>
        <CardMedia
          sx={{ height: "30VH" }}
          image={ImageTest}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {t("labels.quiz")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <br/>
            {t("home.description_3")}
            <br/>
            <br/>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{t("labels.start")}</Button>
        </CardActions>
      </Card>
    </div>
  );
}