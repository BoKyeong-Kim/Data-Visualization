import React from 'react';

export const Dropdown = ({options, id, selectedValue, onselectionchange}) => (
    <select id={id} onChange={event => onselectionchange(event.target.value)}>
      {options.map(({ value, label }) => (
        <option value={value} selected={value === selectedValue}>
          {label}
         </option>
      ))}
    </select>
  )