import React, {useState, useEffect} from 'react'

function GetSummoner(props) {
    const summonerData = props.data
    
    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            Summoner name: {summonerData.name}
            <br/>
            Summoner level: {summonerData.summonerLevel}
        </div>
    )
}

export default GetSummoner;
