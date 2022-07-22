import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './components/form/Form';
import Header from './components/header/Header';
import Layout from './components/layout/Layout';
import List from './components/list/List';
import Todo from './components/todo/Todo';



function App() {

  let [ arr, setArr ] = useState([])

  return (
    <div>
      <Layout arr={arr} setArr={setArr}/>
    </div>
  );
}



export default App;
