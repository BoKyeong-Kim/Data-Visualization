import { useState,  useEffect } from 'react';
import * as d3 from "d3";
import { feature, mesh } from 'topojson-client';

/*const csvUrl_population = 'https://gist.githubusercontent.com/BoKyeong-Kim/d39d56276edefd0999731e76dbdcb805/raw/d08ce4d95e4bf94261c53d3490deb555f357be36/UN_Population_2019.csv'*/
/*const csvUrl_iris = 'https://gist.githubusercontent.com/BoKyeong-Kim/65eb63985dfd842abe946b8234c77fac/raw/c205d59d5a2b43c42ed51082a92ab54a941c7b43/iris_dataset';*/
/*const csvUrl = 'https://gist.githubusercontent.com/BoKyeong-Kim/9d761fc0dddac842d6311a13f9845238/raw/f656fa91cc6f5b57d0a1b127d1e124ba6bd5fe63/week_temperature_sf.csv';*/
const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json';

export const useData = () => {
    const [data, setData] = useState(null);

    console.log(data);
  
    useEffect(() => {
      d3.json(jsonUrl).then(topology => {
        const { countries } = topology.objects;
        setData({
          contries : feature(topology, countries),
          interiors : mesh(topology, countries, (a, b) =>  a !== b )
        });
      });
    }, []);
  
    return data;
}