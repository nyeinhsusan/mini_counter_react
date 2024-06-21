import React from 'react'
import Counter from './components/Counter'
import CounterText from './components/CounterText'
const App = () => {
  return (
    <div className='counter d-flex justify-content-center align-items-center '>
    <CounterText/>
      <Counter />
    </div>
  )
}

export default App
