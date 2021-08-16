import React from "react";

function Todo(props) {
  const item = props.item;
  const Delete = props.Delete;
function handleStyle(e){
    e.target.style.textDecoration = "line-through"
  }

  return (
    <>
      {item.map((value, i) => {
        return (
          <React.Fragment key={i}>
            <li onClick ={handleStyle} className ="li-child">
              {value}{" "}
              <button
              className = "delete-btn"
                onClick={() => {
                  Delete(i);
                }}
              >
             <i className="fa fa-trash-o"></i>
              </button>
            </li>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default Todo;
