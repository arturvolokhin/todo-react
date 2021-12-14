import React from "react";
import TodoItem from "./TodoItem";

interface Props {
  data: Todo[];
}

const TodoList = ({ data }: Props) => {
  return (
    <ul>
      {data.map((todo) => {
        return (
          <TodoItem
            data={todo}
            key={todo.id}
            id={todo.id}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
