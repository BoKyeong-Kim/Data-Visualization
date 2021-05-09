import React from 'react';
import * as d3 from "d3";
import useStyles from './styles';
import "./App.css";
import { useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';
import { timeFormat } from 'd3';


const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 50;

const App = () => {
  const classes = useStyles();
  const data = useData();

  if(!data) {
    return <pre>loading...</pre>
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = d => d.timestamp;
  const xAxisLabel = 'Time';
  
  const yValue = d => d.temperature;
  const yAxisLabel = 'Temperature';

  const xAxisTickFormat = timeFormat("%a");

  const xScale = d3.scaleTime()
  .domain(d3.extent(data, xValue))
  .range([0, innerWidth])
  .nice();

  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yValue))
    .range([innerHeight, 0]);
  
  return (
    <div className={classes.root}>
    <svg width ={width} height={height}>
    <g transform= {`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom 
          xScale={xScale} 
          innerHeight={innerHeight} 
          tickFormat={xAxisTickFormat}
          tickOffSet = {5}
        />
          <text 
          className ='axis-label'
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset},${innerHeight / 2}) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={5}/>
        <text 
          className ='axis-label'
          x={innerWidth/2} 
          y={innerHeight+xAxisLabelOffset} 
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>
        <Marks 
          data={data} 
          xScale={xScale} 
          yScale={yScale} 
          xValue={xValue} 
          yValue={yValue}
          circleRadius={3}
          />
      </g>
      </svg>
  </div>
  )};

export default App;