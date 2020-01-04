import React from 'react';
import './App.css';
import Timer from './Timer';



export function RedCard(props) {
  return (
    <div className="App-header bgred">    
      <h1>{props.title}</h1>
    </div>
  );
}

export function GreenCard(props) {
  return (
    <div className="App-header bggreen">    
      <h1>{props.title}</h1>
    </div>
  );
}

export function BlueCard(props) {
  return (
    <div className="App-header bgblue">    
      <h1>{props.title}</h1>
    </div>
  );
}
 function Card(props) {
  return (
    <div className="App-header">    
    <Timer/>
      <h1 style={{color:"black"}}>{props.title}</h1>
    </div>
  );
}




export default Card;
