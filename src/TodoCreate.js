import './TodoCreate.css';

function TodoCreate(props) {
    return (
        <div className='todoCreate'>
            <div className='todoCreate--container'>
                {props.children}
            </div>
        </div>
    );
}

export { TodoCreate };