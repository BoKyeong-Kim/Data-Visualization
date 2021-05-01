import { useState,  useEffect } from 'react';
import * as d3 from "d3";

/*const csvUrl_population = 'https://gist.githubusercontent.com/BoKyeong-Kim/d39d56276edefd0999731e76dbdcb805/raw/d08ce4d95e4bf94261c53d3490deb555f357be36/UN_Population_2019.csv'*/
const csvUrl = 'https://gist.githubusercontent.com/BoKyeong-Kim/65eb63985dfd842abe946b8234c77fac/raw/c205d59d5a2b43c42ed51082a92ab54a941c7b43/iris_dataset';

export const useData = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const row = d => {
        d.sepal_length = +d.sepal_length;
        d.sepal_width = +d.sepal_width;
        d.petal_length = +d.petal_length;
        d.petal_width = +d.petal_width;
        return d;
      };
      d3.csv(csvUrl, row).then(setData);
    }, []);
  
    return data;
}