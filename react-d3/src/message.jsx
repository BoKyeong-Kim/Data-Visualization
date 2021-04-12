import * as d3 from "d3";

export const message = data => {
    let message = '';
    message = message + Math.round(d3.csvFormat(data).length / 1024) + ' kB\n';
    message = message + data.length + ' rows\n';
    message = message + data.columns.length + ' columns';

    return message.split('\n').map( line => {
        return (<span>{line}<br/></span>)
    })
};
  