import React from 'react';

class TodoModalButton extends React.Component{
    
    handleClick = () => {
        this.props.toggleModal()
    }

    render() {
        return(
            <button onClick={this.handleClick}>&#128337;</button>
        )
    }
        
}

export default TodoModalButton;