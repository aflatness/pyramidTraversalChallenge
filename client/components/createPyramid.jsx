import React, { useState, useEffect } from 'react';
import { CreatePyramid } from '../../pyramidTraverse';

const PyramidCreator = () => {
  const [range, setRange] = useState();
  const [rows, setRows] = useState();
  const [pyramid, setPyramid] = useState();

  const makePyramid = () => {

  }
  return (
    <>
      <label for='rows'>Choose the number of rows of the pyramid: {' '}</label>
      <select name='rows' onChange={({ target }) => setRows(target.value)}>
        <option hidden></option>
        {Array(10).fill().map((v, i) => <option key={i}>{i + 1}</option>)}
      </select>
    </>
  )
}

export default PyramidCreator;
