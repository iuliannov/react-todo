import "./App.css";

import { RefObject, useRef, useState } from "react";

type Todo = {
  text: string;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([{ text: "Initial Todo" }]);
  const inputRef = useRef<HTMLInputElement>(null);

  function addTodo() {
    const newTodo = { text: inputRef.current?.value } as Todo;
    if (!Boolean(newTodo.text.trim())) {
      throw new Error("Text is empty");
    }

    setTodos((oldTodos) => [...oldTodos, newTodo]);
  }

  return (
    <div className="App">
      <h1>Todos</h1>
      <div className="inputForm">
        <input
          className="todoinput"
          ref={inputRef}
          type="text"
          placeholder="What woult you like to remember?"
        />
        <button onClick={addTodo}>Add todo</button>
      </div>
      {todos.map((e) => (
        <li>{e.text}</li>
      ))}
    </div>
  );
}

export default App;
