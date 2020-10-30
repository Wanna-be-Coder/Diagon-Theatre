import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {getPopulars} from '../../redux/movie-list/movieListAction';

const HomePage = ({getPopulars}) => {
    useEffect(() => 
        getPopulars()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [])
    return (
        <div>
            Home Page
        </div>
    )
}



export default connect(null,{getPopulars})(HomePage);
