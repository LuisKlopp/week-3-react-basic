/*eslint-disable*/
import React from 'react';
import "./list.css";
import Todo from '../todo/Todo';

function List({arr, setArr}) {



  const setBtn = (todo) => {

    let new_arr = [...arr]

    let new_obj = new_arr.map(user => {
        if ( user.key === todo.key ) {
          if (user.isDone === '완료!') {
            return (
              {...user, isDone : '취소!'}
            )
          } else {
            return (
              {...user, isDone : '완료!'}
            )
          }
        } else {
          return {...user}
        }
      })

    setArr(new_obj);
  } 







  
  const working_filter = arr.filter((todo) => { return todo.isDone === '완료!' }).map((todo, i) => {
    return (<Todo setBtn={setBtn} todo={todo} setArr={setArr} arr={arr} key={i} i={i}/>)
  })

  const done_filter = arr.filter((todo) => { return todo.isDone === '취소!' }).map((todo, i) => {
    return (<Todo setBtn={setBtn} todo={todo} setArr={setArr} arr={arr} key={i} i={i}/>)
  })
  
  // console.log(working_filter)
  // console.log(done_filter)

  // const map_arr = working_filter.map((todo, i) => (<Todo setBtn={setBtn} todo={todo} setArr={setArr} arr={arr} key={i} i={i}/>))
  // const done_arr = done_filter.map((todo, i) => (<Todo setBtn={setBtn} todo={todo}  setArr={setArr} arr={arr} key={i} i={i}/>))

  return (

    
    <div className="list-box">
      <div className="list-1">
        <span>
          I'm working hard 🔥🔥🔥
        </span>
        <div className="map-list">
          {working_filter}
        </div>
      </div>
      <div className="list-2">
        <span>
        I'm done with my work 🎉🎉🎉
        </span>
        <div className="map-list">
          {done_filter}
        </div>
      </div>
    </div>
  );
}

export default List;