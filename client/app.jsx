import React, { useState } from 'react';
import Pyramid from './components/pyramid.jsx';
import CreatePyramid from './components/createPyramid.jsx';
import NumberInput from './components/numberInput.jsx';

const App = () => {
  const [pyramid, setPyramid] = useState([]);

  return (
    <div id='main'>
      <div id='info'>
        <h1 id='title'>Pyramid Descent!</h1>
        <h2>Create a randomized Pyramid</h2>
        <CreatePyramid setPyramid={setPyramid} />
        <h2>Enter a number to see if a path exists!</h2>
        <NumberInput pyramid={pyramid}/>
      </div>
      <Pyramid pyramid={pyramid}/>
    </div>
  )
}

export default App;