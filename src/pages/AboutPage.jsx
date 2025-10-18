import React from 'react';

export default function AboutPage() {
  return (
    <div className="container bg-cyan-200 mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">About Jarurat Care</h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        Jarurat Care is a patient records dashboard .
      </p>

   

      <p className="text-gray-500">© {new Date().getFullYear()} Jarurat Care. All rights reserved.</p>
    </div>
  );
}
