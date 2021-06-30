import React from 'react';

const TodoItem = (props) => {
    const {data, executeTask, removeTask, id} = props;

    return (
        <>
           <li 
                id={id}
                className='todo-item'>
                <div className='title-wrap'>
                    <span 
                        className={!data.complete ?
                        'todo-title' : 
                        'todo-title done'}>
                        {data.title}
                    </span>
                    <input 
                        onChange={() => executeTask(id)}
                        type='checkbox'
                        checked={data.complete}    
                    />
                </div>

                <button onClick={() => removeTask(id)}>&times;</button>
            </li>
        </>
    )   
}
    
export default TodoItem;