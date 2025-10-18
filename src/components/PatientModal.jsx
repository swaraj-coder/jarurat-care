import React from 'react';

export default function PatientModal({ patient, onClose }) {
  if (!patient) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{patient.name}</h3>
          <button onClick={onClose} className="text-gray-500">✕</button>
        </div>

        <div className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Age:</strong> {patient.age}</p>
          <p><strong>Contact:</strong> {patient.contact}</p>
          <p><strong>Email:</strong> {patient.email}</p>
          <p><strong>Address:</strong> {patient.address}</p>
          <p><strong>Company:</strong> {patient.company}</p>
          <p><strong>Notes:</strong> {patient.notes}</p>
        </div>

        <div className="mt-6 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
