import React from 'react';
import logo from './logo.svg';
import './App.css';
import SetCard from "./SetCard";
import {Count, Shading, Shape, Color} from "./Card";


function App() {
  return (
    <div className="App">
        <h1>The Game of SET</h1>
        <div style={{textAlign: 'left'}}>
          <strong>Things to work on:</strong>
          <ul>
            <li>Write a function to say "is this a set or not?"</li>
            <li>Write a function to generate every card</li>
            <li>Testing</li>
          </ul>
          <p>Goals: learning TS (interfaces, types, react), learning the "backend of the frontend" (hooks, side effects, etc)</p>
        </div>
      <div className="card-grid">
          <SetCard count={Count.Three} shape={Shape.Squiggle} color={Color.Purple} shading={Shading.Striped}></SetCard>
          <SetCard count={Count.Three} shape={Shape.Squiggle} color={Color.Purple} shading={Shading.Empty}></SetCard>
          <SetCard count={Count.Three} shape={Shape.Squiggle} color={Color.Purple} shading={Shading.Solid}></SetCard>
          <SetCard count={Count.Three} shape={Shape.Oval} color={Color.Green} shading={Shading.Striped}></SetCard>
          <SetCard count={Count.Two} shape={Shape.Oval} color={Color.Red} shading={Shading.Solid}></SetCard>
          <SetCard count={Count.Two} shape={Shape.Diamond} color={Color.Red} shading={Shading.Striped}></SetCard>
          <SetCard count={Count.One} shape={Shape.Diamond} color={Color.Red} shading={Shading.Striped}></SetCard>
      </div>
    </div>
  );
}

export default App;
