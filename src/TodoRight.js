import './TodoRight.css';

function TodoRight(props) {
    return (
        <div className='todoRight'>
            {props.children}
        </div>
    );
}

export { TodoRight };