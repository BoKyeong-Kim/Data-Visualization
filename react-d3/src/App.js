import React, { useState,  useEffect } from 'react';
import * as d3 from "d3";
import "./App.css";
import { message } from './message';

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

  return <svg width ={width} height={height}>
    <g transform={`translate(${centerX}, ${centerY})`}>
      {data.map((d,i) => 
      <path fill ={d['RGB hex value']} 
      d={pieArc({
        startAngle : i / data.length * 2 * Math.PI,
        endAngle : (i + 1) / data.length * 2 * Math.PI
      })}
      />)}
      </g>
  </svg>
  };

export default App;