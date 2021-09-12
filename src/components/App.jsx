import React, { useState } from "react";
import Todolist from "./Todolist";
function App() {
  const [inputText, setInput] = useState("");
  const [items, setItems] = useState([]);
  function hendlechange(event) {
    const newText = event.target.value;
    setInput(newText);
  }

  function additem() {
    setItems((prevalu) => {
      return [...prevalu, inputText];
    });
    setInput("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={hendlechange} type="text" value={inputText} />
        <button onClick={additem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toodoitem) => {
            return <Todolist text={toodoitem} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
/* 
step 1 in line 23 
value={inputText} by using  State Practice and Javascript ES6 Spread Operator 
using HOOK we add the new user text in setInput object 
in line 6 to 9 we using hook function by using hendlechange 
*/

/*
step 2 we making the array in linea 5 
by using Map in line 30 to 31
we add new element in list 
in Map when new element is add the using Map it add list bydefolet 
*/

/*
step 3 line 24 to 26 by using add element we add new line in the  function additem
in  function additem line 11 to 16
we add new element in array with old value and return the valu in fome of array 
this function is active when add button is push 
 */

/* in line 8
we remove text in main line which add by user for pre-text
 */
