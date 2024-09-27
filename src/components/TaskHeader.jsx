
import React from 'react';
import { ClipboardList } from 'lucide-react';

export default function TaskHeader({ onNewTaskClick }) {
  
  const handleRefresh = () => {
    window.location.reload(); 
  };

  return (
    <div className="flex justify-between items-center mb-4 border-b pb-4">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-pink-500 rounded-md mr-3 flex items-center justify-center">
          <ClipboardList className="text-white" size={24} />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Task Management</h2>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onNewTaskClick} 
          className="bg-yellow-100 text-yellow-600 border-yellow-300 hover:bg-yellow-200 px-3 py-2 rounded"
        >
          New Task
        </button>
        <button
          onClick={handleRefresh}
          className="bg-yellow-100 text-yellow-600 border-yellow-300 hover:bg-yellow-200 px-3 py-2 rounded"
        >
          Refresh
        </button>
      </div>
    </div>
  );
}
