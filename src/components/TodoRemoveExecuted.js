import React from 'react';

class TodoRemoveExecuted extends React.Component {
    
    handleClick = () => {
        this.props.removeExecutedTask(this.props.data)
    }

    render() {
        return(
            <button onClick={this.handleClick}>&#10062;</button>
        )
    }
}

export default TodoRemoveExecuted;