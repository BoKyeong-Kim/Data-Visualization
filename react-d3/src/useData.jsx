import { useState,  useEffect } from 'react';
import * as d3 from "d3";

const csvUrl = 'https://gist.githubusercontent.com/BoKyeong-Kim/d39d56276edefd0999731e76dbdcb805/raw/d08ce4d95e4bf94261c53d3490deb555f357be36/UN_Population_2019.csv'

export const useData = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const row = (d) => {
        d.Population = +d['2020'];
        return d;
      };
      d3.csv(csvUrl, row).then((data) => {
        setData(data.slice(0, 10));
      });
    }, []);
  
    return data;
}