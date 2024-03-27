const Todoitem= ({todoName,todoDate, onDeleteClick}) => {


  return (
    <div class="row new-row">
      <div className="col-6">{todoName} </div>
      <div className="col-4"> {todoDate}</div>

      <div className="col-2">
        <button type="button" className="btn btn-danger new-btn" onClick={()=> onDeleteClick(todoName)}>
          DELETE
        </button>
      </div>
    </div>
  );

}

export default Todoitem;