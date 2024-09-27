import React from 'react';

export default function FormHeader({ title, subtitle }) {
  return (
    <div className="bg-pink-500 text-white p-4 flex justify-between items-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      <span className="text-sm">{subtitle}</span>
    </div>
  );
}
