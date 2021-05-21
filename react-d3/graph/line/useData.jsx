import { useState,  useEffect } from 'react';
import * as d3 from "d3";

/*const csvUrl_population = 'https://gist.githubusercontent.com/BoKyeong-Kim/d39d56276edefd0999731e76dbdcb805/raw/d08ce4d95e4bf94261c53d3490deb555f357be36/UN_Population_2019.csv'*/
/*const csvUrl_iris = 'https://gist.githubusercontent.com/BoKyeong-Kim/65eb63985dfd842abe946b8234c77fac/raw/c205d59d5a2b43c42ed51082a92ab54a941c7b43/iris_dataset';*/
const csvUrl = 'https://gist.githubusercontent.com/BoKyeong-Kim/9d761fc0dddac842d6311a13f9845238/raw/f656fa91cc6f5b57d0a1b127d1e124ba6bd5fe63/week_temperature_sf.csv';

export const useData = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const row = d => {
        d.temperature = +d.temperature;
        d.timestamp = new Date(d.timestamp);
        return d;
      };
      d3.csv(csvUrl, row).then(setData);
    }, []);
  
    return data;
}