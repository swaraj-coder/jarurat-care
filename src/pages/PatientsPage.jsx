import React, { useEffect, useState } from 'react';
import { fetchPatients } from '../api/patients';

export default function PatientsPage() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    contact: '',
  });

  // Fetch data
  useEffect(() => {
    fetchPatients()
      .then(data => setPatients(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient(prev => ({ ...prev, [name]: value }));
  };

  const handleAddPatient = (e) => {
    e.preventDefault();
    if (!newPatient.name || !newPatient.age || !newPatient.contact) return;
    const newEntry = {
      id: patients.length + 1,
      ...newPatient,
      email: 'n/a',
      address: 'Local Entry',
    };
    setPatients([...patients, newEntry]);
    setNewPatient({ name: '', age: '', contact: '' });
    setShowForm(false);
  };

  if (loading)
    return <p className="text-center py-10 text-blue-600 font-semibold">Loading patients...</p>;
  if (error)
    return <p className="text-center text-red-600 py-10">Error: {error}</p>;

  return (
    <div className="min-h-screen bg-cyan-200 py-10">
      <div className="container mx-auto p-4 bg-cyan-200 shadow rounded-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Patient Records</h2>

        {/* Add New Patient Toggle */}
        {!showForm && (
          <div className="text-center mb-6">
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow transition"
            >
              + Add New Patient
            </button>
          </div>
        )}

        {/* Add New Patient Form */}
        {showForm && (
          <form
            onSubmit={handleAddPatient}
            className="max-w-md mx-auto bg-blue-100 p-6 rounded-lg mb-8 shadow"
          >
            <h3 className="text-lg font-semibold mb-4 text-blue-700">Add New Patient</h3>

            <input
              type="text"
              name="name"
              value={newPatient.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full p-2 mb-3 border rounded"
              required
            />
            <input
              type="number"
              name="age"
              value={newPatient.age}
              onChange={handleInputChange}
              placeholder="Age"
              className="w-full p-2 mb-3 border rounded"
              required
            />
            <input
              type="text"
              name="contact"
              value={newPatient.contact}
              onChange={handleInputChange}
              placeholder="Contact"
              className="w-full p-2 mb-4 border rounded"
              required
            />

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                Save
              </button>
            </div>
          </form>
        )}

        {/* Patient Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {patients.map(p => (
            <div
              key={p.id}
              className="bg-blue-100 rounded-lg shadow p-4 border border-blue-200"
            >
              <h3 className="font-semibold text-lg text-blue-700">{p.name}</h3>
              <p>Age: {p.age}</p>
              <p>Contact: {p.contact}</p>
              <p className="text-sm text-gray-600 mt-2">{p.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
