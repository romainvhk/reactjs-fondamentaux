import React from 'react'

export default function TaskList(props) {
    let { todoList, setTodoList } = props;

    const deleteTask = (index) => {
        
        // Créer une copie du tableau stagit ate
        const newState = todoList;
        // Splice la copie du tableau grâce à l'id
         newState.splice(index, 1)

         setTodoList([...newState]);
   
    }


  return (
    <div>
        <ul className='taskList'>
            {todoList.map((task, index) => {
                return (
                    <li key={index}>{task}<button onClick={() => {deleteTask(index)}}>Supprimer</button></li>
                    
                )
            })}
        </ul>
    </div>
  )
}
