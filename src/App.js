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

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true},
  { text: 'Tomar el curso de Intro a React.js', completed: false},
  { text: 'Llorar con la Llorona', completed: false},
  { text: 'Lalalalala', completed: false}
];

function App() {
  return (
    <>
      <TodoCreate>
        <TodoCreateTitle />
        <TodoCreateInput />
        <TodoCreateButton />
        <TodoCreateImg />
      </TodoCreate>
      <TodoRight>
          <TodoCounter completed={16} total={25} />
          <TodoSearch />
          <TodoList>
            {defaultTodos.map(todo => 
              <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              />
              )}
          </TodoList>
        </TodoRight>

      <CreateTodoButton />
    </>
  );
}

export default App;
