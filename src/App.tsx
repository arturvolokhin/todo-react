import React, { useState } from "react";
import "./index.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoCounter from "./components/TodoCounter";
import TodoRemoveExecuted from "./components/TodoRemoveExecuted";
import TodoModalButton from "./components/TodoModalButton";
import TodoModalHistory from "./components/TodoModalHistory";
import { useAppSelector } from "./redux/hooks";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const { todo: todos } = useAppSelector((state) => state.todo);

  const toggleModal = () => {
    setToggle(!toggle);
  };

  return (
    <div className="wrapper">
      <TodoModalHistory value={toggle} toggleModal={toggleModal} />
      <header>
        <TodoCounter count={todos.length} />
        <TodoForm />
        <TodoModalButton toggleModal={toggleModal} />
        <TodoRemoveExecuted />
      </header>

      {todos.length > 0 ? (
        <TodoList data={todos} />
      ) : (
        <h2>You dont have todo</h2>
      )}
    </div>
  );
};

export default App;
