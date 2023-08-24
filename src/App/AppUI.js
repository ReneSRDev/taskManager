import { TodoCreate } from '../TodoCreate';
import { TodoCreateTitle } from '../TodoCreateTitle';
import { TodoCreateInput } from '../TodoCreateInput';
import { TodoCreateButton } from '../TodoCreateButton';
import { TodoCreateImg } from '../TodoCreateImg';
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

function AppUI() {
    return (
        <>
        <TodoCreate>
            <TodoCreateTitle />
            <TodoCreateInput />
            <TodoCreateButton />
            <TodoCreateImg />
        </TodoCreate>

        <TodoRight>
            <TodoCounter/>
            <TodoSearch/>

            <TodoContext.Consumer>
                {({
                    loading,
                    error,
                    totalTodos,
                    searchedTodos,
                    completeTodo,
                    deleteTodo
                }) => (
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
                )}
            </TodoContext.Consumer>

        </TodoRight>
    
        <CreateTodoButton />
        </>
    );
}

  export { AppUI }