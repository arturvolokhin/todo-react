import React, {useState} from 'react';
    

const TodoForm = (props) => {

    const [state, setState] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        if (state.trim()) {
            props.addTask(state);
            setState('');
        }
    }

    return (
       <form onSubmit={handleClick}>
           <input onChange={(e) => setState(e.target.value)} 
               value={state} 
               type='text' 
               placeholder='Write your message'></input>
           <button type='submit'>Add</button>
       </form>
    )
}
    
export default TodoForm;