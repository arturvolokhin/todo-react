import React from 'react';

class TodoItem extends React.Component {
    
    handleChange = () => {
        const {executeTask, id} = this.props;
        console.log(this.props)
        executeTask(id);
    }

    handleClick = () => {
        const {removeTask, id} = this.props;
        removeTask(id);
    }

    render() {
        const {data, id} = this.props;
        return (
            <>
                <li 
                    id={id}
                    className='todo-item'>
                    <div className='title-wrap'>
                        <span 
                            className={!data.complete ?
                            'todo-title' : 
                            'todo-title done'}>
                            {data.title}
                        </span>
                        <input 
                            onChange={this.handleChange}
                            type='checkbox'
                            checked={data.complete}    
                        />
                    </div>

                    <button onClick={this.handleClick}>&times;</button>
                </li>
            </>
        )
    }
}

export default TodoItem;