import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(1)

  useEffect(() => {

    alert("you have changed the counter to" + counter);
 

  }, [counter])

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>


    </div>
  );
}

export default App;
