import { TodoCreate } from '../TodoCreate';
import { TodoCreateTitle } from '../TodoCreateTitle';
import { TodoCreateInput } from '../TodoCreateInput';
import { TodoCreateButton } from '../TodoCreateButton';
import { TodoCreateImg } from '../TodoCreateImg';
import { TodoRight } from '../TodoRight';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo
    }) {
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

  export { AppUI }