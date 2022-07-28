/*eslint-disable*/
import React from 'react';
import "./todo.css";
import { useEffect } from 'react';



function Todo({todo, setBtn, setArr, arr, i}) {

  useEffect(() => {
    console.log(todo)
  }, []);

  return (

      <div className="todo-box">
      <div className="div-span">
        <span className="title-span">{todo.title}</span>
        <span className="content-span">{todo.content}</span>
        <span style={{fontSize:"20px"}}>{todo.key}</span>
      </div>
      <div className="div-button">
        <button onClick={ () => {
          let arr_1 = [...arr]

          // if (todo.isDone === '완료!') {
          //   arr_1.splice(i, 1)
          // } else {
          // }
          arr_1 = arr_1.filter((element) => {
            console.log(element.key)
            return element.key !== todo.key 
          })
          console.log(todo.key)
          setArr(arr_1)

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