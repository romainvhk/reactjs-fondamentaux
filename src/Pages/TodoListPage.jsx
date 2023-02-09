import React, { useState, setState } from 'react'
import TaskList from '../Components/TaskList/TaskList';

export default function TodoListPage() {
    const [todoList, setTodoList] = useState([]);
    const [task, setTask] = useState("");

    const addTask = (event) => {
        event.preventDefault();
        setTodoList([...todoList, task]);
        setTask("");
    };



    return (
        <div className='todoListPage'>
            <h2>Todo List</h2>
            <form onSubmit={(event) => { addTask(event) }}>
                <input type="text" placeholder='Ajouter une tâche' value={task} onChange={(event) => { setTask(event.currentTarget.value) }} />
                <button type='submit'>Ajouter</button>
            </form>
            <TaskList todoList={todoList} setTodoList={setTodoList} />
        </div>
    )
}
