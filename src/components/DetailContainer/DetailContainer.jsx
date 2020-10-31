import React from 'react'

const DetailContainer = ({detail}) => {
    return (
        <div>
        <h1 style={{fontSize:'50px'}}>{detail.title}</h1>
        <h2 style={{fontSize:'40px'}}>{detail.tagline}</h2>
        <h3 style={{fontSize:'35px'}}>Relase Date:  {detail.release_date}</h3>
        <p style={{fontSize:'30px'}}>Popularity:{detail.popularity}  Vote Average:{detail.vote_average}  Vote Count:{detail.vote_count}</p>
        <p style={{fontSize:'20px'}} >{detail.overview}</p>
             </div>
    )
}

export default DetailContainer
