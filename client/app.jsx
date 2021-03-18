import React from 'react';
import CreatePyramid from './components/createPyramid.jsx';
import NumberInput from './components/numberInput.jsx';

const App = () => {

  return (
    <div>
      <h1>Pyramid Descent!</h1>
      <h3>Create a randomized Pyramid</h3>
      <CreatePyramid />
      <h3>Enter a number to see if a path exists!</h3>
      <NumberInput />
    </div>
  )
}

export default App;