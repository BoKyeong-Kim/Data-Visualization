import { geoEqualEarth, geoPath } from 'd3';

const projection = geoEqualEarth();
const path = geoPath(projection);

export const Marks = ({ data : { contries, interiors }}) => 
<g className="marks" >
<>
      <path className='sphere' d={path({type : 'Sphere'})} />
      {contries.features.map(feature => (
            <path className='contries' d={path(feature)}/>
      ))}
      <path className='interiors' d={path(interiors)}/>
</>
 </g>;