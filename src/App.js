import React, { useState } from 'react'
import GetSummoner from './Components/getSummoner'

// init the app
function App() {
  const [summonerName, setSummonerName] = useState('')
  const [summonerData, setSummonerData] = useState({})
  const api = 'RGAPI-50e8d363-3829-4372-b272-5fb78a54e032';

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

  const handleOnChange = (event) => {
    setSummonerName(event.target.value)
  }
  
  const handleOnSubmit = (event) => {
    event.preventDefault()
    async function fetchData() {
      getSummoner(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${api}`)
    }
    fetchData()
  }

  return (
    <div className='App'>
      <form onSubmit={handleOnSubmit}>
        <div className='summonerSearch' style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <input type='text' name='summonerName' onChange={handleOnChange}/>
        </div>
        <GetSummoner data={summonerData}/>
      </form>
    </div>
  );
}

export default App
