import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext);

    return (
        <div className='todoHeader'>
            <span className="todoTitle">Lista de Tareas</span>
            <span className="todoSubTitle">Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> </span>
        </div>
    );
}

export { TodoCounter };