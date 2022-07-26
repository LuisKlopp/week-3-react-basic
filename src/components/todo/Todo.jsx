/*eslint-disable*/
import React from 'react';
import "./todo.css";
import { useEffect } from 'react';



function Todo({todo, setBtn, setArr, arr, i}) {

  
  return (

      <div className="todo-box">
      <div className="div-span">
        <span className="title-span">{todo.title}</span>
        <span className="content-span">{todo.content}</span>
        <span style={{fontSize:"20px"}}>{todo.key}</span>
      </div>
      <div className="div-button">
        <button onClick={ (e) => {
          const todo_box = e.target.parentElement.parentElement
          todo_box.remove()
          console.log(arr)

          // let arr_1 = [...arr]
          // arr_1.splice(i, 1)
          // setArr(arr_1)
          // console.log(arr_1)
          // console.log(todo.key)
        }
        }>삭제하기</button>
        <button onClick={() => {
          setBtn(todo);
        }}>{todo.isDone}</button>
      </div>
    </div>
  );
}

export default Todo;