import React, { useState } from 'react';

import useList from '../../hooks/useList';
import useConter from '../../hooks/useConter';

const Tasklist = () => {
  const tasks = useList([]);
  const numTasks = useConter(tasks.lenList);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    tasks.push(newTask);
    numTasks.increment(6);
    setNewTask('');
  };

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  return (
    <div>
      <h1>
        Task List
      </h1>
      {tasks.isEmpty()
        ? null
        : (
          <h3>
            Do you have
            {' '}
            {numTasks.value}
            {' '}
            Task
          </h3>
)}
      <form onSubmit={handleSubmit}>
        <input value={newTask} onChange={handleInputChange} placeholder="New Task" type="text" />
        <button type="submit"> Create Task</button>
        {/* <button type="button" onClick={() => tasks.sortList(tasks)}>sort</button>
        <button type="button" onClick={() => tasks.reverseList(tasks)}>Reset</button> */}
      </form>
      {tasks.isEmpty()
        ? (<p>Task List is Empty</p>)
        : (
          <ul style={{ listStyle: 'none' }}>
            {tasks.value.map((task, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  onClick={() => {
                    numTasks.decrement();
                    tasks.remove(index);
                  }}
                  checked={false}
                />
                { task }
              </li>
            ))}
          </ul>
        )}
      <button type="button" onClick={() => tasks.removeList()}>Restar</button>
    </div>
  );
};

export default Tasklist;
