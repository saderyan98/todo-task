import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getTodo } from "../api/getTodo"
import { updateTodo } from "../api/updateTodo"

const EditTodo = () => {
    const { id } = useParams()
    const [toUpdate, setToUpdate] = useState('')
    const [userInput, setUserInput] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()

    try {    
        await updateTodo({
            _id: toUpdate._id,
            text: userInput
        })
        alert('edited item')
    } catch (error) {
        console.error("Failed to edit todo:", error);
    }}

    useEffect(() => {
        const fetchTodo = async () => {
            let data = await getTodo(id)
            setToUpdate(data)
        }
        fetchTodo()
    },[])

    if (!todo) return <p>loading...</p>
    return (
        <div>
            <h1>edit</h1>
            <h2>{toUpdate.text}</h2>
            <input 
                onChange={(e) => { setUserInput(e.target.value)}}
            />
            <button onClick={submitHandler}>submit</button>
        </div>
    )
}
export default EditTodo