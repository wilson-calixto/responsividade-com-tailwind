import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <section 
        className='m-12
         flex h-screen items-center justify-center  bg-green-800 text-center text-2xl
         p-12 md:p-14 lg:p-16 xl:p-20
         '>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, id quis iste quibusdam numquam laudantium corrupti velit quas minus provident minima? Omnis deleniti quas in voluptatum dignissimos labore voluptatem optio.</p>
        </section>
      </div>
     
    </>
  )
}

export default App
