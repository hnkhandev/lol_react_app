import React, {useState, useEffect} from 'react'

function GetSummoner(props) {
    const summonerName = props.name
    const [summonerData, setSummonerData] = useState({})

    const getSummoner = async (endpoint) => {
        const headers = {
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Credentials':'true',
        }
    
        const request = {
          method: 'GET',
          headers: headers
        }
    
        const response = await fetch(endpoint, request)
        const data = await response.json()
        setSummonerData(data)
    }

    useEffect( () => {
        async function fetchData() {
            getSummoner(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-89ad4586-d8f3-4d8f-b0b0-cf8463be5e83`)
        }
        fetchData()
    }, [])

    return (
        <div>
            Summoner name: {summonerData.name}
            <br/>
            Summoner level: {summonerData.summonerLevel}
        </div>
    )
}


export default GetSummoner;
