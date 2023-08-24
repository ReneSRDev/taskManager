import './TodoLoading.css';

function TodoLoading() {
    return (
        <li className="todoLoading">
            <span className='todoLoadingIcon todoLoadingIcon--check'></span>
            <span className='todoLoadingIcon todoLoadingIcon--trash'></span>
        </li>
    );
}

export { TodoLoading };