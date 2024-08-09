import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from "react";
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


/*-----------------------------Week 7 Assignment-------------------------*/
//Counter App 

//Recat component

function Counter(){

  //useStae() for dynamic elements
  var [count,setmyCount]=useState(0);
  var [random,setRandom]=useState(0);

  // counter functions
  // increment 
  function increment(){
    setmyCount(count+1);
  }
  //reset count
  function reset(){
    setmyCount(0);
  }
  //decrement
  function decrement(){
    setmyCount(count-1);
  }

  //function create random numbers
  function randomGen(){
    var r=Math.floor(Math.random()*100);
    setRandom(r);

  }

  //appearence
  return(
    <div className="main">

      <div className="counter">
        <h3>Counter</h3>
        <h1>{count}</h1>
        <button onClick={decrement}>Dec</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Inc</button>
      </div>
     

      <div className="random">
        <h3>Random number</h3>
        <h1>{random}</h1>
        <button onClick={randomGen}>Create</button>
      </div>

    </div>
    
  )


}

root.render(
  <Counter/>
)





