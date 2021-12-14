import React, {useState} from 'react';
import { useAppDispatch } from '../redux/hooks';
import { addTodo } from '../redux/todoSlice';
    

const TodoForm = () => {
    const [state, setState] = useState('');
    const dispatch = useAppDispatch();

    const handleClick = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (state.trim()) {
            dispatch(addTodo(state));
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