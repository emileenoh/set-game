import React from 'react';
import './App.css';
import SetCard from "./SetCard";
import {Count, Shading, Shape, Color} from "./Card";


function App() {
  return (
    <div className="App">
        <h1>The Game of SET</h1>
        <div style={{textAlign: 'left'}}>
            <p><strong>Goals:</strong> learning TS (interfaces, types, react), learning the "backend of the frontend" (hooks, side effects, etc)</p>
            <strong>Things to work on:</strong>
            <ul>
                <li>(In progress - logic.ts) Write a function to say "is this a set or not?"</li>
                <li>Write a function to generate every card</li>
            </ul>
        </div>
      <div className="card-grid">
          <SetCard count={Count.One} shape={Shape.Rectangle} color={Color.Purple} shading={Shading.Striped}></SetCard>
          <SetCard count={Count.Two} shape={Shape.Rectangle} color={Color.Purple} shading={Shading.Empty}></SetCard>
          <SetCard count={Count.Three} shape={Shape.Rectangle} color={Color.Purple} shading={Shading.Solid}></SetCard>
          <SetCard count={Count.Three} shape={Shape.Oval} color={Color.Green} shading={Shading.Striped}></SetCard>
          <SetCard count={Count.Two} shape={Shape.Oval} color={Color.Red} shading={Shading.Solid}></SetCard>
          <SetCard count={Count.Two} shape={Shape.Diamond} color={Color.Red} shading={Shading.Striped}></SetCard>
          <SetCard count={Count.One} shape={Shape.Diamond} color={Color.Red} shading={Shading.Striped}></SetCard>
          <SetCard count={Count.Three} shape={Shape.Diamond} color={Color.Purple} shading={Shading.Striped}></SetCard>
          <SetCard count={Count.One} shape={Shape.Diamond} color={Color.Green} shading={Shading.Empty}></SetCard>
          <SetCard count={Count.Two} shape={Shape.Diamond} color={Color.Green} shading={Shading.Solid}></SetCard>
          <SetCard count={Count.Three} shape={Shape.Diamond} color={Color.Green} shading={Shading.Striped}></SetCard>
          <SetCard count={Count.Two} shape={Shape.Diamond} color={Color.Purple} shading={Shading.Striped}></SetCard>
      </div>
    </div>
  );
}

export default App;
