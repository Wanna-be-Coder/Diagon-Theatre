import React from 'react'

import Header from '../../components/Header/Header'
import SecionDirectoryContainer from '../../components/SectionDirectory/SecionDirectoryContainer';

const HomePage = ({getPopulars}) => {

    return (
        <div>
            <Header />
           <SecionDirectoryContainer />
        </div>
    )
}



export default (HomePage);
