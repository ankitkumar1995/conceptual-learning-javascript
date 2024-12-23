console.log("callback queue");
setTimeout(() => {
  console.log("callback");
}, 1000);
console.log("End");

console.log("microtask start");

setTimeout(() => {
  console.log("callback");
}, 1000);
Promise.resolve().then(() => {
  console.log("microtask promise");
});
console.log("End");

import React, { useReducer } from "react";

const initialState = { tasks: [] };

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { tasks: [...state.tasks, action.payload] };
    case "remove":
      return {
        tasks: state.tasks.filter((task, index) => index !== action.index),
      };
    default:
      return state;
  }
}

function TaskManager() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = () => {
    const task = prompt("Enter a new task:");
    dispatch({ type: "add", payload: task });
  };

  const removeTask = (index) => {
    dispatch({ type: "remove", index });
  };

  return (
    <div>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {state.tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
