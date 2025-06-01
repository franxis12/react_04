import { useState, useEffect } from "react";


const AddTask =() => {
    const [tasks, setTasks] = useState([]);
    const [newTaskText, setNewTaskText] = useState('');

    const addTask = () => {
    if (!newTaskText.trim()) return; // Evita tareas vacías

    const newTask = {
      id: Date.now(),
      text: newTaskText,
      complete: false
    };

    // Guardar la información anterior y agregar la nueva
    setTasks(prevTasks => [...prevTasks, newTask]);
    setNewTaskText(''); // Limpiar input
    };

    const handleDelete = (id) => {
        setTasks(prev => prev.filter(task => task.id != id)); 
    } 

    const handleComplete = (id) => {
        setTasks((prev) => 
            prev.map(task =>
            task.id === id ? {...task, complete: !task.complete } : task
            )
        );
    }

    


    return(
        <>
        <div className="bg-light p-4 rounded-5 shadow">
            <h1 className="mx-2 fw-bold">Task List</h1>
            <div>
                <input 
                value={newTaskText}
                onChange={(e)=> setNewTaskText(e.target.value)} placeholder="Task name" className="form-control w-75 rounded-4 m-2"/>
                <button onClick={addTask} className="btn btn-primary rounded-5 mx-2">Add Task</button>
            </div>
        </div>
        <div className="bg-light p-4 rounded-5 shadow m-2">
            <ul className="m-0 p-1">
                {tasks.map((task) => (
                    <div key={task.id} className={`${task.complete ? "text-decoration-line-through border rounded-4 mb-1 alert alert-success" : "border rounded-4 mb-1"}`} >
                    <li className="ms-5" onClick={() => handleComplete(task.id)}>{task.text}<button onClick={() => handleDelete(task.id)} className="btn btn-sm btn-primary rounded-4 m-1 ms-5">Delete</button></li>
                    </div>
                ))}
            </ul>
        </div>
        </>
    )
}
export default AddTask;