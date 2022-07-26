/*eslint-disable*/
import React from 'react';
import "./form.css";
import { useState } from 'react';


function Form({arr, setArr}) {


  
  
  let [ id, setId ] = useState(0);


  // const increase_id = () => {
  //   setId(id + 1);
  // }

  function increase_id () {
    setId(id + 1);
  }



  const set_arr = () => {

    
    let title = document.querySelector('.title')
    let content = document.querySelector('.content')


    let arr_1 = [...arr]

    let obj = {
      key : id,
      title : title.value,
      content : content.value,
      isDone : '완료!'
    }

    // if (title.value !== '' && content.value !== '') {
      increase_id();
      arr_1.push(obj)
      setArr(arr_1)
      title.value = '';
      content.value = '';
    // } 
    // else {
    //   alert('제목과 내용칸을 전부 채워주세요!')
    // }
    document.querySelector(".title").focus();
  }


  
  return (

    <div className="form-box">
      <div className="items-1">
        <span>제목</span>
        <input type="text" className="title" autoFocus></input>
        <span>내용</span>
        <input type="text" className="content"></input>
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