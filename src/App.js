import React from 'react';
import { TodoCreate } from './TodoCreate';
import { TodoCreateTitle } from './TodoCreateTitle';
import { TodoCreateInput } from './TodoCreateInput';
import { TodoCreateButton } from './TodoCreateButton';
import { TodoCreateImg } from './TodoCreateImg';
import { TodoRight } from './TodoRight';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true},
//   { text: 'Tomar el curso de Intro a React.js', completed: false},
//   { text: 'Llorar con la Llorona', completed: false},
//   { text: 'Lalalalala', completed: false},
//   { text: 'Saludar a Mama', completed: true}
// ];

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    }
  );

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));

    setTodos(newTodos);
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  };

  return (
    <>
      <TodoCreate>
        <TodoCreateTitle />
        <TodoCreateInput />
        <TodoCreateButton />
        <TodoCreateImg />
      </TodoCreate>
      <TodoRight>
          <TodoCounter
            completed={completedTodos}
            total={totalTodos}
          />
          <TodoSearch
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
          />
          <TodoList>
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

      <CreateTodoButton />
    </>
  );
}

export default App;
