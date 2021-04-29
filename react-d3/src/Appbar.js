import React from 'react';
import * as d3 from "d3";
import "./App.css";
import { useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

const width = 960;
const height = 550;
const margin = { top : 50 , right : 50,  bottom : 80 , left : 220 };
const xAxisLabelOffset = 45;

const App = () => {
  const data = useData();

  if(!data) {
    return <pre>loading...</pre>
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = d => d.Population;
  const yValue = d => d.Country;

  const siFormat = d3.format(".2s");
  const xAxisTickFormat = tickFormat => siFormat(tickFormat).replace('G', 'B');


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
        <AxisBottom 
          xScale={xScale} 
          innerHeight={innerHeight} 
          tickFormat={xAxisTickFormat}
        />
        <AxisLeft yScale={yScale}/>
        <text 
          className ='axis-label'
          x={innerWidth/2} 
          y={innerHeight+xAxisLabelOffset} 
          textAnchor="middle"
        >
          Population
        </text>
        <Marks 
          data={data} 
          xScale={xScale} 
          yScale={yScale} 
          xValue={xValue} 
          yValue={yValue} 
          tooltipFormat={xAxisTickFormat}/>
      </g>
      </svg>
  )};

export default App;