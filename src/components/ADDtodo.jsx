import { useState, useRef } from "react";

function ADDtodo({ onNewItem }) {
  const todoNameElement = useRef("");

  const dueDateElement = useRef("");

  const handleAddButtonClicked = (event) => {
    event.preventDefault();

    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    console.log(`${todoName} ${dueDate}`)
    onNewItem(todoName, dueDate);
  };


  return (
    <center className="todo-container">
      <form className="row new-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            ref={todoNameElement}
            type="text"
            placeholder="Enter item here"
          ></input>
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} ></input>
        </div>

        <div className="col-2">
          <button type="onSubmit" className="btn btn-success new-btn">
            ADD
          </button>
        </div>
      </form>
    </center>
  );
}

export default ADDtodo;
