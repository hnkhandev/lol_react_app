import React, { useState } from 'react';

function App() {
  const [SummonerName,getSummonerText] = useState('');

  function handleOnChange(event) {
    getSummonerText(event.target.value);
  }
  function handleOnSubmit(e){
    alert(SummonerName);
    e.preventDefault();

  }

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <div className="HeaderSearch"style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <input type="text" name="textsummonerName" onChange={handleOnChange}>
              </input>
        </div>
      </form>
    </div>
  );
}

export default App;
