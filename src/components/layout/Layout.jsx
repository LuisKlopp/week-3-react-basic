import React from 'react';
import "./layout.css";
import Header from '../header/Header';
import Form from '../form/Form';
import List from '../list/List';
import Todo from '../todo/Todo';
import { useState } from 'react';



function Layout({arr, setArr}) {
  return (
    <div className="layout-div">
      <div className="todo-container">
        <Header/>
        <Form arr={arr} setArr={setArr} />
        <List arr={arr} setArr={setArr} />

      </div>
    </div>
  );
}

export default Layout;