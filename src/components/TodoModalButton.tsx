import React from 'react';

const TodoModalButton = ({toggleModal} : {toggleModal: any}) => {
    return(
        <button onClick={() => toggleModal()}>&#128337;</button>
    )
}

export default TodoModalButton;