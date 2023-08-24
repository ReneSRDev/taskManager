import './TodoErrorInfo.css';
import errorImage from './images/todoError.png'

function TodoErrorInfo() {
    return (
        <li className="todoErrorInfo">
            <img src={errorImage} alt="ErrorImage" />
            <span>Ha ocurrido un error inesperado</span>
        </li>
    );
}

export { TodoErrorInfo };