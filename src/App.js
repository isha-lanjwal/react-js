import './App.css';
// import Chai from './Chai';
import { useState } from 'react'

function App() {
  let [counter,setCounter] = useState(0)

  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }
  return (
    <>
      {/* <Chai/> */}
      <h2 className='bg-green-400'>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </> 
  );
}

export default App;
