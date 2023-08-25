import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const {
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext);

    return (
        <div className="todoSearch">
            <input
                placeholder="Escribe para filtrar"
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
        </div>
    );
}

export { TodoSearch };