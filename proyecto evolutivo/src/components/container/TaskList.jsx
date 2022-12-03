import React, { useState } from 'react';
import TaskComponent from '../pure/TaskComponent.jsx';
import { TaskClass } from '../../models/Task.class.js';
import { LEVELS } from '../../models/Levels';

const TaskList = () => {
  const defaultTask1 = new TaskClass(
    'My task',
    'Task description',
    true,
    LEVELS.NORMAL
  );

  const defaultTask2 = new TaskClass(
    'My task 2',
    'Task description 2',
    false,
    LEVELS.URGENT
  );

  const defaultTask3 = new TaskClass(
    'My task 3',
    'Descrition 3',
    false,
    LEVELS.BLOCKING
  );

  const mySum = new TaskClass('suma', 'description', false);

  const [tasks, setTask] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  const completeTask = (task) => {
    console.log('complete this task');
  };

  const Table = () => {
    return (
      
        <table>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Priority</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}  
              ></TaskComponent>
            );
          })}
          </tbody>
        </table>
    
    );
  };

   let tasksTable = <Table></Table>;

  return (
    <div>
      <h1>hola</h1>
       <Table/>
    </div>
  );
};

export default TaskList;
