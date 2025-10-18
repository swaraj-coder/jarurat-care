import React, { useEffect, useState } from 'react';
import { fetchPatients } from '../api/patients';
import PatientCard from './PatientCard';
import PatientModal from './PatientModal';
import AddPatientForm from './AddPatientForm';

export default function PatientsPage() {
  const [patients, setPatients] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPatients()
      .then(data => {
        setPatients(data);
        setFiltered(data);
      })
      .catch(err => setError(err.message || 'Error'))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) setFiltered(patients);
    else setFiltered(patients.filter(p => p.name.toLowerCase().includes(q)));
  }, [query, patients]);

  function handleAdd(newPatient) {
    setPatients(prev => [newPatient, ...prev]);
    setQuery('');
  }

  if (loading) return <div className="p-6">Loading patients...</div>;
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search patients by name..."
            className="p-2 border rounded w-64"
          />
          <button onClick={() => setShowAdd(true)} className="px-3 py-1 rounded bg-green-600 text-white">Add New Patient</button>
        </div>

        <div className="text-sm text-gray-600">{filtered.length} patient(s)</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map(p => (
          <PatientCard key={p.id} patient={p} onView={setSelected} />
        ))}
      </div>

      <PatientModal patient={selected} onClose={() => setSelected(null)} />
      {showAdd && <AddPatientForm onAdd={handleAdd} onClose={() => setShowAdd(false)} />}
    </div>
  );
}
