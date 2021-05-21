import React from 'react';
import ReactDOM from 'react-dom';

import Appbar from './Appbar';

const rootElement =  document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
      <Appbar />
    </React.StrictMode>,
    rootElement
);