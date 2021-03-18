import React, { useState, useEffect } from 'react';
import { pyramidTraverse } from '../../pyramidTraverse';

const NumberInput = ({ pyramid }) => {
  const [number, setNumber] = useState('');
  const [path, setPath] = useState('');

  const findPath = () => {
    if (Number.isNaN(number)) {
      setPath('Please enter a valid, positive number.')
      return;
    }
    const res = pyramidTraverse([1, 1, 2], number);
    res ? setPath(res) : setPath('No path found');
  }

  return (
    <>
      <label>
        Enter a number to find: {' '}
      </label>
      {/* <div> */}
        <input type='text' onChange={({ target }) => setNumber(Number(target.value))}/>{' '}
        <button type='button' onClick={findPath}>Find</button>
      {/* </div> */}
      <div>{path}</div>
    </>
  )
}

export default NumberInput;
