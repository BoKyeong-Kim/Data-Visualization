import React, { useState,  useEffect } from 'react';
import * as d3 from "d3";
import "./App.css";

const csvUrl = 'https://gist.githubusercontent.com/BoKyeong-Kim/d39d56276edefd0999731e76dbdcb805/raw/d08ce4d95e4bf94261c53d3490deb555f357be36/UN_Population_2019.csv'
const width = 960;
const height = 500;
const margin = { top : 50 , right : 50,  bottom : 50 , left : 200 };

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.Population = +d['2020'];
      return d;
    };
    d3.csv(csvUrl, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, []);

  console.log(data);

  if(!data) {
    return <pre>loading...</pre>
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yScale = d3.scaleBand()
                 .domain(data.map(d => d.Country))
                 .range([0, innerHeight]);
  
  const xScale = d3.scaleLinear()
                .domain([0, d3.max(data.map(d => d.Population))])
                .range([0, innerWidth]);

  return <svg width ={width} height={height}>
    <g transform= {`translate(${margin.left}, ${margin.top})`}>
    {xScale.ticks().map(tickValue => (
      <g key={tickValue} transform={`translate(${xScale(tickValue)}, 0)`}>
        <line y2={innerHeight} stroke='black'/>
        <text
          style = {{ textAnchor : 'middle' }}
          dy = ".71em"
          y={innerHeight+3}> 
          {tickValue}
        </text>
      </g>
    ))}
    {yScale.domain().map(tickValue => (
      <g key={tickValue} transform={`translate(0, ${yScale(tickValue) + yScale.bandwidth() / 2})`}>
        <text
          style = {{ textAnchor : 'end' }}
          x={-3}
          dy=".32em">
          {tickValue}
        </text>
      </g>
    ))}
    {data.map(d => (
          <rect x={0} 
                y={yScale(d.Country)} 
                width = {xScale(d.Population)}
                height = {yScale.bandwidth()} />))}
    </g>
  </svg>

  };

export default App;