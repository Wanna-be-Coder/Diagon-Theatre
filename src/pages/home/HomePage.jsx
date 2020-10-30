import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {getMovies} from '../../redux/movie-list/movieListAction';

const HomePage = ({getMovies}) => {
    useEffect(() => {
      getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            Home Page
        </div>
    )
}



export default connect(null,{getMovies})(HomePage);
