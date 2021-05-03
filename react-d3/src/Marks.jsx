import { Tooltip } from '@material-ui/core';

export const Marks = ({ data, xScale, yScale, xValue, yValue }) => 
 data.map(d => (<>
      <Tooltip title={xValue(d)} placement="top">
      <circle 
            className="mark" 
            cx={xScale(xValue(d))} 
            cy={yScale(yValue(d))} 
            r = {10} >
      </circle>
      </Tooltip>
      </>
))