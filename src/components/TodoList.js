import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    const {data, executeTask, removeTask} = props;
        return (
            
            <ul>
                {data.map(todo => {
                    return (
                        <TodoItem 
                            data={todo} 
                            key={todo.id} 
                            id={todo.id} 
                            executeTask={executeTask}
                            removeTask={removeTask}
                        />
                    )    
                })}
            </ul>
        )
}

export default TodoList;