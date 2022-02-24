import React from 'react';
import {useAppDispatch} from "../redux/hooks";
import {deleteExecutedTodo} from "../redux/todoSlice";

const TodoRemoveExecuted = () => {
    const dispatch = useAppDispatch();

    return(
        <button onClick={() => dispatch(deleteExecutedTodo())}>&#10062;</button>
    )
}

export default TodoRemoveExecuted;