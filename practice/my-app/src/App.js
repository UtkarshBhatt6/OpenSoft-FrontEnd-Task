import './App.css';
import React, { useState } from 'react';

function App() {
  const [state,setState]=useState({count: 4, theme: 'blue'});
  const count=state.count;
  const theme= state.theme;

  function decrementCount(){
    setState(prevState =>{
      return {count: prevState.count-1,
              theme: 'green',
      }
    });
    
  }
  function incrementCount(){
    setState(prevState =>{
      return {count: prevState.count+1,
              theme: 'red',
      }
    });
  }
  return (
   <>
   <button onClick={decrementCount}>-</button>
   <span>{count}</span>
   <span>{theme}</span>
   <button onClick={incrementCount}>+</button>
   </>
  );
}

export default App;
