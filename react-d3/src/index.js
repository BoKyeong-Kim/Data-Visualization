import React from 'react';
import ReactDOM from 'react-dom';

import Appmap from './Appmap';

const rootElement =  document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
      <Appmap />
    </React.StrictMode>,
    rootElement
);