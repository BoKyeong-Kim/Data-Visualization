import React, { useState,  useEffect } from 'react';
import * as d3 from "d3";
import "./App.css";

const csvUrl = 'https://gist.githubusercontent.com/BoKyeong-Kim/d39d56276edefd0999731e76dbdcb805/raw/d08ce4d95e4bf94261c53d3490deb555f357be36/UN_Population_2019.csv'
const width = 960;
const height = 500;

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


  const yScale = d3.scaleBand()
                 .domain(data.map(d => d.Country))
                 .range([0, height]);
  
  const xScale = d3.scaleLinear()
                .domain([0, d3.max(data.map(d => d.Population))])
                .range([0, width]);

  return <svg width ={width} height={height}>
    {data.map(d => (
          <rect x={0} 
                y={yScale(d.Country)} 
                width = {xScale(d.Population)}
                height = {yScale.bandwidth()} />))}
  </svg>

  };

export default App;