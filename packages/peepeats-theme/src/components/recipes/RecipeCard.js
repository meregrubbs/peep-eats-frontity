import React from "react";
import { connect } from "frontity";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const RecipeCard = ({ state }) => {
  const useStyles = makeStyles({
    root: {
      margin: "1em 0.5em"
    },
    typography: {
      fontFamily: "Source Sans Pro"
    },
    cardTitle: {
      fontFamily: "hwt-aetna, serif"
    },
    media: {
      height: 140
    },
    cardContent: {
      paddingBottom: "0"
    },
    button: {
      margin: "0 0.5em",
      fontFamily: "Source Sans Pro",
      textTransform: "lowercase",
      color: `${state.darkGreen}`,
      fontWeight: "bold"
    }
  });

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://peepeats.website/wp-content/uploads/2020/11/robert-anasch-JZfPQTc7ais-unsplash.png"
          title="caramel corn"
        />
        <CardContent className={classes.cardContent}>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.cardTitle}
          >
            Caramel Corn
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.typography}
          >
            The best treat on a chilly fall evening.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className={classes.button}>
          View Recipe
        </Button>
      </CardActions>
    </Card>
  );
};

export default connect(RecipeCard);
