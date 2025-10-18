import React, { useState } from 'react';

export default function AddPatientForm({ onAdd, onClose }) {
  const [form, setForm] = useState({
    name: '',
    age: '',
    contact: '',
    email: '',
    address: '',
    notes: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newPatient = {
      id: Date.now(),
      name: form.name || 'Unnamed',
      age: form.age ? Number(form.age) : null,
      contact: form.contact,
      email: form.email,
      address: form.address,
      notes: form.notes,
    };
    onAdd(newPatient);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">Add New Patient</h3>

        <div className="grid gap-3">
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="p-2 border rounded" />
          <input name="age" placeholder="Age" value={form.age} onChange={handleChange} className="p-2 border rounded" />
          <input name="contact" placeholder="Contact" value={form.contact} onChange={handleChange} className="p-2 border rounded" />
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="p-2 border rounded" />
          <input name="address" placeholder="Address" value={form.address} onChange={handleChange} className="p-2 border rounded" />
          <textarea name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} className="p-2 border rounded" />
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button type="button" onClick={onClose} className="px-3 py-1 rounded border">Cancel</button>
          <button type="submit" className="px-3 py-1 rounded bg-blue-600 text-white">Add</button>
        </div>
      </form>
    </div>
  );
}
