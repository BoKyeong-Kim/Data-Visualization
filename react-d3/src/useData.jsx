import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

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
        csv(csvUrl, row).then(setData);
    }, []);


    return data;
}