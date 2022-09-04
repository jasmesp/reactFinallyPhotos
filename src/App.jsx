import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Photo from './Photo'
import thumbnail from './assets/dish.jpeg'



function App() {
  const [count, setCount] = useState(0)
  return (<>
    <div className="App">
      <Photo src={thumbnail} alt="dish" title="sexy!"/>
      <Photo src={reactLogo} alt="react logo" title="SEXY!!"/>
    </div>
      <div className="county">
       <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>{count}</button>

      </div>
  </>)
}



export default App
