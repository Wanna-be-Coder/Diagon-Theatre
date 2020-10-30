
import React from 'react';
import CardItem from '../Card/CardItem';

const SectionDirectory = ({title,list}) => {
    const cardStyle = {
        main:{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '30px',
        },
        title:{
            fontSize: "28px",
            marginBottom: "25px",
        },
        card:{
            display: 'flex',
            justifyContent: 'space-between',
            overflowX: "scroll",
            overflowY:"hidden"
        },
        

    }
    return (
        <div style={cardStyle.main}>
            <div style={cardStyle.title}>{title}</div>
            <div style={cardStyle.card}>
            {list.map(list=> <CardItem key={list.id}  data={list}/>)}
            </div>
            
        </div>
    )
}

export default SectionDirectory
