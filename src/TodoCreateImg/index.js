import './TodoCreateImg.css';
import taskImage from './images/checkTask.png'

function TodoCreateImg() {
    return (
        <div className="todoCreateImg">
            <img src={taskImage} alt="CheckTask" />
        </div>
    );
}

export { TodoCreateImg };