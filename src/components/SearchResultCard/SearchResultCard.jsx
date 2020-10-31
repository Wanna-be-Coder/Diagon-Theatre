import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {withRouter} from 'react-router-dom';


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

 const SearchResultCard = ({id,poster_path,title,release_date,overview,media_type,profile_path,known_for_department,name,history}) => {
  const classes = useStyles();
  const handleRedirect = (media_type,id) => {
    history.push(`/detail/${media_type}/${id}`)
  }
 if(media_type==='person') return (
    <Card className={classes.root}  onClick={()=>handleRedirect(media_type,id)}>
    <CardMedia
      className={classes.cover}
      image={profile_path===null? 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png':`http://image.tmdb.org/t/p/w220_and_h330_face/${profile_path}`}
      title={title}
    />
    <div className={classes.details}>
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
         {known_for_department}
        </Typography>
   
      </CardContent>
    </div>
  </Card>
 )
  return (
    <Card className={classes.root} onClick={()=>handleRedirect(media_type,id)}>
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
          <Typography  color="textPrimary">
          {overview.substring(0,200)}....
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
export default withRouter(SearchResultCard);