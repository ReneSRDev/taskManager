import React from 'react';
import { TodoForm } from '../TodoForm';
import { TodoRight } from '../TodoRight';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoLoading } from '../TodoLoading';
import { TodoErrorInfo } from '../TodoErrorInfo';
import { TodoPrimeraInfo } from '../TodoPrimeraInfo';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';

function AppUI() {
    const {
        loading,
        error,
        totalTodos,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoRight>
                <TodoCounter/>
                <TodoSearch/>

                <TodoList>
                    {loading && 
                        <>
                            <TodoLoading />
                            <TodoLoading />
                            <TodoLoading />
                        </>
                    }
                    {error && <TodoErrorInfo />}
                    {(!loading && totalTodos === 0) && <TodoPrimeraInfo />}
                    
                    {searchedTodos.map(todo => 
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                    )}
                </TodoList>
            </TodoRight>
    
            <CreateTodoButton
                openModal={openModal}
                setOpenModal={setOpenModal}
            />

            {openModal &&
                <Modal>
                    <TodoForm />
                </Modal>
            }
        </>
    );
}

  export { AppUI }