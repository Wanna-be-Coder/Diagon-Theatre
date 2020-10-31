import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getDetails} from '../../redux/display-item/displayItemAction';
import SearchBar from '../../components/SearchBar/SearchBar';
import DetailContainer from '../../components/DetailContainer/DetailContainer'
import './detail-page.styles.scss'

const DetailPage = ({getDetails,match,detail,loading}) => {
    useEffect(() => {
        getDetails(match.params.media,match.params.id);
     
    }, [getDetails,match.params.media, match.params.id])
    const selectedImage = detail.profile_path ? detail.profile_path : detail.poster_path;

    if(loading) return<div>Loading....</div>
    return (
        <div>
        <SearchBar />
        <div className='backgroundClass'>
     <div className='main-detail'> 
        <img src={detail.poster_path === null ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png' :`http://image.tmdb.org/t/p/w220_and_h330_face/${selectedImage}`} alt={detail.title} className='center'/>
        <DetailContainer detail={detail}/>
     </div>
   </div>
   </div>
    )
}
const mapStateToProps = ({details}) =>({
    detail:details.displayItem,
    loading:details.isLoading
  })

export default connect(mapStateToProps,{getDetails})(DetailPage);
