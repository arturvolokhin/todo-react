import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  title: string;
  complete: boolean;
}

interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface State {
  todo: Todo[];
  tasks: Task[];
  status: string;
  error: string;
}

const initialState: State = {
  todo: [],
  tasks: [],
  status: "",
  error: "",
}

const sliceName = "todo";

export const fetchTasks: any = createAsyncThunk(
  `${sliceName}/fetchTasks`,
  async (arg, api) => {
    const response = fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`);
    const data = (await response).json();
    return data;
  }
)

export const todoSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    addTodo(state, { payload }: { payload: string }) {
      state.todo.push({ id: state.todo.length, title: payload, complete: false });
    },
    deleteTodo(state, { payload }: { payload: number }) {
      state.todo = state.todo.filter((todo) => todo.id !== payload);
    },
    executeTodo(state, { payload }: { payload: number }) {
      state.todo[payload].complete = !state.todo[payload].complete;
    },
    deleteExecutedTodo(state) {
      const arr = state.todo.filter(task => !task.complete);
      state.todo = arr.map((task, index) => {
        task.id = index;
        return task;
      })
    }
  },
  extraReducers: {
    [fetchTasks.pending]: (state: State) => {
      state.status = "loading";
    },
    [fetchTasks.fulfilled]: (state: State, { payload }: { payload: any }) => {
      state.status = "resolve";
      state.tasks = payload;
    },
  }

})

export const { addTodo, deleteTodo, executeTodo, deleteExecutedTodo } = todoSlice.actions;
export default todoSlice.reducer;