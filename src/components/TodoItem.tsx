import React from "react";
import { useAppDispatch } from "../redux/hooks";
import {deleteTodo, executeTodo} from "../redux/todoSlice";

interface Props {
  data: Todo;
  id: any;
}

const TodoItem = ({ data, id }: Props) => {
    const dispatch = useAppDispatch();

  return (
    <>
      <li id={id} className="todo-item">
        <div className="title-wrap">
          <span className={!data.complete ? "todo-title" : "todo-title done"}>
            {data.title}
          </span>
          <input
            onChange={() => dispatch(executeTodo(id))}
            type="checkbox"
            checked={data.complete}
          />
        </div>

        <button onClick={() => dispatch(deleteTodo(id))}>&times;</button>
      </li>
    </>
  );
};

export default TodoItem;
