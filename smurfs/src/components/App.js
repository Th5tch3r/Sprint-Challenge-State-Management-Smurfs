import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

//contexts
import { SmurfContext } from '../contexts/SmurfContext';

//components
import SmurfsC from './SmurfsC';

function App() {
  const [smurf, setSmurf] = useState([])

  useEffect( () => {
    axios.get('http://localhost:3333/smurfs')
      .then( res => {
        setSmurf(res.data)
      })
      .catch( err => {
        console.log(err)
      })
  }, [])


    return (
      <div className="App">
        <SmurfContext.Provider value= {{smurf}}>
          <h1>SMURFS! 2.0 W/ Context</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
          <SmurfsC/>
        </SmurfContext.Provider>
      </div>
    );
}

export default App;
