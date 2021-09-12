import React, { useState } from "react";
function Todolist(props) {
  const [done, itDone] = useState(false);
  function itdone() {
    itDone((prevalu) => {
      return !prevalu;
    });
  }
  return (
    <div onClick={itDone}>
      <li style={{ textDecoration: done ? "line-through" : "none" }}>
        {props.text};
      </li>
    </div>
  );
}
export default Todolist;
