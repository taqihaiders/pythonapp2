import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { Demo } from './Components/Demo/Demo';

function App() {
  const [initialState, setState] = useState([])
  const url = '/api'

  useEffect(() => {
    fetch(url).then(response => {
      if (response.status == 200) {
        return response.json
      }
    }).then(data=>setState(data))
  }, [])

  return (
    <div className="App">
      <Demo data={initialState}/>
    </div>
  );
}

export default App;
