import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios"


function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000`,{ crossdomain: true }).then((result)=>{
        console.log("result",result);
      }).catch((error)=>{
        console.log("Error",error);
      });
  }, []);

  console.log(post)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
