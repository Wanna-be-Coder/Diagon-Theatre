import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    justifyContent:"space-between",
    width: 400,
    height:50,
    marginTop:75

  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

export default function SearchBar() {
  const classes = useStyles();
  const handleSearch = (e) =>{
      e.preventDefault();
      console.log('submitted');
  }

  return (
    <Paper component="form" onSubmit={handleSearch} className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search for a movie, tv show, person......"
        inputProps={{ "aria-label": "movie, tv show & person" }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
