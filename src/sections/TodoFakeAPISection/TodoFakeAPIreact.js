import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        const updatedTasks = data.map(task => ({ ...task, completed: false }));
        setTasks(updatedTasks.slice(0, 5));
      })
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const handleChange = event => {
    setNewTask(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (newTask.trim()) {
      setTasks(prevTasks => [
        { id: prevTasks.length + 1, title: newTask, completed: false },
        ...prevTasks
      ]);
      setNewTask('');
    }
  };

  const handleDelete = id => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const handleCheckboxChange = id => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl mb-4 text-center">Todo List</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            value={newTask}
            onChange={handleChange}
            placeholder="Enter task"
            className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Add Task</button>
        </form>
        <ul className="list-none">
          {tasks.map(task => (
            <li key={task.id} className={`relative py-2 border-b border-gray-300 ${task.completed ? 'line-through' : ''}`}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id)}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer"
              />
              <span className="ml-8">{task.title}</span>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 px-2 py-1 bg-red-500 text-white rounded-full focus:outline-none"
                onClick={() => handleDelete(task.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);


export default TodoApp;