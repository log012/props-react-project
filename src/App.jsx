import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mb-10'>
    <h1 className='bg-red-100 p-11 rounded-xl'>Hello This is Props Project</h1>
    </div>
      <div className='flex flex-row justify-between space-x-2 items-center '>
         <Card name="About Windows Laptop" content="This Laptop come with windows Os"/>
        <Card name="About Macbook" content="This Laptop is come with  macOs"/>
        <Card name="About Linux Laptop" content="This Laptop is come with  linux os "/>
      </div>
     <div className='mt-10'>
         <h1 className='text-center text-pretty'>Here The Card is three but in code i create only one Card components  and pass props to it.</h1>
     </div>

    </>
  )
}

export default App
