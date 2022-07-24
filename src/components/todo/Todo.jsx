/*eslint-disable*/
import React from 'react';
import "./todo.css";
import { useState } from 'react';



function Todo({todo, set_btn}) {


  return (
      <div className="todo-box">
      <div className="div-span">
        <span className="title-span">{todo.title}</span>
        <span className="content-span">{todo.content}</span>
        <span className="content-span">{todo.key}</span>
      </div>
      <div className="div-button">
        <button onClick={ (e) => {
          const todo_box = e.target.parentElement.parentElement
          todo_box.remove()
        }
        }>삭제하기</button>
        <button onClick={(e) => {
          set_btn(todo);
        }}>{todo.isDone}</button>
      </div>
    </div>


  );
}

export default Todo;