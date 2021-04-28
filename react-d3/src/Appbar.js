import React from 'react';
import * as d3 from "d3";
import "./App.css";
import { useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

const width = 960;
const height = 500;
const margin = { top : 50 , right : 50,  bottom : 40 , left : 220 };

const App = () => {
  const data = useData();

  if(!data) {
    return <pre>loading...</pre>
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = d => d.Population;
  const yValue = d => d.Country;


  const yScale = d3.scaleBand()
                 .domain(data.map(yValue))
                 .range([0, innerHeight])
                 .paddingInner(0.15);
  
  const xScale = d3.scaleLinear()
                .domain([0, d3.max(data.map(xValue))])
                .range([0, innerWidth]);

  
  return (
    <svg width ={width} height={height}>
    <g transform= {`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom xScale={xScale} innerHeight={innerHeight} />
        <AxisLeft yScale={yScale}/>
        <Marks data={data} xScale={xScale} yScale={yScale} xValue={xValue} yValue={yValue}/>
      </g>
      </svg>
  )};

export default App;