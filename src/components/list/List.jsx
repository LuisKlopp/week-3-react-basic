/*eslint-disable*/
import React from 'react';
import "./list.css";
import Todo from '../todo/Todo';

function List({arr, setArr}) {

  const map_arr = arr.map((todo, i) => (<Todo arr={arr} setArr={setArr} todo={todo} i={i}/>))

  return (

    
    <div className="list-box">
      <div className="list-1">
        <span>
          I'm working hard 🔥🔥🔥
        </span>
        <div className="map-list">
        {map_arr}
        </div>
      </div>
      <div className="list-2">
        <span>
        I'm done with my work 🎉🎉🎉
        </span>
        <div className="map-list">
          
        </div>
      </div>
    </div>
  );
}

export default List;