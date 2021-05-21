import React, { useState,  useEffect } from 'react';
import * as d3 from "d3";
import "./App.css";

const csvUrl = 'https://gist.githubusercontent.com/BoKyeong-Kim/ac522f3205103f1db0268505d2febd46/raw/8437c5d2fc446bc04a76e330cfba0fb99c5c2084/cssNamedColors.csv'

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;

const pieArc = d3.arc()
  .innerRadius(0)
  .outerRadius(width);

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.csv(csvUrl).then(setData);
  }, []);

  if(!data) {
    return <pre>loading...</pre>
  }

  const colorPie = d3.pie().value(1);

  return <svg width ={width} height={height}>
    <g transform={`translate(${centerX}, ${centerY})`}>
      {colorPie(data).map(d => 
      <path fill ={d.data['RGB hex value']} 
      d={pieArc(d)}
      />)}
      </g>
  </svg>
  };

export default App;