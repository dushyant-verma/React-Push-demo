import "./Body.css"
import { useState } from "react"; // import hook



export const TodoApp = () => {

    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    // created an fucntion named it as an TodoApp and created to  destructured hooks and used useState 
    // first created an tasks and then created an setTask with useState
    // then created an taskinput and setTaskInput wit useState

    const addTask = () => {
        if (taskInput.trim() !== '') {
            setTasks([...tasks, { text: taskInput, completed: false }]);
            setTaskInput('');
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index);
        setTasks(newTasks);
    };

    const toggleTaskCompletion = (index) => {
        const newTasks = tasks.map((task, i) => (
            i === index ? { ...task, completed: !task.completed } : task
        ));
        setTasks(newTasks);
    };


    return (


        <div className="App">
            <h1>To-Do List</h1>
            <div className="task-input">
                <input type="text" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />

                <button onClick={addTask}>Add Task</button>
            </div>

            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed ? 'Completed' : ''}>
                        <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
                        <button onClick={() => deleteTask(index)}>Delete</button>

                    </li>
                ))}
            </ul>
        </div>
    )










}