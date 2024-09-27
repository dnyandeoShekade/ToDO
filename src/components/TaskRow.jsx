
import React, { useState } from 'react';

export default function TaskRow({ task, handleDelete, handleSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    handleSave(editedTask); 
    setIsEditing(false);
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="py-2"><input type="checkbox" /></td>
      {isEditing ? (
        <>
          <td className="py-2"><input type="text" name="assignedTo" value={editedTask.assignedTo} onChange={handleChange} /></td>
          <td className="py-2">
            <select name="status" value={editedTask.status} onChange={handleChange}>
              <option value="not-started">Not Started</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </td>
          <td className="py-2"><input type="date" name="dueDate" value={editedTask.dueDate} onChange={handleChange} /></td>
          <td className="py-2">
            <select name="priority" value={editedTask.priority} onChange={handleChange}>
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="high">High</option>
            </select>
          </td>
          <td className="py-2"><input type="text" name="comments" value={editedTask.comments} onChange={handleChange} /></td>
          <td className="py-2">
            <button
              onClick={handleSaveClick}
              className="text-green-600 hover:text-green-700 px-2 py-1"
            >
              💾 Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="text-gray-600 hover:text-gray-700 px-2 py-1"
            >
              ❌ Cancel
            </button>
          </td>
        </>
      ) : (
        <>
          <td className="py-2 text-blue-600">{task.assignedTo}</td>
          <td className="py-2">{task.status}</td>
          <td className="py-2">{task.dueDate}</td>
          <td className="py-2">{task.priority}</td>
          <td className="py-2">{task.comments}</td>
          <td className="py-2">
            <button
              onClick={handleEdit}
              className="text-blue-600 hover:text-blue-700 px-2 py-1"
            >
              ✏️ Edit
            </button>
            <button
              onClick={() => handleDelete(task.id)}
              className="text-red-600 hover:text-red-700 px-2 py-1"
            >
              🗑️ Delete
            </button>
          </td>
        </>
      )}
    </tr>
  );
}
