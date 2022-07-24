/*eslint-disable*/
import React from 'react';
import "./list.css";
import Todo from '../todo/Todo';

function List({arr, setArr}) {



  const set_btn = (todo) => {

    let new_arr = arr;

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

  
  const working_filter = arr.filter((element) => { return element.isDone === '완료!' })
  const done_filter = arr.filter((element) => { return element.isDone === '취소!' })
  const map_arr = working_filter.map((todo, i) => (<Todo set_btn={set_btn} todo={todo} key={i}/>))
  const done_arr = done_filter.map((todo, i) => (<Todo set_btn={set_btn} todo={todo} key={i}/>))

  return (

    
    <div className="list-box">
      <div className="list-1">
        <span>
          I'm working hard 🔥🔥🔥
        </span>
        <div className="map-list">
          {
           map_arr
          }
        </div>
      </div>
      <div className="list-2">
        <span>
        I'm done with my work 🎉🎉🎉
        </span>
        <div className="map-list">
          {
            done_arr
          }
        </div>
      </div>
    </div>
  );
}

export default List;