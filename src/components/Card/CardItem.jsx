import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { red } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import './card.styles.scss';

const useStyles = makeStyles(() => ({

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
 
  },

  avatar: {
    backgroundColor: red[500],
    fontSize: '16px'
 
    
  }
}));

export default function CardItem({data}) {
  let classes = useStyles();

  const imageSelector = data.profile_path ? { backgroundImage: `url(http://image.tmdb.org/t/p/w220_and_h330_face/${data.profile_path})`} : { backgroundImage: `url(http://image.tmdb.org/t/p/w220_and_h330_face/${data.poster_path})`};
  const ratingSelector = data.profile_path ? `${data.popularity.toString().substr(0,2)}pt` :  ` ${data.vote_average*10}﹪`;
  return (
    <Card className="card-item" style={imageSelector}>
   
      <Avatar alt="rating" className={classes.avatar}>
        {ratingSelector}
      </Avatar>
  
    </Card>
  );
}
