import React from 'react';

export default function TaskSearch({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-4 flex justify-between items-center">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm border-gray-300 p-2 rounded"
      />
      <span className="text-sm text-gray-500">All Tasks</span>
    </div>
  );
}
