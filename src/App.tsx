import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <section 
        className='grid   gap-8 md:grid-cols-2 md:items-center md:text-left sm:max-xl:bg-blue-500
        '>
          <div> 
            <img 
            className='w-full rounded-lg'
            src="https://img.freepik.com/fotos-gratis/muito-bonito_1203-2633.jpg?semt=ais_hybrid&w=740&q=80" alt="placeholder" />
          </div>
          <div>
            <h1 className='text-4xl font-medium mb-2'>Headline</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo harum amet doloremque nobis laboriosam, rerum maxime quia saepe, ipsa nemo nostrum! Eos accusamus facilis doloribus est dolorum sapiente aperiam laudantium?</p>
          </div>
        </section>
        
      
     
    </>
  )
}

export default App
