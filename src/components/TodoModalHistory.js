import React from 'react';

class TodoModalHistory extends React.Component{
    
    handleClick = () => {
        this.props.toggleModal()
    }

    render() {
        const {value, data} = this.props;
        return(
            <div className={value ? 'modal-history toggle' : 'modal-history'}>
                <button onClick={this.handleClick}>&times;</button>
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
}

export default TodoModalHistory;