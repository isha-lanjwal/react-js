import { useState } from 'react'
import './App.css'
import Card from './component/card.jsx'

function App() {
  // The useState hook is used in React functional components to manage state. It allows you to store and update values dynamically within a component.
  const [counter,setCount] = useState(0)

  // if we right setCount(counter+1) multiple times in addValue function, react will consider it as same operation
  // add will increment counter only by 1 on each click but if we write  setCount(counter => counter + 1) multiple times i.e.3
  // it will increment counter by 3 on each click as it is function where it takes previous value and update state where it aceept call back and provide last updated state, 
  // it is a use case of useStatw.
  const addValue = () => {
    setCount(counter => counter + 1)

  }
  const removeValue = () => {
    if(counter > 0){
      setCount(counter - 1)
    }
  }
  let data = {
    name: 'Erin Lindford',
    designation: 'Product Engineer',
    img:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
  let data2 = {
    name: 'ABC EFG',
    designation: 'Product Engineer',
    img:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
  return (
    <>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    <h2 className="bg-green-400 text-black p-4 rounded-xl mb-4 mt-4">Talwind CSS</h2>
    <Card userData={data} btnText="Message" />
    <Card userData={data2} />
    </>
  )
}

export default App
