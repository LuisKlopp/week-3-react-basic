/*eslint-disable*/
import React from 'react';
import "./todo.css";
import { useState } from 'react';



function Todo({arr, setArr, todo, i}) {

  // const set_arr = (e) => {
    
  // };


  return (
      <div className="todo-box">
      <div className="div-span">
        <span className="title-span">{todo.title}</span>
        <span className="content-span">{todo.content}</span>
      </div>
      <div className="div-button">
        <button onClick={ (e) => {
          const todo_box = e.target.parentElement.parentElement
          todo_box.remove()
        }
        }>삭제하기</button>
        <button onClick={(e) => {
          console.log(e.target)
        }}>{todo.isDone}</button>
      </div>
    </div>


  );
}

export default Todo;