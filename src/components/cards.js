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

export default function MediaCard() {
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
      <Card sx={{ maxWidth: "20VW" }} style={cardStyle}>
        <CardMedia
          sx={{ height: "30VH" }}
          image={ImageBeginner}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Beginner
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Start</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: "20VW" }} style={cardStyle}>
        <CardMedia
          sx={{ height: "30VH" }}
          image={ImageAdvance}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Advanced
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Start</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: "20VW" }} style={cardStyle}>
        <CardMedia
          sx={{ height: "30VH" }}
          image={ImageTest}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Quiz
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Start</Button>
        </CardActions>
      </Card>
    </div>
  );
}