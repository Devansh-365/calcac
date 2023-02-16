import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "./components/Input";

function App() {
  const [post, setPost] = useState([]);
  const [data, setData] = useState({});

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
    axios({
      method: "post",
      url: "http://localhost:5000/entry",
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
    <div className="container">
      <form className="form" onSubmit={submit}>
        <header className="header">
          <h2>Calorie Calculator</h2>
        </header>
        <main className="body">
          <Input.Label>
            Dish
            <Input.Text name="dish" onChange={updateData} placeholder="0" />
          </Input.Label>
          <br />
          <Input.Label>
            Fat
            <Input.Text
              name="fat"
              type="number"
              onChange={updateData}
              placeholder="0"
            />
          </Input.Label>
          <br />
          <Input.Label>
            Ingredients
            <Input.Text
              name="ingredients"
              onChange={updateData}
              placeholder="0"
            />
          </Input.Label>
          <br />
          <Input.Label>
            Calories
            <Input.Text name="calories" onChange={updateData} placeholder="0" />
          </Input.Label>
          <br />
          <br />
        </main>
        <footer>
          <button type="submit">Submit</button>
        </footer>
      </form>
    </div>
  );
}

export default App;
