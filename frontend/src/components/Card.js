import { Link } from "react-router-dom"

const Card = ({ todo, deleteHandler }) => {

    return (
        <div>
            <h3>{todo.text}</h3>
            <button onClick={deleteHandler(todo.id)}>delete</button>
            <Link
                to={`/${todo._id}`} 
            >
            edit
            </Link>
        </div>
    )
}
export default Card