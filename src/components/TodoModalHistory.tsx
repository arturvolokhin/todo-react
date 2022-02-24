import React from "react";
import { tasksApi } from "../redux/services/tasksServices";
import { Todo } from "../types";

interface Props {
  value: boolean;
  toggleModal: any;
}

const TodoModalHistory = ({ value, toggleModal }: Props) => {
  const {
    data: tasks,
    isSuccess,
    isLoading,
    isError,
    refetch
  } = tasksApi.useFetchAllUsersQuery(30);
  const [createPost] = tasksApi.useCreatePostMutation();
  const [deletePost] = tasksApi.useDeletePostMutation();
  const [changePost] = tasksApi.useChangePostMutation();

  const handleClick = async () => {
    const title = prompt();
    const task: Todo = {
      title,
      author: "Artur",
    };
    await createPost(task);
  };

  const deleteTask = () => {
    const id = prompt();
    id && deletePost(+id);
  };

  const changeTask = ({target}: {target: any}) => {
    const title = prompt();
    const task: Todo = {
      title,
      author: "Artur",
    };
    changePost({task, id: target.id});
  };

  return (
    <div className={value ? "modal-history toggle" : "modal-history"}>
      <button onClick={() => toggleModal()}>&times;</button>
      <ol className="history-list">
        {isLoading && <h2>Loading...</h2>}
        {isError && <h2>Server error</h2>}
        {isSuccess &&
          tasks &&
          tasks.map((task: any) => (
            <li key={task.id} onClick={changeTask} id={task.id}>
              {task.title}
            </li>
          ))}
      </ol>
      <button onClick={handleClick}>Add task</button>
      <button onClick={deleteTask}>Delete task</button>
      <button onClick={refetch}>Update data</button>
    </div>
  );
};

export default TodoModalHistory;
