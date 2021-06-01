import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useData } from './useData';
import "./App.css";
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { scaleLinear, csv, max, format, extent } from 'd3';
import { Marks } from './Marks';

const width = 960;
const menuHeight = 75;
const height = 500 - menuHeight;
const margin = { top: 20, right: 30, bottom: 65, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;


const App = () => {
  const data = useData();

  if (!data){
    return <pre>Loding...</pre>
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = d => d.petal_length;
  const xAxisLabel = 'Petal Length';

  const yValue = d => d.sepal_width;
  const yAxisLabel = 'Sepal Width';

  const siFormat = format('.2s');

  const xScale = scaleLinear()
                .domain(extent(data, xValue))
                .range([0, innerWidth])
                .nice();

  const yScale = scaleLinear()
                .domain(extent(data, yValue))
                .range([0, innerHeight])
                .nice();

  return (
    <>
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom 
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={siFormat}
          tickOffset={5}
        />
      <text
        className="axis-label"
        textAnchor="middle"
        transform={`translate(${-yAxisLabelOffset}, ${innerHeight/2}) rotate(-90)`}
      >
        {yAxisLabel}
      </text>
      <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={5} />
      <text
        className="axis-label"
        x={innerWidth/2}
        y={innerHeight + xAxisLabelOffset}
        textAnchor="middle"
      >
        {xAxisLabel}
      </text>
      <AxisBottom xScale={xScale} innerHeight={innerHeight} tickOffset={5}/>
      <Marks 
        data={data}
        xScale={xScale}
        yScale={yScale}
        xValue={xValue}
        yValue={yValue}
        tooltipFormat={siFormat}
        circleRadius={7}
      />
      </g>
    </svg>
    </>
)};

export default App;