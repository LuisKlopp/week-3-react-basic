import React from 'react';
import "./todo.css";


function Todo({arr, setArr}) {
  return (
    <div className="todo-box-container">
    {arr.map((a) => {
      return(
      <div className="todo-box" key={a.key}>
      <div className="div-span">
        <span className="title-span">{a.title}</span>
        <span className="content-span">{a.content}</span>
      </div>
      <div className="div-button">
        <button onClick={ (e) => {
          const todo_box = e.target.parentElement.parentElement
          todo_box.remove()
        }
        }>삭제하기</button>
        <button>완료</button>
      </div>
    </div>
      )
    })}
    </div>


  );
}

export default Todo;