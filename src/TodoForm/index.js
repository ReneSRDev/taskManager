import React from "react";
import './TodoForm.css';
import taskImage from './images/checkTask.png'
import { TodoContext } from '../TodoContext'

function TodoForm() {
    const {
        addTodo
    } = React.useContext(TodoContext);
    const[newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form
            className='todoForm-container'
            onSubmit={onSubmit}>
            <label className='todoForm-title'>Añadir una Nueva Tarea</label>
            <textarea
                className="todoForm-textArea"
                placeholder="Escriba una nueva tarea"
                onChange={onChange}
            />
            <button
                type="submit"
                className="todoForm-button"
            >Añadir Tarea</button>
            <div className="todoForm-img">
                <img src={taskImage} alt="AddTask" />
            </div>
        </form>
    );
}

export { TodoForm }