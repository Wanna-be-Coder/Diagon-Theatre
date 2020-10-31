import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
 
 
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width:"80%"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

export default function SearchResultCard({poster_path,title,release_date,overview}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={`http://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`}
        title={title}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
           {release_date}
          </Typography>
          <Typography variant="h6" color="textPrimary">
          {overview}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
