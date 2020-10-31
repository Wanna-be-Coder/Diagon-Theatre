import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import {withRouter} from 'react-router-dom'

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

const SearchBar = ({history,location}) => {
  const classes = useStyles();
  const [searchField,setSearchField] = useState("");


  const handleSearch = (e) =>{
      e.preventDefault();
      if(searchField!==''){
      history.push(`/search/${searchField}`)
      }
      
  }
  console.log(location);
const pageDirectory = location.pathname !== '/' ? {marginTop:0,width:'100%'} : {};

  return (
    <Paper component="form" onSubmit={handleSearch} className={classes.root}  style={{...pageDirectory}} >
      <InputBase
        className={classes.input}
        placeholder="Search for a movie, tv show, person......"
        inputProps={{ "aria-label": "movie, tv show & person" }}
        value={searchField}
        onChange={(e)=>setSearchField(e.target.value)}
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
export default withRouter(SearchBar);