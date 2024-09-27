import React from 'react';

export default function Pagination() {
  return (
    <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
      <div>
        <span className="mr-2">20</span>
        <select className="border rounded p-1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="space-x-2">
        <button className="text-gray-600 border p-1 rounded">&lt;&lt; First</button>
        <button className="text-gray-600 border p-1 rounded">&lt; Prev</button>
        <button className="text-gray-600 border p-1 rounded">1</button>
        <button className="text-gray-600 border p-1 rounded">Next &gt;</button>
        <button className="text-gray-600 border p-1 rounded">Last &gt;&gt;</button>
      </div>
    </div>
  );
}
