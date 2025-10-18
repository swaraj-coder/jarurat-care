import React from 'react';

export default function PatientCard({ patient, onView }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-md font-semibold">{patient.name}</h2>
        <p className="text-sm text-gray-500">Age: {patient.age}</p>
        <p className="text-sm text-gray-500">Contact: {patient.contact}</p>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onView(patient)}
          className="px-3 py-1 rounded bg-blue-600 text-white text-sm"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
