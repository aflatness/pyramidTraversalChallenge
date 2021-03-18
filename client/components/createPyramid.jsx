import React, { useState, useEffect } from 'react';
import { CreatePyramid } from '../../pyramidTraverse';

const PyramidCreator = ({ setPyramid }) => {
  const [range, setRange] = useState();
  const [rows, setRows] = useState();

  const makePyramid = () => {
    const arr = [];
    for (let i = 1; i <= rows; i++) {
      let counter = i;
      while (counter > 0) {
        arr.push(Math.ceil(Math.random() * range));
        counter--;
      }
    }
    setPyramid(arr);
  }
  return (
    <div>
      <label htmlFor='range'>Set the range of values for the nodes: </label>
      <select name='range' onChange={({ target }) => setRange(target.value)}>
        <option hidden></option>
        {Array(20).fill().map((v, i) => <option key={i}>{i + 1}</option>)}
      </select>
      <br />
      <label htmlFor='rows'>Choose the number of rows for the pyramid: </label>
      <select name='rows' onChange={({ target }) => setRows(target.value)}>
        <option hidden></option>
        {Array(10).fill().map((v, i) => <option key={i}>{i + 1}</option>)}
      </select>
      <br/>
      <br/>
      <button onClick={makePyramid}>Create pyramid</button>
    </div>
  )
}

export default PyramidCreator;
