import React from 'react';
import './index.css';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';
import TodoCounter from './components/TodoCounter';
import TodoRemoveExecuted from './components/TodoRemoveExecuted';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        } 
    }

    addTask = (value) => {
        const {todos} = this.state;
        this.setState({
            todos: [...todos, {id: todos.length, title: value, complete: false}]
        })
    }

    executeTask = (id) => {     
        const state = this.state.todos.slice();
        state[id].complete = !state[id].complete;
        
        this.setState({
            todos: state
        })
    }

    removeTask = (id) => {
        const state = this.state.todos.filter(todo => todo.id !== id);
        state.map((todo, index) => todo.id = index);
       
        this.setState({
            todos: state
        })
    }

    removeExecutedTask = (data) => {
        const state = data.filter(todo => todo.complete === false);
        state.map((todo, index) => todo.id = index);
        
        this.setState({
            todos: state
        })
    }

 

    render() {
        const {todos} = this.state;
        return (
            <>
                <div className='wrapper'>
                    <header>
                        <TodoCounter count={todos.length}/>
                        <TodoForm addTask={this.addTask}/>
                        <TodoRemoveExecuted 
                            data={todos} 
                            removeExecutedTask={this.removeExecutedTask}
                        />
                    </header>
                    
                    {todos.length !== 0 ?
                        <TodoList 
                            data={todos}
                            executeTask={this.executeTask}
                            removeTask={this.removeTask} 
                        /> :
                        <h2>You dont have todo</h2>}
                </div>
            </>
        );
    }
}

export default App;