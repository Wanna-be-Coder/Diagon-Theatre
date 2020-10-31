import React,{useEffect,useState} from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline"
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import SearchBar from '../SearchBar/SearchBar'

import { makeStyles, useTheme } from "@material-ui/core/styles";
import {connect} from 'react-redux';
import {submitSearch} from '../../redux/media-list/mediaListAction';
import {withRouter} from 'react-router-dom';
import SearchResultCard from '../SearchResultCard/SearchResultCard';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  results:{
    background: 'grey',
    borderRadius: '50%',
    width: '38px',
    height: '28px',
    textAlign:'center',
    color:'white',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
 

  },

 
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    marginTop: '48px'
    
  },



  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
  }
}));

function SearchResultContainer(props) {
  const { window,submitSearch,match,searchResults } = props;
  // let movies =0, tvshows=0, people = 0;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSearchOf,setshowSearchof]  = useState('movie');
  const [numOfCategoris,setNumOfCategoris] = useState([]);

  useEffect(()=>{
    // Get Search result via params
    submitSearch(match.params.name);

  },[match.params.name, submitSearch])

  useEffect(()=>{
    // eslint-disable-next-line array-callback-return
    getNumberOfMedia(searchResults);
  },[searchResults])

  const getNumberOfMedia = async (searchResults) =>{
    let movies = 0;
    let tvs = 0;
    let person = 0;
  // eslint-disable-next-line array-callback-return
  await searchResults.map((searchResult) => {
    if(searchResult.media_type==='movie') movies += 1;
    if(searchResult.media_type==='tv') tvs += 1;
    if(searchResult.media_type==='person') person += 1;
  }
  );
  console.log(movies,tvs,person)
  setNumOfCategoris([movies,tvs,person])
  
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCategoryChange = (text) =>{
//For Filtering the search category functionality
if(text==='Movies') setshowSearchof('movie');
if(text==='TV Shows') setshowSearchof ('tv')
if(text==='People') setshowSearchof ('person')
  }

  const drawer = (arr) => (
    <div>
      <List>
        {["Movies", "TV Shows", "People"].map((text, index) => (
          <ListItem button key={text} onClick={()=>handleCategoryChange(text)}>
            <ListItem>
     
            <div >{text}</div>
         
            </ListItem>
            {/* <ListItemText className={classes.results} primary={index} /> */}
            <div className={classes.results}>{arr && arr[index]}</div>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
    console.log(searchResults);

 //Filtering The card according yo the state
    const filterSearch = searchResults.filter((searchResult) =>
    searchResult.media_type===showSearchOf
  );
  console.log(filterSearch)
  return (
  
    <div className={classes.root}>
      <CssBaseline />

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer()}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
     
            variant="permanent"
            open
          >
            {drawer(numOfCategoris)}
          </Drawer>
        </Hidden>
      </nav>
     
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        <SearchBar />
        {filterSearch.length !==0 ?
        filterSearch.map(data=>  <div style={{marginTop:'15px'}}>
        <SearchResultCard {...data}/>
        </div> )
           : 
             <h3>We got no macthes :(</h3> }
   

      </main>
    </div>
  );
}

SearchResultContainer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};
const mapStateToProps = ({media}) =>({
  searchResults:media.searchResults
})
export default connect(mapStateToProps,{submitSearch})(withRouter(SearchResultContainer));
