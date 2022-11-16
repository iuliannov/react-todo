import "./App.css";

import { RefObject, useEffect, useRef, useState } from "react";

type Todo = {
  text: string;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([{ text: "Initial Todo" }]);
  const [inputValue, setInputValue] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => inputRef.current?.focus());

  function addTodo() {
    inputRef.current?.focus();
    const newTodo = { text: inputValue } as Todo;
    if (!Boolean(newTodo.text.trim())) {
      throw new Error("Text is empty");
    }
    setTodos((oldTodos) => [...oldTodos, newTodo]);
    setInputValue("");
  }

  function deleteTodo(todo: Todo) {
    setTodos((oldTodos) => [...oldTodos].filter((e) => e !== todo));
  }

  return (
    <div className="App">
      <h1>Todos</h1>
      <div className="inputForm">
        <input
          ref={inputRef}
          className="todoinput"
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          value={inputValue}
          placeholder="What woult you like to remember?"
        />
        <button onClick={addTodo}>Add todo</button>
      </div>
      <div>
        {todos.map((e) => (
          <li>
            {e.text} <button onClick={() => deleteTodo(e)}>Delete</button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
