import React from "react";

type Todo = {
  text: string;
  deleteTodo: () => void;
};

export const Todo = ({ text, deleteTodo }: Todo) => {
  return (
    <li>
      {text} <button onClick={deleteTodo}>Delete</button>
    </li>
  );
};
