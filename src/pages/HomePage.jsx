import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="text-center bg-cyan-200 py-16">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to Jarurat Care</h1>
      <p className="text-gray-600 max-w-xl mx-auto">
        A simple and modern patient records dashboard.
      </p>
      <div className="mt-8">
        <Link
          to="/patients"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          View Patients
        </Link>
      </div>
    </div>
  );
}
