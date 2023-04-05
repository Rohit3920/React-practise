import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap"
import React, { useState, useEffect } from 'react';
import User1 from "./User1"

function App() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(1);

  return (
    <div className="App">

      <User1 count={count} data={data} />

      <Button variant = "warning" onClick={() => setData(data + 1)}>Update Data {data}</Button>
      <Button onClick={() => setCount(count + 1)}>Update Count {count}</Button>
      

    </div>
  );
}

export default App;
