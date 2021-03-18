import React from 'react';
import { makePyramidArray } from '../../pyramidTraverse.js';

const Pyramid = ({ pyramid }) => {
  const legs = '/ \\';
  let text = '';

  const pyrArr = makePyramidArray(pyramid);

  pyrArr.forEach((row, i) => {
    row.forEach((v, j) => {
      text += i !== j ? `${v} ` : `${v}`;
    })
    if (i !== pyrArr.length - 1) {
      text += `\n${legs.repeat(i + 1)}\n`;
    }
  })

  return (
    <div id='pyramid'>{text.split('\n').map((v, i) => <div key={i}>{v}</div>)}</div>
  )
}

export default Pyramid;
