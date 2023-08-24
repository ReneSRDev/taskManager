import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
    const {
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <button
            className="createTodo"
            onClick={
                () => {
                    setOpenModal(state => !state);
                }
            }    
        >
            {!openModal && <span>Agregar Nueva Tarea</span>}
            {openModal && <span>Regresar a la Lista</span>}
        </button>
    )
}

export { CreateTodoButton };