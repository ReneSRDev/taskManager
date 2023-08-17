import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className={`todoItem ${props.completed && 'todoItem--verified'}`}>
            <span className={`checkContainer ${props.completed && 'checkContainer--verified'}`}>
                <i className={`fa fa-check ${props.completed && 'fa-check--verified'}`} aria-hidden='true'></i>
            </span>
            <span className={`todoInfo ${props.completed && 'todoInfo--verified'}`}>{props.text}</span>
            <span className='trashContainer'>
                <i className='fa fa-xmark' aria-hidden='true'></i>
            </span>
        </li>
    );
}

export { TodoItem };