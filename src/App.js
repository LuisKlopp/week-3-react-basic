/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Layout from './components/layout/Layout';




function App() {

  let [ arr, setArr ] = useState([]);

  return (
    <div>
      <Layout arr={arr} setArr={setArr}/>
    </div>
  );
}



export default App;

