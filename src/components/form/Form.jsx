/*eslint-disable*/
import React from 'react';
import "./form.css";
import { useState } from 'react';


function Form({arr, setArr}) {

  let [ id, setId ] = useState(0);


  const [ inputs, setInputs ] = useState({
    key: id,
    title: '',
    content: '',
    isDone: '완료!'
  });


  const { title, content } = inputs;


  const onChange = (e) => {
    const {value, name} = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const set_arr = () => {
    let arr_1 = [...arr]
    arr_1.push({...inputs, key: id})
    setArr(arr_1)
    setId(id => id + 1)
    console.log(arr_1)
  }

  return (

    <div className="form-box">
      <div className="items-1">
        <span>제목</span>
        <input type="text" name="title" onChange={onChange} value={title} className="title" autoFocus></input>
        <span>내용</span>
        <input type="text" name="content" onChange={onChange} value={content} className="content"></input>
      </div>
      <div className="items-2">
        <button onClick={() => {
          set_arr()
        }}>추가하기</button>
      </div>
    </div>
  );
}

export default Form;