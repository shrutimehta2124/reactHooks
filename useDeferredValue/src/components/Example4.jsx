import { useState, useDeferredValue } from 'react';

function Example4() {
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearchTerm = useDeferredValue(searchTerm);

  // Simulated data for the table
  const rows = [
    { id: 1, name: 'John', age: 28 },
    { id: 2, name: 'Alice', age: 32 },
    { id: 3, name: 'Bob', age: 25 },
    { id: 4, name: 'Charlie', age: 30 },
    { id: 5, name: 'Diana', age: 27 },
  ];

  // Filter the rows based on the deferred search term
  const filteredRows = rows.filter(row =>
    row.name.toLowerCase().includes(deferredSearchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search by name"
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredRows.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Example4