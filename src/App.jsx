import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName";
import ADDtodo from "./components/ADDtodo";
import Todoitems from "./components/Todoitems";
import "./App.css";
import Welcomemessage from "./components/Welcomemessage";

function App() {
  const [todoItem, settodoItems] = useState([]);

  const handleNewItem = (itemName, itemDuedate) => {

    
    const newTodoItems = [
      ...todoItem,

      { name: itemName, dueDate: itemDuedate },
    ];

    settodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoitemName) => {
    const newTodoItems = todoItem.filter((item) => item.name !== todoitemName);
    settodoItems(newTodoItems);
    console.log(`deleted ${todoitemName}`);
  };

  return (
    <center className="todo-container">
      <AppName />
      <ADDtodo onNewItem={handleNewItem} />
      {todoItem.length === 0 && <Welcomemessage></Welcomemessage>}
      <Todoitems todoItems={todoItem} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
