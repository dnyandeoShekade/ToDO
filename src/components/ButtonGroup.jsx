
import React from 'react';

export default function ButtonGroup() {
  return (
    <div className="flex justify-end space-x-2">
      <button
        type="button"
        onClick={() => console.log('Cancelled')}
        className="px-4 py-2 bg-gray-200 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-300"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="px-4 py-2 bg-pink-500 text-white border border-transparent rounded-md hover:bg-pink-600"
      >
        Save
      </button>
    </div>
  );
}
