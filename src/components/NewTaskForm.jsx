
import React, { useState } from 'react';
import FormHeader from './FormHeader';
import InputField from './InputField';
import SelectField from './SelectField';
import TextareaField from './TextareaField';
import ButtonGroup from './ButtonGroup';

export default function NewTaskForm({ onSave }) {
  const [dueDate, setDueDate] = useState('');
  const [formData, setFormData] = useState({
    assignedTo: '',
    status: 'not-started',
    priority: 'normal',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      dueDate
    });
    setFormData({
      assignedTo: '',
      status: 'not-started',
      priority: 'normal',
      description: ''
    });
    setDueDate('');
  };

  return (
    <div>
      <FormHeader title="Tasks" subtitle="New Task" />
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Assigned To"
            id="assignedTo"
            name="assignedTo"
            placeholder="User 1"
            value={formData.assignedTo}
            onChange={handleChange}
          />
          <SelectField
            label="Status"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            options={[
              { value: 'not-started', label: 'Not Started' },
              { value: 'in-progress', label: 'In Progress' },
              { value: 'completed', label: 'Completed' }
            ]}
          />
          <InputField
            label="Due Date"
            id="dueDate"
            name="dueDate"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <SelectField
            label="Priority"
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: 'low', label: 'Low' },
              { value: 'normal', label: 'Normal' },
              { value: 'high', label: 'High' }
            ]}
          />
        </div>
        <TextareaField
          label="Description"
          id="description"
          name="description"
          placeholder="Enter task description"
          value={formData.description}
          onChange={handleChange}
        />
        <ButtonGroup />
      </form>
    </div>
  );
}
