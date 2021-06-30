import React from 'react';

const TodoRemoveExecuted = (props) => {
    const {removeExecutedTask, data} = props;

    return(
        <button onClick={() => removeExecutedTask(data)}>&#10062;</button>
    )
}

export default TodoRemoveExecuted;