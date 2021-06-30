import React, {useState} from 'react';
import './index.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';
import TodoCounter from './components/TodoCounter';
import TodoRemoveExecuted from './components/TodoRemoveExecuted';
import TodoModalButton from './components/TodoModalButton';
import TodoModalHistory from './components/TodoModalHistory';

const App = () => {

    const [todos, setTodos] = useState([]);
    const [toggle, setToggle] = useState(false);

    const addTask = (value) => {
        setTodos([...todos, {id: todos.length, title: value, complete: false}])
    }

    const executeTask = (id) => {     
        const state = todos.slice();
        state[id].complete = !state[id].complete;
        setTodos(state)
    }

    const removeTask = (id) => {
        const prevState = todos.slice();
        const newState = prevState.filter(todo => todo.id !== id);
        newState.map((todo, index) => todo.id = index);
        setTodos(newState);
    }

    const removeExecutedTask = (data) => {
        const newState = data.filter(todo => todo.complete === false);
        newState.map((todo, index) => todo.id = index);
        setTodos(newState);
    }

    const toggleModal = () => {
        setToggle(!toggle);
    }


    return (
        <div className='wrapper'>
            <TodoModalHistory 
                value={toggle} 
                toggleModal={toggleModal}
                data={todos}
            />
            <header>
                <TodoCounter count={todos.length}/>
                <TodoForm addTask={addTask}/>
                <TodoModalButton toggleModal={toggleModal}/>
                <TodoRemoveExecuted 
                    data={todos} 
                    removeExecutedTask={removeExecutedTask}
                />
            </header>
                    
            {todos.length !== 0 ?
                <TodoList 
                    data={todos}
                    executeTask={executeTask}
                    removeTask={removeTask} 
                /> :
                <h2>You dont have todo</h2>}
        </div>
    );
}

export default App;