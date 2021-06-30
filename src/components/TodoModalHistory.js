import React from 'react';


const TodoModalHistory = ({value, toggleModal, data}) => {
    return(
        <div className={value ? 'modal-history toggle' : 'modal-history'}>
            <button onClick={() => toggleModal()}>&times;</button>
            <ol className='history-list'>
                {data.map(todo => { 
                    return (
                        <li key={todo.id}>{todo.title}</li>
                    )
                })}     
            </ol>
            
        </div>
    )
}

export default TodoModalHistory;