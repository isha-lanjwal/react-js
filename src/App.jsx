import { useState } from 'react'
import './App.css'
import Card from './component/card.jsx'

function App() {
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
    <h2 className="bg-green-400 text-black p-4 rounded-xl mb-4">Talwind CSS</h2>
    <Card userData={data} btnText="Message" />
    <Card userData={data2} />
    </>
  )
}

export default App
