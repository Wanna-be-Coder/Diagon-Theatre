import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {getPopulars} from '../../redux/movie-list/movieListAction';
import SectionDirectory from '../../components/SectionDirectory/SectionDirectory';

const SecionDirectoryContainer = ({topMedias,getPopulars}) => {
    useEffect(() =>
    //calling all the data for the Home Page
    getPopulars()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [])
    console.log(topMedias);
    return (
     
        <div>
               {topMedias.loading ? <div>Loading</div> : 
               <div>

               <SectionDirectory title='Popular movies'  list={topMedias.popularMovies} />
               <SectionDirectory title='Popular TV shows'  list={topMedias.popularTvs} />
               <SectionDirectory title='Popular People'  list={topMedias.popularPeople} />
               <SectionDirectory title='Trending Movies'  list={topMedias.popularMovies} />
               
               </div>
               }
           
        </div>
    )
}
const mapStateToProps = ({media}) =>({
    topMedias:media
  })

export default connect(mapStateToProps,{getPopulars})(SecionDirectoryContainer);
