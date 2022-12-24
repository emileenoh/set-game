import React from 'react';
import logo from './logo.svg';
import './App.css';
import SetCard from "./SetCard";
import {Count, Shading, Shape, Color} from "./Card";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The game of SET</h1>
        <div style={{textAlign: 'left'}}>
          <strong>Things to work on:</strong>
          <ul>
            <li>Create a card class</li>
            <li>Write a function to say "is this a set or not?"</li>
            <li>Write a function to generate every card</li>
            <li>Testing</li>
            <li>UI (Emilee)</li>
            <li>Set up github repo and commit this (Emilee)</li>
          </ul>
          <p>Goals: learning TS (interfaces, types, react), learning the "backend of the frontend" (hooks, side effects, etc)</p>
        </div>
        <div className="card-grid">
          <SetCard count={Count.One} shape={Shape.Oval} color={Color.Purple} shading={Shading.Empty}></SetCard>
          <SetCard count={Count.Two} shape={Shape.Oval} color={Color.Red} shading={Shading.Solid}></SetCard>
          <SetCard count={Count.Two} shape={Shape.Oval} color={Color.Green} shading={Shading.Striped}></SetCard>
        </div>
      </header>
    </div>
  );
}

export default App;
