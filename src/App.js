/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

import Layout from './components/layout/Layout';




function App() {

  // useEffect(()=>{ 
  //     console.log('c반 1조 화이팅') 
  // })



  let [ arr, setArr ] = useState([]);


  
  return (
    <div>
      <Layout arr={arr} setArr={setArr}/>
    </div>
  );
}



export default App;

