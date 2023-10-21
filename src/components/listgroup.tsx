import { Fragment } from "react";
function ListGroup() {
  let items = ["new york", "tokyo", "switchlamng", "london", "paris"];
  items = [];
  const Message = items.length == 0 ? <p>no items found</p> : null


  return (
    <>
      <h1>List</h1>
      {Message }
      <ul className="list-group">{items.map((item => <li key={item}>{item}</li>))}</ul>
    </>
  );
}
export default ListGroup;
