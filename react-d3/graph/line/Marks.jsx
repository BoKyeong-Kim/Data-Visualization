import { curveNatural, line } from 'd3-shape';

export const Marks = ({ data, xScale, yScale, xValue, yValue, circleRadius }) => 
<>
<g className="marks" >
<path 
      fill ='none'
      stroke = 'black'
      d={line()
      .x(d => xScale(xValue(d)))
      .y(d => yScale(yValue(d)))
      .curve(curveNatural)(data)}/>
 {
 /*data.map(d => (<>
      <Tooltip title={xValue(d)} placement="top">
      <circle 
            cx={xScale(xValue(d))} 
            cy={yScale(yValue(d))} 
            r = {circleRadius} >
      </circle>
      </Tooltip>
      </>
 ))*/}</g></>;