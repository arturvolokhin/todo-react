import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }

    handleClick = (e) => {
        e.preventDefault();
        if (this.state.value.trim()) {
            this.props.addTask(this.state.value);
            this.setState({value: ''});
        }
    }

    render() {
        return (
            <form onSubmit={this.handleClick}>
                <input onChange={this.handleChange} 
                    value={this.state.value} 
                    type='text' 
                    placeholder='Write your message'></input>
                <button type='submit'>Add</button>
            </form>
        )
    }
}

export default TodoForm;