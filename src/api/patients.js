export async function fetchPatients() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error('Failed to fetch patients');
  const users = await res.json();

  return users.map(u => ({
    id: u.id,
    name: u.name,
    age: Math.floor(Math.random() * 63) + 18,
    contact: u.phone,
    email: u.email,
    address: `${u.address.suite}, ${u.address.street}, ${u.address.city}`,
  }));
}
