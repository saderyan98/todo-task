import Navbar from "./components/Navbar"
import AddTodo from "./pages/AddTodo"
import Home from "./pages/Home"
import EditTodo from "./pages/EditTodo"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from 'react'

const App = () => {
  const [list, setList] = useState()

  return (
    <div>
      <BrowserRouter>
        <h1>Todo List</h1>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home list={list} setList={setList}/>}
          />
          <Route
            path='add/:id'
            element={<AddTodo list={list} setList={setList}/>}
          />
          <Route
            // dynamic :id to create custom route
            path='edit/:id'
            element={<EditTodo list={list} setList={setList}/>}
          />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App