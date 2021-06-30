import React from 'react';
import TodoItem from './TodoItem';


class TodoList extends React.Component {
   
    render() {
        const {data, executeTask, removeTask} = this.props;
        return (
            <>
                <ul>
                    {data.map((todo, index) => {
                        return <TodoItem 
                                    data={todo} 
                                    key={todo.id} 
                                    id={todo.id} 
                                    executeTask={executeTask}
                                    removeTask={removeTask}
                                />
                    })}
                </ul>
            </>
        )
    }
}


export default TodoList;