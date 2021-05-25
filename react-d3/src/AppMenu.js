import React, { useState } from 'react';
import "./App.css";

const Dropdown = ({options, id, selectedValue, onselectionchange}) => (
  <select id={id} onChange={event => onselectionchange(event.target.value)}>
    {options.map(({ value, label }) => (
      <option value={value} selected={value === selectedValue}>
        {label}
       </option>
    ))}
  </select>
)

const options = [
  { value : 'dog', label : 'Dog'},
  { value : 'cat', label : 'Cat'},
  { value : 'hamster', label : 'Hamster'},
  { value : 'parrot', label : 'Parrot'},
  { value : 'spider', label : 'Spider'},
  { value : 'goldfish', label : 'Goldfish'}
];

const App = () => {
  const [selectedValue, setSelectedValue] = useState();
  console.log(selectedValue)
  return (
    <>
    <div>
    <label for="pet-select">Choose a pet : </label>
      <Dropdown 
        options={options} 
        id="pet-select"
        selectedValue={selectedValue}
        onselectionchange={setSelectedValue}
      />
    </div>
    </>
)};

export default App;