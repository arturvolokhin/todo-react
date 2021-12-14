import React from 'react';

    const TodoCounter = ({count} : {count: number}) => {
        return (
           <div>
               <span>У вас: </span>
               <span className='todo-counter'>{count}</span>
               <span> 
                   {count === 1 ? ' задание' :
                   count > 1 && count <= 4 ? ' задания' :
                   ' заданий'}
               </span>
           </div>
        )
    }

export default TodoCounter;