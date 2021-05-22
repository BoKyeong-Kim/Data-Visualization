import React from 'react';
import useStyles from './styles';
import "./App.css";
import { useData } from './useData';
import { Marks } from './Marks';


const width = 960;
const height = 500;

const App = () => {
  const classes = useStyles();
  const data = useData();

  if(!data) {
    return <pre>loading...</pre>
  }
  
  return (
    <div className={classes.root}>
    <svg width ={width} height={height}>
        <Marks data={data} />
      </svg>
  </div>
  )};

export default App;