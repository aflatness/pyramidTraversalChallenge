import React, { useState, useEffect } from 'react';
import { pyramidTraverse } from '../../pyramidTraverse';

const NumberInput = ({ pyramid }) => {
  const [number, setNumber] = useState('');
  const [path, setPath] = useState('');

  const findPath = () => {
    if (!pyramid.length) {
      setPath('Please create a pyramid first.');
      return;
    }
    if (Number.isNaN(number)) {
      setPath('Please enter a valid, positive number.');
      return;
    }
    const res = pyramidTraverse(pyramid, number);
    res ? setPath(res) : setPath('No path found');
  }

  return (
    <>
      <label>
        Enter a number to find: {' '}
      </label>
        <input type='text' onChange={({ target }) => setNumber(Number(target.value))}/>{' '}
        <button type='button' onClick={findPath}>Find</button>
      <div>{path}</div>
    </>
  )
}

export default NumberInput;
