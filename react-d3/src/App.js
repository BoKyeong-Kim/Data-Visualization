import React, { useState,  useEffect } from 'react';
import * as d3 from "d3";
import "./App.css";
import { message } from './message';

const csvUrl = 'https://gist.githubusercontent.com/BoKyeong-Kim/ac522f3205103f1db0268505d2febd46/raw/8437c5d2fc446bc04a76e330cfba0fb99c5c2084/cssNamedColors.csv'

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.csv(csvUrl).then(setData);
  }, []);

  return <div className='pre'>Data is<br/> {data ? message(data) : 'loading....'}</div>;
};

export default App;