import './TodoSearch.css';

function TodoSearch({
        searchValue, 
        setSearchValue
    }) {
    return (
        <div className="todoSearch">
            <input
                placeholder="Cortar Cebolla"
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
        </div>
    );
}

export { TodoSearch };