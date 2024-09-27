import React, { useState } from 'react';
import TaskHeader from './TaskHeader';
import TaskSearch from './TaskSearch';
import TaskRow from './TaskRow';
import Pagination from './Pagination';
import NewTaskForm from './NewTaskForm'; 
import Modal from './Modal'; 

const initialTasks = [
  { id: 1, assignedTo: 'User 1', status: 'Completed', dueDate: '2024-12-10', priority: 'Low', comments: 'Task 1 comments' },
  { id: 2, assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', comments: 'Task 2 comments' },
  { id: 3, assignedTo: 'User 3', status: 'Not Started', dueDate: '2024-08-16', priority: 'Low', comments: 'Task 3 comments' },
  { id: 4, assignedTo: 'User 4', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'Task 4 comments' },
];

export default function TaskTable() {
  const [tasks, setTasks] = useState(initialTasks);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const filteredTasks = tasks.filter(task =>
    Object.values(task).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  
  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

 
  const handleSave = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]); 
    setIsModalOpen(false); 
  };

  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <TaskHeader onNewTaskClick={toggleModal} />
      <div className="flex justify-between items-center mb-4">
        <TaskSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <NewTaskForm onSave={handleSave} />
      </Modal>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2"></th>
              <th className="font-semibold py-2">Assigned To</th>
              <th className="font-semibold py-2">Status</th>
              <th className="font-semibold py-2">Due Date</th>
              <th className="font-semibold py-2">Priority</th>
              <th className="font-semibold py-2">Comments</th>
              <th className="font-semibold py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <TaskRow key={task.id} task={task} handleDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
}
