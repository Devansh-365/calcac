import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "./components/Input";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000`, { crossdomain: true })
      .then((result) => {
        console.log("result", result);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  console.log(post);

  return (
    <div>
      <header className="App-header"></header>
      <main>
        <Input.Text />
      </main>
    </div>
  );
}

export default App;
