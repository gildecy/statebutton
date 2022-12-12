import { useState } from 'react';
import './App.css'


// USANDO ESTADOS NO REACT 

function App() {
  
  const [count, setCount] = useState(0);
  

  const funçãoprincipal = () => {
    setCount((previewState) => previewState + 1); 

   
    
  };

  return (
    <div>
      
      <p>meu nome é: {count} </p>
      <button onClick={funçãoprincipal}> + </button>

      

    </div>
  )
}

export default App


