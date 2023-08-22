import './TodoCounter.css';

function TodoCounter({total, completed}) {
    return (
        <div className='todoHeader'>
            <span className="todoTitle">Lista de Tareas</span>
            <span className="todoSubTitle">Has completado <span>{completed}</span> de <span>{total}</span> </span>
        </div>
    );
}

export { TodoCounter };