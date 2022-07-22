import React from 'react';
import "./list.css";
import Todo from '../todo/Todo';

function List({arr, setArr}) {
  return (
    <div className="list-box">
      <div className="list-1">
        <span>
          I'm working hard 🔥🔥🔥
        </span>
        <Todo arr={arr} setArr={setArr} />
      </div>
      <div className="list-2">
        <span>
        I'm done with my work 🎉🎉🎉
        </span>
      </div>
    </div>
  );
}

export default List;