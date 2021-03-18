import React, { useState, useEffect } from 'react';
import { pyramidTraverse } from '../../pyramidTraverse';

const NumberInput = ({ pyramid }) => {
  const [number, setNumber] = useState('');
  const [path, setPath] = useState('');
  const [error, setError] = useState(false);

  const findPath = () => {
    if (!pyramid.length) {
      setPath('Please create a pyramid first.');
      setError(true);
      return;
    }
    if (Number.isNaN(number)) {
      setPath('Please enter a valid, positive number.');
      setError(true);
      return;
    }
    setError(false);
    const res = pyramidTraverse(pyramid, number);
    res ? setPath(res) : setPath('No path found');
  }

  return (
    <>
      <label>Enter a number to find: {' '}</label>
        <input type='text' onChange={({ target }) => setNumber(Number(target.value))}/>{' '}
        <button type='button' onClick={findPath}>Find</button>
      <div className={error ? 'error' : 'answer'}>{path}</div>
    </>
  )
}

export default NumberInput;
