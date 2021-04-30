import { Tooltip } from '@material-ui/core';

export const Marks = ({ data, xScale, yScale, xValue, yValue }) => 
 data.map(d => (<>
      <Tooltip title={xValue(d)} placement="top">
      <rect 
            className="mark" 
            key ={yValue(d)}
            x={0} 
            y={yScale(yValue(d))} 
            width = {xScale(xValue(d))}
            height = {yScale.bandwidth()} >
      </rect>
      </Tooltip>
      </>
))