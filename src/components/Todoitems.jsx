import Todoitem from "./Todoitem";

const Todoitems = ({ todoItems,onDeleteClick }) => {
  return (
    <>
      <div className="items">
        {todoItems.map((item) => (
          <Todoitem  key ={item.name} todoDate={item.dueDate}  todoName={item.name} onDeleteClick={onDeleteClick}></Todoitem>
        ))}
      </div>
    </>
  );
};

export default Todoitems;
